var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '5f0c9b4990694a408c92c48b454e6136',
  clientSecret: '325a09158dc542c49319de8a889b0651',
  redirectUri: 'http://localhost:3000'
});