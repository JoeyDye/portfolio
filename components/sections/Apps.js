import styled from '@emotion/styled'
import Carousel from '../sliders/Carousel'

const Apps = () => (
  <AppsSection>
    <AppHeader>
      <p>Lorem Ipsum dolor</p>
      <h2>Web Apps</h2>
    </AppHeader>
    <Carousel />
  </AppsSection>
)

const AppsSection = styled.section`
  padding: 80px 0;
`

const AppHeader = styled.div`
  margin: 0 auto 100px;

  p,
  h2 {
    margin-top: 0;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`

export default Apps
