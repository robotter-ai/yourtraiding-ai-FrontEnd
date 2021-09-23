import json
import os
import re
from datetime import datetime

from gql import Client
from gql.transport.requests import RequestsHTTPTransport
from pandas import DataFrame
import numpy as np

os.environ['GQL_BASE_URL'] = "https://nwss3pdjyrfp3dzrx75cj3f7wy.appsync-api.eu-central-1.amazonaws.com/graphql"
os.environ['SECRET_GQL_KEY'] = "da2-bwite7k3tvbbdgryxq5m7mwmgm"
os.environ['GQL_SCHEMA_PATH'] = 'yourtrading-ai/amplify/backend/api/yourtradingai/build/schema.graphql'

# Load schema
with open(os.environ.get('GQL_SCHEMA_PATH')) as f:
    schema_str = f.read()

client = Client(
    #schema=schema_str,
    transport=RequestsHTTPTransport(
        url=os.environ.get('GQL_BASE_URL'),
        headers={'content-type': 'application/json',
                 'x-api-key': os.environ.get('SECRET_GQL_KEY')}))


class EnhancedJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        return super(EnhancedJSONEncoder, self).default(obj)


def dump(obj):
    encoder = EnhancedJSONEncoder()
    if type(obj) is DataFrame:
        obj = obj.to_dict("records")
    obj_str = encoder.encode(obj)
    obj_str = re.sub(r'(?="\S*?":)"(\S*?)"', '\\1', encoder.encode(obj))
    #obj_str = obj_str.replace("<a href=\\", "<a href=")
    #obj_str = obj_str.replace("\\>", ">")
    obj_str = re.sub(r'\\(\S+)\\', '\\1', obj_str)
    return obj_str
