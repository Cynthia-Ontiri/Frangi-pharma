document.addEventListener('DOMContentLoaded', function() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '29d22c4b6fmsh6e0bc3f335d797ap1cf5d4jsne944e8805340',
      'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
    }
  };
  
  fetch('https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
})
