export const getdatabyQueryParams = (data, queryObj) => {
   const {continent, country, is_open_to_public} = queryObj

   if (continent) {
    data = data.filter(destination => 
        destination.continent.tolowercase() === continent.tolowercase()
    )
   }

   if (country) {
    data = data.filter(destination => 
        destination.country.tolowercase() === country.tolowercase()
    )
   }

   if (is_open_to_public) {
    data = data.filter(destination => 
       destination.is_open_to_public === JSON.parse(is_open_to_public.tolowercase())
    )
   }

   return data
}