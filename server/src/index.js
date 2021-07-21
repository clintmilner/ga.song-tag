const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const SetlistAPI = require('./datasources/setlist-api')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      setlistAPI: new SetlistAPI(),
    }
  },
})

server.listen().then(() => {
  console.log(`
      🚀 Server is running!
      🔈 Listening on port 4000
      📫 Query at https://studio.apollographql.com/dev
  `)
})
