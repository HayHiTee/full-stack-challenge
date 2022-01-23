from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from services.breweriesAPI import  BreweriesService

from breweries.serializers import BreweriesSerializer


class ListBreweries(ListAPIView):
    queryset = []
    serializer_class = BreweriesSerializer

    def get(self, request, *args, **kwargs):
        query_params = self.request.query_params
        city = query_params.get("city")
        state = query_params.get("state")
        lat = query_params.get('lat')
        long = query_params.get('long')
        serializer = self.serializer_class(data=query_params)
        if serializer.is_valid():

            breweriesService = BreweriesService(city=city, state=state, lat=lat, long=long)

            return Response(breweriesService.process_data())
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

