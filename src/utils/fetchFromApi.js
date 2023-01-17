import axios from "axios";
const BASE_Url =  'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_Url,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key':'3837f06611msh0d6ae52c8090597p1b00e7jsnb1f09514ab1d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }

};

export const fetchFromAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_Url}/${url}`,options);
    return data;
}




