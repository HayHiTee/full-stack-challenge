from rest_framework import serializers


class BreweriesSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    city = serializers.CharField(max_length=200)
    state = serializers.CharField(max_length=200)
    lat = serializers.DecimalField(max_digits=19, decimal_places=10)
    long = serializers.DecimalField(max_digits=19, decimal_places=10)

