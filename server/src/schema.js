const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    "Get details about the Artist"
    artist(mbid: ID!): Artist

    "Get Show and Setlist details for this Artist"
    setlists(mbid: ID!): SetlistPage

    "Search by Artist name"
    artistLookup(search: String!): ArtistPage

    "Lookup most recent Artist searched"
    recentSearches: [Artist]
  }

  type QueryByIDArgs {
    mbid: ID!
  }

  type Artist {
    mbid: ID!
    name: String
  }

  type Setlist {
    id: ID!
    artist: Artist
    sets: Sets
    eventDate: String
    tour: Tour
    info: String
  }

  type Tour {
    name: String
  }

  type Sets {
    set: [Set]
  }

  type Set {
    name: String
    encore: Int
    song: [Song]
  }

  type Song {
    name: String
    info: String
  }

  type ArtistPage {
    total: Int
    page: Int
    itemsPerPage: Int
    artist: [Artist]
  }

  type SetlistPage {
    setlist: [Setlist]
    total: Int
    page: Int
    itemsPerPage: Int
  }
`

module.exports = typeDefs
