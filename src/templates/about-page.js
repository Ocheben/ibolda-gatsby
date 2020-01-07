import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Content as SDiv, SText } from '../components/styledComponents';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

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
    <SDiv flex align="center" vpadding="5em">
      <SDiv width="70%">
        <SText weight="600" size="48px" color="#444444">{title}</SText>
        <SDiv vmargin="2em">
          <SText weight="600" vmargin="0.5em" size="36px" color="#444444">Organization Structure</SText>
          <SText size="20px" color="#444444" lineHeight={2} align="justify">IBOLDA as an organization has a structure that is flexible enough to provide services that will meet our clients’ satisfaction. It comprises of Four directors one of which is named as the Chief Executive Officer (CEO) with others anchoring different units. To be able to provide services in an efficient and timely manner, we work with Associate Consultants of high reputation and profile in their careers.</SText>
        </SDiv>
        <SDiv vmargin="2em">
          <SText weight="600" vmargin="0.5em" size="36px" color="#444444">Core Team for IBOLDA Health International Limited/Board of Directors</SText>
          <SText size="20px" color="#444444" lineHeight={2} align="justify">The core team coordinates the day-to-day management of the organization. The core team comprises of the CEO who is in charge of the day-to-day running of the organization. Other core team members are directly in charge of various Units and Departments. The main functions of the core team are:</SText>
          <ol>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>translation of the policies of the organization,</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>coordination of the organizational activities,</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Ensures effective and efficient utilization of organizational resources (human, material and finance), and</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>designing/developing concept notes and implementation frameworks.</SText>
          </ol>
        </SDiv>
        <SDiv>
        <SText vmargin="0.5em" size="20px" color="#444444">The core team includes:</SText>
          <ol>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Dr. Dele James Babarinde MBBS, M.Sc. PHD (CEO/President)</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Mrs. Modupe T Babarinde (RN, RM, B.Ed., M.Ed. Guidance and Counseling). vice president/Director Bio-science.</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Dr. Ganiyu Adekunle MBBS, MPH, FWCP (Public Health), SKM Director</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Mr. Abdul Rasheed Balogun, ICAN. Director of Finance and Audit</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Iwualla Chima Victor B. Sc,Mathematics,MCP,MCTS,MCT.MCITP,MCTC,MCPN . Director of ICT</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>OLUJIDE, Oluwasanya Ebenezer (M.Tech) in Management Science- Director of Personnel and Administration.</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Ola Ojo Mathew. B.Sc. Statistics, MPH. Field Manager.</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Wale Obembe M.Sc. Agricultural Economics- M&E Specialist /Research</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Dr Temitayo Daramola MBBS,FWCP(Psychiatrist)Consultant</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Dr Olushola Afolabi MBBS, FWCS (ENT) Consultant</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Barr. Musa Aliyu Jubril LLB, BL COMPANY LAWYER/LEGAL ADVISER</SText>
            <SText as="li" size="20px" color="#444444" lineHeight={2}>Mr. Peter Akinmola Joseph BNSC Logistic Manager/Resource Mobilization.</SText>
          </ol>
        </SDiv>
      </SDiv>
    </SDiv>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      }
    }
  }
`
