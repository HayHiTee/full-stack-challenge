from decimal import Decimal

import requests

from services.utils import calculate_distance


class BreweriesService:
    def __init__(self, **kwargs):
        # AutoGenerate attributes for parameters
        for field in ('state', 'city', 'lat', 'long'):
            setattr(self, field, kwargs.get(field, None))

        self.url = f'https://api.openbrewerydb.org/breweries?by_state={self.state}'

    @staticmethod
    def parse_value(val):
        return Decimal(val) if val else 0

    def _get_breweries_by_state(self):
        response = requests.get(self.url)
        if 200 <= response.status_code < 300:
            return response.json()
        return []

    def process_data(self):
        breweries = self._get_breweries_by_state()
        print(breweries)
        data = sorted(breweries, key=lambda x: calculate_distance(Decimal(self.lat), Decimal(self.long),
                                                                  self.parse_value(x.get('latitude', 0.00)),
                                                                  self.parse_value(x.get('longitude', 0.00))),
                      reverse=True)
        return data[-5:]
