// const request = require("request")

// // const url = "https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=WuoQGl36ptbKzr1p7mVbWSk3sMNiDW7i"
// const url = "http://api.weatherstack.com/current?access_key=8e4b74d1a89680f5269a19ecd24a2bf4&query=40.7831,-73.9712"
// request({ url: url, json: true}, (error, response) => {
//   // console.log(response.body.current)
//   console.log("It is currently " + response.body.current.temperature + " degrees out there there is " + response.body.current.precip + "% chance of rain" )
// })







// callback test//
// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }

// add(1, 4, (sum) => {
//   console.log(sum)
// })


// request without library

// const https = require("http")
// const url = "http://api.weatherstack.com/current?access_key=8e4b74d1a89680f5269a19ecd24a2bf4&query=40.7831,-73.9712"

// const request = https.request(url, (response) => {
//   let data = ''
//   response.on('data', (chunk) => {
//     data = data + chunk.toString()
//   })

//   response.on('end', () => {
//     console.log(JSON.parse(data))
//   })
// })


// request.on("error", (error) => {
//   console.log("An error", error)
// })
// request.end()
