import { H1 } from '../components/styled/H1'
import Layout from '../components/Layout'
const Band = ({ bandId }) => {
  return (
    <Layout fullWidth>
      <H1>band page - {bandId}</H1>
    </Layout>
  )
}
export default Band
