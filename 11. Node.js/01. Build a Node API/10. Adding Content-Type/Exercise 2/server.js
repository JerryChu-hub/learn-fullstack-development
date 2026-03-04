import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONresponse } from './sendJSONresponse.js'
import { getdatabypathParams } from './getdatabypathParams.js'
import { getdatabyQueryParams } from './getdatabyQueryParams.js'
 
const PORT = 8000
const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  const urlObj = new URL(req.url, `http://${req.headers.host}`)

  const queryObj = Object.fromEntries(urlObj.searchParams)


  if (urlObj.pathname === '/api' && req.method === 'GET') {
    let filterDestination = getdatabyQueryParams(destinations, queryObj)
    sendJSONresponse(res, 200, filterDestination)
  }

  else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop()
    const filteredData = getdatabypathParams(destinations, 'continent', continent)
    sendJSONresponse(res, 200, filteredData)
  }

  else if (req.url.startsWith('/api/continent/country') && req.method === 'GET') {
    const country = req.url.split('/').pop()
    const filteredData = getdatabypathParams(destinations, 'country', country)
    sendJSONresponse(res, 200, filteredData)
  }

  else {
    sendJSONresponse(res, 404,({
      error: "not found",
      message: "The requested route does not exist"}) )
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
