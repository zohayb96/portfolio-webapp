var SpotifyWebApi = require('spotify-web-api-node')

var scopes = ['user-read-private', 'user-read-email'],
  redirectUri = 'http://localhost:8080/callback/',
  clientId = 'df27317ccb0a4da4a5920cce81c25ad9',
  state = 'some-state-of-my-choice'

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'df27317ccb0a4da4a5920cce81c25ad9',
  clientSecret: '23585e9e9a50465082d9d40be55eea6e',
  redirectUri: 'http://localhost:8080/callback/'
})

spotifyApi.setAccessToken(
  'AQBBwHDp6o1xrX0B0UMJYV5wEnvVCNsaW7KnaHzoSqnoEKlxB_21NX6Rh3cZQOdDcvhiYcdF2hu6-GZ4PD6ZqXrZhIh2sohg2HjX7FpDZFYagWQKI2yr9ZYQVl09Yv9iMOf-F2ixemJqbP9MjWc8o7qLwryx-SmJpD8Y3WaRD9_OZxnAFGjejaEclngf-to2jUH5jUgcq3N6iWQJFe_bZzQpGC6ZwVTEswMWd0b2ZQ30BF0'
)

export default spotifyApi
// https://accounts.spotify.com/authorize?client_id=df27317ccb0a4da4a5920cce81c25ad9&
// response_type=code&redirect_uri=http://localhost:8080/callback/&
// scope=user-read-private%20user-read-currently-playing
