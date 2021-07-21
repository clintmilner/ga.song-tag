import { H1 } from '../components/styled/H1'
import Layout from '../components/Layout'
import ContentSection from '../components/Content'
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import QueryResult from '../components/QueryResult'
import throttle from 'lodash.throttle'

import { Link } from '@reach/router'

const ARTIST_BY_NAME = gql`
  query searchArtistByName($search: String!) {
    artistLookup(search: $search) {
      itemsPerPage
      total
      page
      artist {
        name
        mbid
      }
    }
  }
`

const Home = () => {
  const [search, setSearch] = useState('')
  const { data, loading, error } = useQuery(ARTIST_BY_NAME, {
    skip: !search,
    variables: { search },
  })

  const handleSearch = e => {
    throttle(setSearch(e?.target?.value), 311, { maxWait: 1000 })
  }

  const renderContent = () => {
    console.log(data)
    return (
      <>
        {data?.artistLookup?.artist?.map(({ name, mbid }) => (
          <p key={mbid}>
            <Link to={`/artist/${mbid}`}>{name}</Link>
          </p>
        ))}
      </>
    )
  }

  return (
    <Layout fullWidth>
      <ContentSection>
        <H1>Home</H1>
        <input type="text" value={search} onChange={handleSearch} />
        <QueryResult data={data} loading={loading} error={error}>
          {renderContent()}
        </QueryResult>
      </ContentSection>
    </Layout>
  )
}

export default Home
