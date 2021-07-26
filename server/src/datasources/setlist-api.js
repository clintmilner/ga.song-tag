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
let recentSearches = []
class SetlistAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `https://api.setlist.fm/rest/1.0/`
  }

  getRecentSearches() {
    // console.info('🍣', recentSearches)
    return recentSearches
  }

  getArtist(mbid) {
    recentSearches.push({ mbid, name: 'no name' })
    return this.get(`artist/${mbid}`, undefined, {
      headers,
    })
  }

  getSetlists(mbid, p) {
    return this.get(
      `artist/${mbid}/setlists`,
      { p },
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
