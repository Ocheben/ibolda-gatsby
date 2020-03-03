import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import { Content, SText } from '../components/styledComponents'
import doctora from '../img/doctora.svg'
import doctorb from '../img/doctorb.svg'
import banner from '../img/banner.svg'

export const IndexPageTemplate = ({ frontmatter: {
  title,
  heading,
  subheading,
  mainpitch,
  mission,
  activities
}}) => (
  <div>
    <Content id="main">
      <Content id="intro" minHeight="100vh" flex align="center" justify="center">
        <Content flex horizontal width="80%" align="center" justify="space-between" vmargin="3em">
          <Content width="45%" mobWidth="90%">
            <img src={banner} alt="footer logo" />
          </Content>
          <Content width="45%" mobWidth="90%">
            <SText weight="600" vmargin="0.5em" size="36px" color="#444444">{heading || ''}</SText>
            <SText color="#444444" size="20px" lineHeight={2} align="justify">
            {subheading || ''}
            </SText>
          </Content>
        </Content>
      </Content>
      <Content id="intro" minHeight="50vh" flex align="center" justify="flex-start" vpadding="3em" bg="#ffffff">
        <SText align="center" color="#444444" size="28px" weight="600">{mainpitch.title}</SText>
        <Content flex horizontal width="80%" align="center" justify="space-between" vmargin="3em">
          <Content width="45%" mobWidth="80%">
            <img src={doctora} alt="footer logo" />
          </Content>
          <Content width="45%" mobWidth="90%">
            <SText color="#444444" size="20px" lineHeight={2} align="justify">
            {mainpitch.description}
            </SText>
          </Content>
        </Content>
      </Content>
      <Content id="intro" minHeight="50vh" flex align="center" justify="flex-start" vpadding="3em">
        <SText align="center" color="#444444" size="28px" weight="600">What we do</SText>
        <Content flex horizontal width="80%" align="center" justify="space-between" vmargin="3em">
          <Content width="45%" mobWidth="90%">
            <SText color="#444444" size="20px" lineHeight={2} align="justify">
              {activities}
            </SText>
          </Content>
          <Content width="45%" mobWidth="80%">
            <img src={doctorb} alt="footer logo" />
          </Content>
        </Content>
      </Content>
      <Content id="mission" minHeight="30vh" flex align="center" justify="flex-start" vpadding="3em" bg="#ffffff">
        <SText align="center" color="#444444" size="28px" weight="600">Our Mission</SText>
        <Content flex horizontal width="80%" align="center" justify="center" vmargin="3em">
          <Content width="70%" mobWidth="90%">
            <SText color="#444444" size="20px" align="center" lineHeight={2}>
            {mission}
            </SText>
          </Content>
        </Content>
      </Content>
    </Content>
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        frontmatter={frontmatter}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mission
        activities
        mainpitch {
          title
          description
        }
      }
    }
  }
`
