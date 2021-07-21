const resolvers = {
  Query: {
    artist: (parent, args, context, info) => {
      const { mbid } = args
      const { dataSources } = context
      return dataSources?.setlistAPI?.getArtist(mbid)
    },
  },
}

module.exports = resolvers
