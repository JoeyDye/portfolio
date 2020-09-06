import styled from '@emotion/styled'

const Bio = () => (
  <BioSection>
    <BioImg src='' alt='Joey Dye' />
    <BioContent>
      <h2>
        Hello, my name is <span>Joey Dye</span>
      </h2>
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
  margin: 0 auto;
`

const BioImg = styled.img`
  width: 50%;
`

const BioContent = styled.div`
  width: 50%;

  span {
    display: block;
  }
`

export default Bio
