from datetime import datetime, timedelta, timezone

import pandas as pd
from pandas import DataFrame
import numpy as np

from scripts.utils import clean_time_duplicates, log_returns, clean_eth_scan_data

tz0 = timezone(timedelta(hours=0))


def normalize_to_other(df: DataFrame, other: DataFrame):
    scale = (df.max() - df.min()) / (other.max() - other.min())
    df = df.apply(lambda x: x / scale)
    return df


def generate_csv():
    df = DataFrame()
    df["date"] = pd.date_range(freq='h', start=datetime(day=17, month=7, year=2010), end=datetime.now())
    df.set_index('date', inplace=True)

    projects = ['BTC', 'ETH', 'BNB', 'ADA', 'ETC', 'LTC', 'LINK']
    for project in projects:
        data = pd.read_csv(f"raw_data/hour/Binance_{project}USDT_1h.csv")
        print(f"Got {len(data)} entries for {project}")
        clean_time_duplicates(data)

        data.set_index('date', inplace=True)
        data.sort_index(inplace=True, ascending=True)

        data['midprice'] = (data['open'] + data['close']) / 2
        data['returns'] = log_returns(data['close'])

        data['vola'] = data['high'] - data['low']
        data['vola'] = log_returns(data['vola'])
        data['vola'].replace([np.NINF, np.PINF], np.NaN, inplace=True)
        data['vola'].interpolate("cubic", inplace=True)

        data['Volume USDT'].replace(0, np.NaN, inplace=True)
        data['Volume USDT'].interpolate("cubic", inplace=True)
        data['cashvol'] = log_returns(data['Volume USDT'])

        if project == 'ETH':
            gas_data = pd.read_csv(f"raw_data/export-AvgGasPrice.csv")
            print(f"Got {len(gas_data)} entries for ETH gas data")
            clean_eth_scan_data(gas_data)

            gas_data.drop(columns='unix', inplace=True)
            gas_data.set_index('date', inplace=True)
            gas_data.sort_index(inplace=True, ascending=True)
            # Converting the index as date
            gas_data.index = pd.to_datetime(gas_data.index)
            gas_data = gas_data.resample('1h').ffill()
            data = data.join(gas_data).ffill()
            data['txncostETH'] = (data['Value (Wei)'] / 1e18) * 65000 * data['midprice']
            data = data[['returns', 'vola', 'cashvol', 'txncostETH']]
        else:
            data = data[['returns', 'vola', 'cashvol']]

        print(len(data))
        data = data.dropna(axis=0)
        data.drop(data.tail(1).index, inplace=True)
        data.drop(data.head(1).index, inplace=True)
        print(len(data))
        #data['vola'] = normalize_to_other(data['vola'], data['returns'])
        #data['cashvol'] = normalize_to_other(data['cashvol'], data['returns'])

        data.rename(columns={'returns': f'returns{project}', 'cashvol': f'cashvol{project}',
                             'vola': f'vola{project}', 'midprice': f'midprice{project}'}, inplace=True)
        df = df.join(data)

    df.dropna(axis=0, inplace=True)
    df.sort_index(inplace=True, ascending=True)
    df.reset_index(drop=True, inplace=True)
    path = f"dataset/crypto_vola_{df.size}.csv"
    print(f"Saving to {path}")
    df.to_csv(path_or_buf=path, index=False, na_rep='0.0')

generate_csv()