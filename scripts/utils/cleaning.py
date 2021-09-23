from datetime import datetime

from pandas import DataFrame


def clean_time_duplicates(df: DataFrame):
    for i in range(len(df)):
        if 'AM' in df.date.iloc[i] or 'PM' in df.date.iloc[i]:
            df.at[i, 'date'] = datetime.strptime(df.date.iloc[i], '%Y-%m-%d %I-%p')
        elif '/' in df.date.iloc[i]:
            if ':' in df.date.iloc[i]:
                df.at[i, 'date'] = datetime.strptime(df.date.iloc[i], '%Y/%m/%d %H:%M:%S')
            else:
                df.at[i, 'date'] = datetime.strptime(df.date.iloc[i], '%Y/%m/%d')
        else:
            df.at[i, 'date'] = datetime.fromisoformat(df.date.iloc[i])
    df.drop_duplicates(subset=['date'], inplace=True)

    print(f"clean_time_duplicates() reduced data to {len(df)} entries")


def clean_eth_scan_data(df: DataFrame):
    for i in range(len(df)):
        df.at[i, 'date'] = datetime.strptime(df.date.iloc[i], '%m/%d/%Y')
    df.drop_duplicates(subset=['date'], inplace=True)

    print(f"clean_eth_scan_data() reduced data to {len(df)} entries")