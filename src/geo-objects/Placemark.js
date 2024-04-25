import React from 'react';
import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseGeoObject } from './BaseGeoObject';

export function Placemark(props) {
  return <BaseGeoObject {...props} name="Placemark" />;
}

if (process.env.NODE_ENV !== 'production') {
  const PlacemarkGeometryPropTypes = PropTypes.arrayOf(PropTypes.number);

  Placemark.propTypes = {
    /**
     * Placemark [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-geometry)
     */
    geometry: PlacemarkGeometryPropTypes,
    /**
     * Uncontrolled Placemark [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-geometry)
     */
    defaultGeometry: PlacemarkGeometryPropTypes,

    /**
     * Placemark [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-properties)
     */
    properties: PropTypes.shape({}),
    /**
     * Uncontrolled Placemark [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-properties)
     */
    defaultProperties: PropTypes.shape({}),

    /**
     * Placemark [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled Placemark [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-options)
     */
    defaultOptions: PropTypes.shape({}),
  };
}

export default withParentContext(withYMaps(Placemark, true, ['Placemark']));
