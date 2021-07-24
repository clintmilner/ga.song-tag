import { gql, useQuery } from '@apollo/client'
import QueryResult from './QueryResult'

const GET_RECENTLY_SEARCHED = gql`
  query getRecentSearches {
    recentSearches {
      mbid
      name
    }
  }
`

const RecentSearches = () => {
  const { data, loading, error } = useQuery(GET_RECENTLY_SEARCHED)
  console.info('👋🏼', data?.recentSearches)
  return (
    <QueryResult data={data} loading={loading} error={error}>
      {data?.recentSearches?.map(({ name, mbid }, idx) => (
        <p key={idx}>{mbid}</p>
      ))}
    </QueryResult>
  )
}

export default RecentSearches
