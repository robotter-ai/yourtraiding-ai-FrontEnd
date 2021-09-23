from datetime import datetime
from typing import Optional

constraints = {
    "projects": "projects_symbol_key",
    "price_data": "price_data_pkey",
    "sources": "sources_full_name_key",
    "blockchain_data": "blockchain_data_pkey",
    "fee_data": "fee_data_pkey",
    "tags": "tags_pkey",
    "relations": "relations_pkey"
}

tables = {
    "projects": {
        "id": int,
        "full_name": str,
        "symbol": str,
        "created_at": datetime,
        "updated_at": datetime,
        "description": Optional[str],
        "project_url": Optional[str],
        "tracker_url": Optional[str]
    },
    "sources": {
        "id": int,
        "full_name": str,
        "url": str,
        "api_url": Optional[str],
        "description": Optional[str]
    },
    "tags": {
        "symbol": str,
        "tag_name": str,
        "source_id": int,
        "applicable_since": Optional[datetime]
    },
    "relations": {
        "symbol1": int,
        "symbol2": str,
        "name": str,
        "directed": Optional[bool],
        "weight": Optional[int]
    },
    "price_data": {
        "open_time": datetime,
        "close_time": datetime,
        "project_id": int,
        "open": float,
        "high": float,
        "low": float,
        "close": float,
        "volume": float,
        "source_id": int
    },
    "blockchain_data": {
        "id": int,
        "project_id": int,
        "open_time": datetime,
        "close_time": datetime,
        "txn_count": int,
        "large_txn_count": Optional[int],
        "block_time": Optional[float],
        "current_supply": float,
        "current_market_cap": float,
        "hashrate": Optional[float],
        "active_addresses": Optional[int],
        "new_addresses": Optional[int],
        "avg_txn_value": Optional[float],
        "avg_txn_cost": Optional[float],
        "source_id": int
    },
    "fee_data": {
        "open_time": datetime,
        "close_time": datetime,
        "project_id": int,
        "avg_txn_cost": float,
        "median_txn_cost": float,
        "source_id": int
    },
}
