import scripts.db.graphql
import scripts.db.operations as ops
from scripts.db import init_data
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--add', type=str, default=False)
args = parser.parse_args()
print(f"Adding {args.add}...")

for entry in init_data[args.add]:
    ops.create_one(args.add, entry)
