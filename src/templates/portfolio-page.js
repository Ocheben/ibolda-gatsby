import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import { Content, SText } from '../components/styledComponents';

export const PortfolioTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Content flex align="center" vpadding="5em">
      <Content width="70%">
        <SText weight="600" size="48px" color="#444444">{title}</SText>
        <Content vmargin="2em">
            <Content flex horizontal justify="space-between" vmargin="0.5em" >
                <SText weight="600" size="30px" color="#444444">AFENET/CDC</SText>
                <SText size="22px" color="#999999">On – going</SText>
            </Content>
          <SText size="20px" color="#444444" align="justify" bmargin="0.5em">National Stop Transmission of Poliomyelitis (NSTOP) Impact Assessment in Nigeria. In collaboration with AHP.</SText>
          <SText size="18px" color="#999999">In 12 states in North East and North West zones</SText>
          <SText size="18px" color="#999999">Reference: National Coordinator AFENET</SText>
        </Content>
        <Content vmargin="2em">
            <Content flex horizontal justify="space-between" vmargin="0.5em" >
                <SText weight="600" size="30px" color="#444444">World Bank/NPHCDA/</SText>
                <SText size="22px" color="#999999">April 2018 - Present</SText>
            </Content>
          <SText size="20px" color="#444444" align="justify" bmargin="0.5em">Project Name: AF-NSHIP IVA-Yobe State</SText>
          <SText size="18px" color="#999999">Yobe State North East, Nigeria</SText>
          <SText size="18px" color="#999999">Reference: National Coordinator NSHIP</SText>
        </Content>
        <Content vmargin="2em">
            <Content flex horizontal justify="space-between" vmargin="0.5em" >
                <SText weight="600" size="30px" color="#444444">FGN/NACA</SText>
                <SText size="22px" color="#999999">Feb.2018 – May,2018</SText>
            </Content>
          <SText size="20px" color="#444444" align="justify" bmargin="0.5em">Provision of Consultancy Services in Conducting HIV/AIDS Awareness Campaign in Various Languages and Medical Outreaches in Various Locations across the Country and FCT.</SText>
          <SText size="18px" color="#999999">Kaltungo/Shongom Federal Constituency of Gombe State.viz: Kaltungo LGA, Balanga/Biliri LGA and Shongom LGA.</SText>
          <SText size="18px" color="#999999">Reference: National Coordinator NSHIP</SText>
        </Content>
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
        content={post.html}
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
      }
    }
  }
`
