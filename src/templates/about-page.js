import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import { Content, SText } from '../components/styledComponents';
import doctorc from '../img/doctorsc.svg'

export const AboutPageTemplate = ({ title, content, contentComponent, structure, core, team, vision, mission }) => {
  // const PageContent = contentComponent || Content

  return (
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <div className="section">
    //           <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    //             {title}
    //           </h2>
    //           <PageContent className="content" content={content} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Content flex align="center" vpadding="5em">
      <Content width="70%">
        <SText weight="600" size="48px" width="70%" color="#444444">{title}</SText>
      </Content>
      <Content id="intro" minHeight="50vh" flex align="center" justify="flex-start">
        <Content flex horizontal width="80%" align="center" justify="space-between" bmargin="2em">
          <Content width="45%">
            <img src={doctorc} alt="footer logo" />
          </Content>
          <Content width="45%">
            <Content bmargin="1em">
              <SText weight="600" vmargin="0.5em" size="36px" color="#444444" align="center">Our Vision</SText>
              <SText size="20px" color="#444444" lineHeight={2} align="center">{vision || ''}</SText>
            </Content>
            <Content>
              <SText weight="600" vmargin="0.5em" size="36px" color="#444444" align="center">Our Mission</SText>
              <SText size="20px" color="#444444" lineHeight={2} align="center">{mission || ''}</SText>
            </Content>
          </Content>
        </Content>
      </Content>
      <Content width="70%">
        <Content vmargin="2em">
          <SText weight="600" vmargin="0.5em" size="36px" color="#444444">{structure.title || ''}</SText>
          <SText size="20px" color="#444444" lineHeight={2} align="justify">{structure.description || ''}</SText>
        </Content>
        <Content vmargin="2em">
          <SText weight="600" vmargin="0.5em" size="36px" color="#444444">{core.title || ''}</SText>
          <SText size="20px" color="#444444" lineHeight={2} align="justify">{core.description || ''}</SText>
          <ol>
            {
              Array.isArray(core.functions) && core.functions.map(item => <SText as="li" size="20px" color="#444444" lineHeight={2}>{item.function}</SText>)
            }
          </ol>
        </Content>
        <Content>
        <SText vmargin="0.5em" size="20px" color="#444444">The core team includes:</SText>
          <ol>
            {
              Array.isArray(team) && team.map(item => <SText as="li" size="20px" color="#444444" lineHeight={2}>{item.name}</SText>)
            }
          </ol>
        </Content>
      </Content>
    </Content>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { structure, core, team, vision, mission } = post.frontmatter;
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        structure={structure}
        core={core}
        team={team}
        vision={vision}
        mission={mission}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        vision
        mission
        structure {
          title
          description
        }
        core {
          title
          description
          functions {
            function
          }
        }
        team {
          name
        }
      }
    }
  }
`
