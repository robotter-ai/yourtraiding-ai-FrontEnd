import scripts.db.data

init_data = {
    "Coin": data.coins,
    "Source": data.sources
}

columns = {
    "Coin": data.coins[0].keys(),
    "Source": data.sources[0].keys(),
    "Dataset": ["id", "sourceID", "coinID", "title", "interval", "count", "mean", "std", "min", "max", "description"],
    "TimeEntry": ["datetime", "value"]
}
