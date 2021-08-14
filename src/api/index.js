import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    
   try {
       const {data: { data }} = await axios.get(URL, {

        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-key': '0b5e0c6871mshe4cbf9e32807f12p1bab25jsn2f6fb35bbce3',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    });

       return data;
   } catch (error) {
       console.log(error);
   }
}
