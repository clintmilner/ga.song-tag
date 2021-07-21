import { H1 } from '../components/styled/H1'
import Layout from '../components/Layout'
import ContentSection from '../components/Content'

const Band = ({ bandId }) => {
  return (
    <Layout fullWidth>
      <ContentSection>
        <H1>band page - {bandId}</H1>
      </ContentSection>
    </Layout>
  )
}
export default Band
