const express = require('express')
const app = express()
const compression = require('compression')
// const path = require('path')


// app.use(express.static(path.join(__dirname, '../public')))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// }) // Send index.html for any other requests
app.use(compression({ filter: shouldCompress }))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

const root = require('path').join(__dirname, '../public')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})


module.exports = app;
