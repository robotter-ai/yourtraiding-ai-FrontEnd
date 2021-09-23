import pandas as pd
import db.operations as ops


coin_df = ops.list_items('Coin')

for entry in coin_df['id']:
    print(entry)
#data = pd.read_csv(f"raw_data/hour/Binance_{project}USDT_1h.csv")