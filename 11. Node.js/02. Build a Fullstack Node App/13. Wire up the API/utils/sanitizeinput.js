import sanitizeHtml from 'sanitize-html'

export function sanitizeInput(data) {
    const sanitizedtData = {}

    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            sanitizedtData[key] =  sanitizeHtml(value, { allowedTags: ['b'], allowedAttributes:{}})
        } else {
            sanitizedtData[key] = value
        }
    }

    return sanitizedtData
}