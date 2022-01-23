from math import sin, cos, sqrt, atan2, radians


def calculate_distance(sourceLat, sourceLong, destLat, destLong):
    R = 6373.0

    lat1 = radians(destLat)
    lon1 = radians(destLong)
    lat2 = radians(sourceLat)
    lon2 = radians(sourceLong)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    print("Result:", distance)
    return distance
