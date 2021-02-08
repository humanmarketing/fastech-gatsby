import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export default ({ serviceareamap }) => {
  let { heading, locations, map_image } = serviceareamap

  return (
    <div className="container service-area-map">
      <h2>{heading}</h2>

      <div className="columns">
        <div className="column is-4">
          {locations.map((location, key) => (
            <div className="service-area-location" key={key}>
              <h3>{location.name}</h3>
              <ul>
                {location.counties.map((county, i) => (
                  <li key={i}>{county}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="service-area-map-image column is-8">
          <PreviewCompatibleImage imageInfo={map_image} />
        </div>
      </div>
    </div>
  )
}
