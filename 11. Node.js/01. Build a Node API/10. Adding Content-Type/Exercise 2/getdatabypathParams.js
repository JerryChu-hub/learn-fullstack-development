export const getdatabypathParams = (data, locationType, lcationName) => {
   return data.filter((destinations) => {
      return destinations[locationType].toLowerCase() === lcationName.toLowerCase()
    })
}