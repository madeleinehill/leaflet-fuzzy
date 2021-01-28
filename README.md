# leaflet-fuzzy

Leaflet-Fuzzy ([demo](https://www.scrapethepast.com/leafletfuzzy)) allows for the encoding of fuzziness into polygons on Leaflet. Fuzziness can represent a transitional element or uncertainty in the extent of a geographic entity. Leaflet-Fuzzy provides a layer which can display geojson, with special properties including `blurIntensity`, as well as a special `FuzzyPolygon` component.

## Install

```bash
npm install --save leaflet-fuzzy
```

## Usage

```jsx
import React, { Component } from 'react'

import { FuzzyPolygon } from 'leaflet-fuzzy'

class Example extends Component {
  render() {
    return <FuzzyPolygon
              positions={[
                {lat: 39.40224434029275, lng: -106.095703125},
                {lat: 37.19533058280065, lng: -105.732421875},
                {lat: 33.94335994657882, lng: -105.205078125}
              ]}
              properties={
                blurIntensity: 40,
                fill: 0x0000ff
              }
            ></FuzzyPolygon>
  }
}
```

Equivalently,

```jsx
import React, { Component } from 'react'

import { FuzzyLayer } from 'leaflet-fuzzy'

class Example extends Component {
  render() {
    return <FuzzyLayer
              data={[
                {
                  positions: [
                    [
                      {lat: 39.40224434029275, lng: -106.095703125},
                      {lat: 37.19533058280065, lng: -105.732421875},
                      {lat: 33.94335994657882, lng: -105.205078125}
                    ]
                  ],
                  properties: {
                    blurIntensity: 40,
                    fill: 0x0000ff
                  }
              ]}
            ></FuzzyLayer>
  }
}
```

## License

MIT © [henryhill1999](https://github.com/henryhill1999)
