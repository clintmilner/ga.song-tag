const { RESTDataSource } = require('apollo-datasource-rest')
const dotenv = require('dotenv')
dotenv.config()

const headers = {
  'x-api-key': process.env.API_KEY,
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
}
class SetlistAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `https://api.setlist.fm/rest/1.0/`
  }

  getArtist(mbid) {
    return this.get(`artist/${mbid}`, undefined, {
      headers,
    })
  }

  getSetlists(mbid) {
    return this.get(
      `artist/${mbid}/setlists`,
      { p: 1 },
      {
        headers,
      },
    )
  }

  getArtistByName(search) {
    return this.get(
      `search/artists`,
      {
        artistName: search,
      },
      { headers },
    )
  }
}
module.exports = SetlistAPI
