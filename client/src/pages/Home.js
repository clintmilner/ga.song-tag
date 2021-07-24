import { H1 } from '../components/styled/H1'
import Layout from '../components/Layout'
import ContentSection from '../components/Content'
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import QueryResult from '../components/QueryResult'

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

const debounce = (fn, time) => {
  let timeout

  return function () {
    const functionCall = () => fn.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

const Home = () => {
  const [search, setSearch] = useState('')
  const { data, loading, error } = useQuery(ARTIST_BY_NAME, {
    skip: !search,
    variables: { search },
  })

  const handleSearch = e => {
    debounce(setSearch(e?.target?.value), 1000)
  }

  const renderContent = () => {
    return (
      <>
        {data?.artistLookup?.artist?.map(({ name, mbid }) => (
          <p key={mbid}>
            <Link style={{ color: 'white' }} to={`/artist/${mbid}`}>
              {name}
            </Link>
          </p>
        ))}
      </>
    )
  }

  return (
    <Layout fullWidth>
      <ContentSection>
        <H1>Home</H1>
        <input autoFocus type="text" value={search} onChange={handleSearch} />
        <QueryResult data={data} loading={loading} error={error}>
          {renderContent()}
        </QueryResult>
      </ContentSection>
    </Layout>
  )
}

export default Home
