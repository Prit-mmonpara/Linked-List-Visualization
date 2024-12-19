const moment = require('moment');

async function measureApiResponseTime(url) {
    const startTime = moment(); 
    try {
        const response = await fetch(url); 
        const responseJSON = await response.json();
        // console.log(`Response text from ${url}:`, responseJSON);
        // const data = JSON.parse(responseText);

        const endTime = moment();
        const responseTime = endTime.diff(startTime, 'milliseconds'); 
        console.log(`Response time for ${url}: ${responseTime} ms`);
        return responseJSON; 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
measureApiResponseTime('https://bold-currently-lemur.ngrok-free.app/assesment/1');
measureApiResponseTime('https://bold-currently-lemur.ngrok-free.app/assesment/2');


// const data = fetch(
//   "https://bold-currently-lemur.ngrok-free.app/assesment/1"
// ).then((response) => response.json())
// .then((data) => console.log("data from my APi", data));

// 'https://bold-currently-lemur.ngrok-free.app/assesment/1'



// With the use of then

function fetchFromAPIs() {
    const startTime = moment(); 
    const api1 = fetch('https://bold-currently-lemur.ngrok-free.app/assesment/1').then(response => response.json());
    const api2 = fetch('https://bold-currently-lemur.ngrok-free.app/assesment/2').then(response => response.json());

    Promise.all([api1, api2])
        .then(results => {
            const [data1, data2] = results;
            const endTime = moment();
            const responseTime = endTime.diff(startTime, 'milliseconds'); 
            console.log(`Response time from Promise.all with then: ${responseTime} ms`);
            // console.log('Data from API 1:', data1);
            // console.log('Data from API 2:', data2);
        })
        .catch(error => {
            console.error('Error fetching data from APIs:', error);
        });
}

fetchFromAPIs();





// With the use of async and await

async function fetchInParallel() {
    const startTime = moment();
    try {
      const [api1, api2] = await Promise.all([
        fetch('https://bold-currently-lemur.ngrok-free.app/assesment/1'),
        fetch('https://bold-currently-lemur.ngrok-free.app/assesment/2'),
      ]);
  
      const data1 = await api1.json();
      const data2 = await api2.json();
      
      const endTime = moment();
      const responseTime = endTime.diff(startTime, 'milliseconds'); 
      console.log(`RResponse time from Promise.all with async and await : ${responseTime} ms`);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchInParallel();




let rand = Math.floor(Math.random() * 2)

function delayedFetch(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, delay);
    });
}

async function fetchDataWithDelay() {
    const startTime = moment(); 
    try {
        let api1, api2;
        if(!rand)
        {
            api1 = await delayedFetch('https://bold-currently-lemur.ngrok-free.app/assesment/1', 3000); // 3-second delay
            api2 = fetch('https://bold-currently-lemur.ngrok-free.app/assesment/2').then(response => response.json());
        }
        else
        {
            api1 = await delayedFetch('https://bold-currently-lemur.ngrok-free.app/assesment/2', 3000);
            api2 = fetch('https://bold-currently-lemur.ngrok-free.app/assesment/2').then(response => response.json());
        }
        
        const fastestResponse = await Promise.race([api1, api2]);
        const endTime = moment();
        const responseTime = endTime.diff(startTime, 'milliseconds'); 
        console.log(`Response time From Promise.race with async and await :  ${responseTime} ms`);
        // console.log('Data from fastest API:', fastestResponse)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataWithDelay();





// const fetchDataFromFastest = async () => {
//     const startTime = moment(); 
//     try {
//         const api1 = fetch('https://bold-currently-lemur.ngrok-free.app/assesment/1').then(response => response.json());
//         const api2 = fetch('https://bold-currently-lemur.ngrok-free.app/assesment/2').then(response => response.json());

//         const fastestResponse = await Promise.race([api1, api2]);
//         const endTime = moment();
//         const responseTime = endTime.diff(startTime, 'milliseconds'); 
//         console.log(`Response time From Promise.race with async and await : ${responseTime} ms`);
//         //console.log('Data from fastest API:', fastestResponse);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// fetchDataFromFastest();



// function fetchFromAPIs() {
//     const startTime = moment(); 
//     const api1 = await fetch('https://bold-currently-lemur.ngrok-free.app/assesment/1');
//     const data1 = await api1.json();
//     const api2 = fetch('https://bold-currently-lemur.ngrok-free.app/assesment/2').then(response => response.json());

//     Promise.all([api1, api2])
//         .then(results => {
//             const [data1, data2] = results;
//             const endTime = moment();
//             const responseTime = endTime.diff(startTime, 'milliseconds'); 
//             console.log(`Response time: ${responseTime} ms`);
//             // console.log('Data from API 1:', data1);
//             // console.log('Data from API 2:', data2);
//         })
//         .catch(error => {
//             console.error('Error fetching data from APIs:', error);
//         });
// }

// fetchFromAPIs();

let str = "Hello prit how are you";

let ProperCase = str.split(" ").map((word) =>{
    return word[0].toUpperCase() + word.slice(1)
}).join(" ")

console.log(ProperCase);
