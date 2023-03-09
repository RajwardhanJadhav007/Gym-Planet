export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'c34b450f49mshb8627a5eb3e35bdp16a83bjsn4f38a312c315',
  },
};

export const fetchData = async (url, options) => {
  let res, data;
  try
  {
    res = await fetch(url, options);
    data = await res.json();
  }catch(err){
    console.log("some error");
  }

  return data;
};
