import React from 'react'

import * as SvgComponents from './svgComponents'

export const Icon = ({width, height, size, component}) => {
  // * Underlying SVG should prefer viewBox to width/height in order to resize and be compatible with component API.

  // * If size prop is provided - than SVG is expected to be of square shape: width === size & height === size.
  // * In this case width and/or height if provided will be ignored.
  // * Size property will be set as width and height will be calculated based on viewBox proportion.

  // * If only one dimension is provided, than another property will be calculated based on viewBox proportion.

  // * In case both width and height are provided, SVG will accept provided width and height.
  // * And the drawing will be inscribed into that rectangle.
  const SvgComponent = SvgComponents[component]

  return (
    <SvgComponent
      width={size || width || 'auto'}
      height={size ? 'auto' : height || 'auto'}
    />
  )
}
