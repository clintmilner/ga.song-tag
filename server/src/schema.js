const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    "Get details about the Artist"
    artist(mbid: ID!): Artist
  }

  type Artist {
    mbid: ID!
    name: String!
  }
`

module.exports = typeDefs
