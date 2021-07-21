import QueryResult from './QueryResult'
import { gql, useQuery } from '@apollo/client'

const GET_SETLISTS = gql`
  query getSetlists($mbid: ID!) {
    setlists(mbid: $mbid) {
      setlist {
        sets {
          set {
            name
            encore
            song {
              info
              name
            }
          }
        }
        id
        artist {
          name
          mbid
        }
        info
        tour {
          name
        }
        eventDate
      }
      itemsPerPage
      page
      total
    }
  }
`

export const Setlist = ({ mbid }) => {
  console.info('mbid', mbid)
  const { data, loading, error } = useQuery(GET_SETLISTS, {
    variables: { mbid },
  })

  const renderContent = () => {
    return data?.setlists?.setlist?.map(data => (
      <div
        key={data?.id}
        style={{ display: 'flex', flexDirection: 'row', margin: '5px 0' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <span>{data?.eventDate}</span>
          <small>{data?.info}</small>
        </div>

        <div
          style={{
            flex: 5,
          }}
        >
          {Object.keys(data?.sets?.set).map((theKey, idx) => {
            const { name, encore, song } = data?.sets?.set[theKey]
            return (
              <>
                <small key={idx}>
                  <b>{name}</b>
                  <br />
                  {encore && (
                    <span>
                      <b>e:</b>
                      <br />
                    </span>
                  )}
                  {song?.map(({ name }, idx) => (
                    <span key={idx}>
                      {name}
                      <br />
                    </span>
                  ))}
                </small>
                <br />
              </>
            )
          })}
        </div>
      </div>
    ))
  }

  return (
    <QueryResult data={data} loading={loading} error={error}>
      {renderContent()}
    </QueryResult>
  )
}

export default Setlist
