import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const IconText = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column">
        <section className="section">
          <div>
            <div className="image-wrapper"
              style={{
                width: '100%',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h4>{item.header}</h4>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

IconText.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      header: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default IconText
