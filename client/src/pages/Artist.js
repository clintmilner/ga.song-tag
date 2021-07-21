import { H1 } from '../components/styled/H1'
import Layout from '../components/Layout'
import ContentSection from '../components/Content'
import { gql, useQuery } from '@apollo/client'
import QueryResult from '../components/QueryResult'

const GET_ARTIST = gql`
  query getArtist($mbid: ID!) {
    artist(mbid: $mbid) {
      name
      mbid
    }
  }
`

const Artist = ({ mbid }) => {
  const { data, loading, error } = useQuery(GET_ARTIST, {
    variables: { mbid },
  })

  return (
    <Layout fullWidth>
      <QueryResult data={data} loading={loading} error={error}>
        <ContentSection>
          <H1>artist page - {mbid}</H1>
          <pre>{JSON.stringify(data?.artist)}</pre>
        </ContentSection>
      </QueryResult>
    </Layout>
  )
}
export default Artist
