import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <AboutPageTemplate
        title={data.title}
        structure={data.structure || {}}
        core={data.core || {}}
        team={data.team || []}
        gallery={{
          image: getAsset(entry.getIn(['data', 'gallery', 'image'])),
          caption: entry.getIn(['data', 'gallery', 'caption']),
        }}
        vision={data.vision}
        mission={data.mission}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
