import fs from 'fs'

fs.readFile('device-size.json', 'utf8', (error, input) => {
  if (error) throw error

  const deviceSize = JSON.parse(input)

  const output = `export default {${
    Object.keys(deviceSize).map(key => {
      const { device, width, height } = deviceSize[key]

      return `${key}:{device:'${device}',width:${width},height:${height}}`
    })
  }}`

  fs.writeFile('device-size.js', output, 'utf8', (error) => {
    if (error) throw error
  })
})
