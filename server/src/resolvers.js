const resolvers = {
  Query: {
    artist: (parent, { mbid }, { dataSources }, info) => {
      return dataSources?.setlistAPI?.getArtist(mbid)
    },
    setlists: async (parent, { mbid }, { dataSources }, info) => {
      let pageToReq = 1
      const { itemsPerPage, page, total, setlist } =
        await dataSources?.setlistAPI?.getSetlists(mbid, pageToReq)
      const pages = total / itemsPerPage
      if (pages > page) {
        const nextPage = page + 1
        return dataSources?.setlistAPI?.getSetlists(mbid, nextPage)
      }
      return dataSources?.setlistAPI?.getSetlists(mbid, pageToReq)
    },
    artistLookup: (parent, { search }, { dataSources }, info) => {
      return dataSources?.setlistAPI?.getArtistByName(search)
    },
    recentSearches: (parent, { search }, { dataSources }, info) => {
      return dataSources?.setlistAPI?.getRecentSearches()
    },
  },
}

module.exports = resolvers
