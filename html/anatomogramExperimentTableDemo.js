import React from 'react'
import ReactDOM from 'react-dom'

import AnatomogramExperimentTable from '../src/index.js'
import svgsMetadata from './svgsMetadata.json'

const unique = (value, index, self) => self.indexOf(value) === index

const getAllIds = (species) =>
  svgsMetadata
    .filter((svgMetadata) => svgMetadata.species === species)
    .reduce((acc, svgMetadata) => acc.concat(svgMetadata.ids), [])
    .filter(unique)
    .sort()

const testJSON =
  `https://gist.githubusercontent.com/lingyun1010/3f75f1815890739a50300d76b471167d/raw/07ccd0cfdefdb4829a3ea536b41a6d76d59d4478/gistfile1.json`
const testJSON2 = "https://gist.githubusercontent.com/lingyun1010/065426db1011c1a080d58cf0f18bb872/raw/c7ac88d119db912433daf302efa5ed23acc1f43f/cellTypeWheelJsonPayload.json"
const testJSON3=`https://gist.githubusercontent.com/lingyun1010/07957cc2cdf6dffb4710173cc026b5bc/raw/2a6fac6f094de2e7ef3639d0a625a00e2beb2bbb/cellTypeWheelJsonPayloadWith0.json`


const render = (options, target) => {
  ReactDOM.render(<AnatomogramExperimentTable {...options}
                    showIds={getAllIds(options.species)}
                    resource={[testJSON2, testJSON3]} />,
    document.getElementById(target))
}

export {render}
