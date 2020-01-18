import assert from 'assert'

import deviceSize from './device-size.js'

const seen = new Set()

Object.keys(deviceSize).forEach(key => {
  const { device, width, height } = deviceSize[key]

  if (seen.has(device)) {
    assert.fail(`Duplicated device: ${device}`)
  }

  seen.add(device)

  if (typeof width !== 'number') {
    assert.fail(`Invalid width for device ${device}`)
  }

  if (typeof height !== 'number') {
    assert.fail(`Invalid height for device ${device}`)
  }
})
