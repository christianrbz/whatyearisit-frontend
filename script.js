fetch('https://whatyearisit-backend-beta-red.vercel.app/year')
    .then(response => response.json())
    .then(data => {
   
        document.querySelector('#year').textContent = data.year;
    });
    