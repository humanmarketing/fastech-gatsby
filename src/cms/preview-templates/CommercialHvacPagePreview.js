import React from 'react'
import PropTypes from 'prop-types'
import { CommercialHvacPageTemplate } from '../../templates/commercial-hvac-page'

const CommercialHvacPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CommercialHvacPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        metadescription={data.metadescription}
        header={data.header}
        subheader={data.subheader}
        herocta={data.herocta}
        description={data.description}
        leadingbusiness={data.leadingbusiness}
        main={data.main}
        pathogenfiltration={data.pathogenfiltration}
        industriesserved={data.industriesserved}
        serviceareas={data.serviceareas}
        bottomcta={data.bottomcta}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CommercialHvacPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CommercialHvacPagePreview
