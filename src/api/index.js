import axios from 'axios';

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getDetailsData = async (sw, ne) => {
  try {
    const {data:{ data }} = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': 'e319c2a849msh311d3899300a67bp190188jsn7b44bcb717ca',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
      });

      return data;

  } catch (error) {
    console.log (error);
  }
}

