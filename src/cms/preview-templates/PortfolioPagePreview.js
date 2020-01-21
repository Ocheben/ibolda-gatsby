import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioTemplate } from '../../templates/portfolio-page'

const PortfolioPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PortfolioTemplate
        title={data.title}
        experience={data.experience || []}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PortfolioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PortfolioPagePreview
