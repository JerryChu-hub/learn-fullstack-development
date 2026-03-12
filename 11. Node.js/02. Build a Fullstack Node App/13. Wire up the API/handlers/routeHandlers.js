import { getData } from '../utils/getData.js'
import { parseJSON } from '../utils/parseJSONbody.js'
import { sendResponse } from '../utils/sendResponse.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import { sanitizeInput } from '../utils/sanitizeinput.js'

export async function handleGet(res) {

   const data = await getData()
   const content = JSON.stringify(data)
   sendResponse(res, 200, 'application/json', content)
} 

export async function handlePost(req, res) {

   try {
      const parsedbody = await parseJSON(req)
      const sanitizedBody = sanitizeInput(parsedbody)
      await addNewSighting(sanitizedBody)
      sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody))
   } catch (err) {
      sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
   }
   

}