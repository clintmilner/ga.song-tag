const resolvers = {
  Query: {
    artist: (parent, { mbid }, { dataSources }, info) => {
      return dataSources?.setlistAPI?.getArtist(mbid)
    },
    setlists: (parent, { mbid }, { dataSources }, info) => {
      return dataSources?.setlistAPI?.getSetlists(mbid)
    },
    artistLookup: (parent, { search }, { dataSources }, info) => {
      return dataSources?.setlistAPI?.getArtistByName(search)
    },
  },
}

module.exports = resolvers
