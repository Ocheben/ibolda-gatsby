import React from 'react'
import { navigate } from 'gatsby-link'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { Content, SText } from '../components/styledComponents'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const { title, offices, emails, phones } = this.props
    return (
        <Content flex align="center" justify="center" minHeight="90vh">
          <Content flex horizontal width="80%" justify="space-between" align="center">
            <Content width="45%" flex justify="center">
              <section className="section">
                <div className="container">
                  <div className="content">
                    <h1>{title}</h1>
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out:{' '}
                          <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'name'}>
                          Your name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'email'}>
                          Email
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'message'}>
                          Message
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                          />
                        </div>
                      </div>
                      <Content align="center" flex>
                        <button className="button is-link" style={{ width: '40%', background: '#00796b'}} type="submit">
                          Send
                        </button>
                      </Content>
                    </form>
                  </div>
                </div>
              </section>
            </Content>
            <Content width="45%">
              <Content vmargin="1em">
              <SText weight="600" size="32px" color="#444444">Address</SText>
              {
                Array.isArray(offices) && offices.map(office => (
                  <Content vmargin="0.5em">
                    <SText weight="600" size="24px" color="#444444">{office.name}</SText>
                    <SText  size="20px" color="#444444">{office.address}</SText>
                  </Content>
                ))
              }
              </Content>
              <Content vmargin="1em">
              <SText weight="600" size="32px" color="#444444">Phone</SText>
              {
                Array.isArray(phones) && phones.map(phone => <SText  size="20px" color="#444444">{phone.phone}</SText>)
              }
              </Content>
              <Content vmargin="1em">
              <SText weight="600" size="32px" color="#444444">Email</SText>
              {
                Array.isArray(emails) && emails.map(email => <SText  size="20px" color="#444444">{email.email}</SText>)
              }
              </Content>
            </Content>
          </Content>
        </Content>
    )
  }
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        offices={frontmatter.offices}
        emails={frontmatter.emails}
        phones={frontmatter.phones}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        offices {
          name
          address
        }
        emails {
          email
        }
        phones {
          phone
        }
      }
    }
  }
`
