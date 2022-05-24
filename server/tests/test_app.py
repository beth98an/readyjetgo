import json

def test_api_get_locations(api):
    res = api.get('/api/locations')
    assert res.json == {'locations': [{"City/Beach": "City", "Continent": "North America", "Country": "Canada", "Img":"https://www.tripsavvy.com/thmb/18jukZwmonkaOB7Gk2t_ua9GDYQ=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/sidi-bashir-mosque-in-ahmedabad-1322198135-18dddfc8f76e4a2f8cbce7d522ad4cb7.jpg", "Name": "Ottawa", 'id': 1}]}


