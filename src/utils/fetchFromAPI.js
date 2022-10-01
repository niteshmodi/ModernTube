import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';


const options = {
    
    url: BASE_URL,
    params: {
      maxResults: '50',
     
      
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ?? 'f60e349827mshe8201f6ecdc00bbp126bf2jsnb27f2845ca45',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  

  export const fetchFromAPI = async (url) => {
    const { data} = 
    await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }