import requests
import time
import applescript

SPOTIFY_GET_CURRENT_TRACK_URL = 'https://api.spotify.com/v1/me/player/currently-playing'
SONG_VOLUME = 20
ADVERT_VOLUME = 0

# This is the only value to be changed. Go to Spotify account and get access token.
ACCESS_TOKEN = '[INPUT ACCESS TOKEN HERE]'


def get_current_track(access_token):
    response = requests.get(
        SPOTIFY_GET_CURRENT_TRACK_URL,
        headers={
            "Authorization": f"Bearer {access_token}"
        }
    )
    json_resp = response.json()

    try:
        track_id = json_resp['item']['id']
        track_name = json_resp['item']['name']
        artists = [artist for artist in json_resp['item']['artists']]
        link = json_resp['item']['external_urls']['spotify']
        artist_names = ', '.join([artist['name'] for artist in artists])
        current_track_info = {
            "id": track_id,
            "track_name": track_name,
            "artists": artist_names,
            "link": link
        }
        applescript.run(f"set volume output volume {SONG_VOLUME}")
        return current_track_info

    except:
        applescript.run(f"set volume output volume {ADVERT_VOLUME}")


def main():
    current_track_id = None
    while True:
        current_track_info = get_current_track(ACCESS_TOKEN)

        try:
            if current_track_info['id'] != current_track_id:
                print(f"Track: {current_track_info['track_name']}; Artist(s): {current_track_info['artists']}")
                current_track_id = current_track_info['id']
                applescript.run(f"set volume output volume {SONG_VOLUME}")

        except:
            applescript.run(f"set volume output volume {ADVERT_VOLUME}")
        time.sleep(1)


if __name__ == '__main__':
    main()

