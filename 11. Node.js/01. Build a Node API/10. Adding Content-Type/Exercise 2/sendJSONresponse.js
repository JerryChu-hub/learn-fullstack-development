export const sendJSONresponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-control-allow-origin', '*')
    res.setHeader('Access-control-allow-methods', 'GET')
    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}