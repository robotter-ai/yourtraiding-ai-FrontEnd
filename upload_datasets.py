import scripts.db.graphql
import scripts.db.operations as ops
from scripts.db import init_data
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--upload', type=str, default="Coin")
parser.add_argument('--delete_gen_ids', type=bool, default=True)
args = parser.parse_args()

print("Getting data from API...")
coin_df = ops.list_items(args.upload)

if args.delete_gen_ids:
    print("Removing generated IDs...")
    for entry in coin_df['id']:
        if entry not in [d['id'] for d in init_data[args.upload]]:
            ops.delete_one(args.upload, entry)

print(f"Adding {args.upload}...")
for entry in init_data[args.upload]:
    if entry['id'] not in coin_df['id'].tolist():
        ops.create_one(args.upload, entry)
