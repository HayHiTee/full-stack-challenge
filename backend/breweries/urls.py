from django.urls import path

from breweries.views import ListBreweries

urlpatterns = [
    path('', ListBreweries.as_view(), name='list-breweries'),

]
