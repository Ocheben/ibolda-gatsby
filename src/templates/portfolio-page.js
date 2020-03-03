import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import { Content, SText } from '../components/styledComponents';

export const PortfolioTemplate = ({ title, experience }) => {

  return (
    <Content flex align="center" vpadding="5em">
      <Content width="70%" mobWidth="90%">
        <SText weight="600" size="48px" color="#444444">{title}</SText>
        {
          experience.map(item =>(
            <Content vmargin="2em">
              <Content flex horizontal justify="space-between" vmargin="0.5em" >
                <SText weight="600" size="30px" color="#444444">{item.client}</SText>
                <SText size="22px" color="#999999">{item.date}</SText>
              </Content>
              <SText size="20px" color="#444444" align="justify" bmargin="0.5em">{item.projectName}</SText>
              <SText size="18px" color="#999999">{item.location}</SText>
              <SText size="18px" color="#999999">Reference: {item.reference}</SText>
            </Content>
          ))
        }
      </Content>
    </Content>
  )
}

PortfolioTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Portfolio = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        experience={post.frontmatter.experience}
      />
    </Layout>
  )
}

Portfolio.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Portfolio

export const portfolioQuery = graphql`
  query Portfolio($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        experience {
          client
          projectName
          date
          location
          reference
        }
      }
    }
  }
`
