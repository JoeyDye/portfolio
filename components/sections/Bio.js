import styled from '@emotion/styled'

const Bio = () => (
  <BioSection>
    <BioImg src='/images/joey-dye-fullstack-developer.jpg' alt='Joey Dye' />
    <BioContent>
      <BioHeader>
        <img src='/images/squiggly-line.png' alt='Squiggly line' />
        Hello, my name is <h2>Joey Dye</h2>
      </BioHeader>
      <p>
        I use modern web technologies to build excellent user interfaces. While
        I specialize in the frontend, I also have strong knowledge of the
        backend, having built apps using Node.js, Express and MongoDB.
      </p>
      <p>
        I enjoy learning new technologies and am continuously focused on adding
        new libraries, frameworks, languages, and design patterns to my toolbox.
        I also have plenty of experience building marketing sites for clients on
        popular CMSs, such as WordPress and Drupal.
      </p>
    </BioContent>
  </BioSection>
)

const BioSection = styled.section`
  display: flex;
  max-width: 900px;
  padding: 80px 0;
  margin: 0 auto;
`

const BioImg = styled.img`
  width: 50%;
`

const BioContent = styled.div`
  width: 50%;
  margin-left: 60px;

  span {
    display: block;
  }
`

const BioHeader = styled.p`
  text-align: right;
  font-weight: 300;
  font-size: 1.5rem;

  img {
    width: 80px;
    margin-right: 10px;
  }

  h2 {
    display: block;
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3rem;
  }
`

export default Bio
