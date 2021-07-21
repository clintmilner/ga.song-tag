const { RESTDataSource } = require('apollo-datasource-rest')
const dotenv = require('dotenv')
dotenv.config()

class SetlistAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `https://api.setlist.fm/rest/1.0/`
  }

  getArtist(mbid) {
    return this.get(`artist/${mbid}`, undefined, {
      headers: {
        Accept: 'application/json',
        'x-api-key': process.env.API_KEY,
      },
    })
  }
}
module.exports = SetlistAPI
