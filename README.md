# leaflet-fuzzy

Leaflet-Fuzzy ([demo](https://www.scrapethepast.com/leafletfuzzy)) allows for the encoding of fuzziness into polygons on Leaflet. Fuzziness can represent a transitional element or uncertainty in the extent of a geographic entity. Leaflet-Fuzzy provides a layer which can display geojson, with special properties including `blurIntensity`. A properties object can be added to any JSON object and will be inherited by its children. 

## Install

```bash
npm install --save leaflet-fuzzy
```

## Usage

```jsx
import React, { Component } from 'react'

import { FuzzyLayer } from 'leaflet-fuzzy'

class Example extends Component {
  render() {
    return <FuzzyLayer
              data={[
                {
                  "type": "FeatureCollection",
                  "features": [
                    {
                      "type": "Feature",
                      "properties": {
                        "blurIntensity": 40,
                        "fill": "0x0000ff",
                      },
                      "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                          [
                            [
                              -103.095703125,
                              39.40224434029275
                            ],
                            [
                              -105.732421875,
                              37.19533058280065
                            ],
                            [
                              -103.095703125,
                              39.40224434029275
                            ]
                          ]
                        ]
                      }
                    },
                    {
                      "type": "Feature",
                      "properties": {
                        "blurIntensity": 20,
                        "fill": "0xff0000"
                      },
                      "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                          [
                            [
                              -92.5048828125,
                              32.62087018318113
                            ],
                            [
                              -92.5048828125,
                              32.62087018318113
                            ]
                          ]
                        ]
                      }
                    }
                  ]
                }
              ]}
            ></FuzzyLayer>
  }
}
```

## License

MIT © [madeleinehill](https://github.com/madeleinehill)
