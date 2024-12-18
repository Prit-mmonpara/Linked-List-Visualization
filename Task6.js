
// function useOfSetInteval(durationInMinutes) {
//     const startTime = new Date().getTime(); // Get current time in milliseconds

//     // Save the interval ID
//     const intervalId = setInterval(() => {
//         const currentTime = new Date().getTime(); // Get current time in milliseconds
//         const elapsedTime = (currentTime - startTime) / 1000; // Calculate elapsed time in seconds
        
//         let second = new Date().getSeconds();
//         let minute = new Date().getMinutes();
//         let hour = new Date().getHours();
//         console.log('Current time : ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' +  new Date().getSeconds());
//         if (elapsedTime > durationInMinutes * 60) {
//             clearInterval(intervalId); // Use the interval ID to clear the interval
//             console.log('Inside clear Interval Time');
//         } 
//         // else {
//         //     clearInterval(intervalId); // Use the interval ID to clear the interval
//         //     let second = new Date().getSeconds();
//         //     let minute = new Date().getMinutes();
//         //     let hour = new Date().getHours();
//         //     console.log('Current time : ' + hour + ':' + minute + ':' + second);
//         //     console.log('Inside clear Interval Time');
//         // }
//     }, 1000);
// }

// useOfSetInteval(1); // Run for 1 minute


// Second part of your code using validation
let obj = {
    "key": {
        "name": "John",
        "validation": new Date().getTime() + 10000 // 11 seconds from now in milliseconds
    }
};

function get(obj) {
    console.log(`Name is ${obj.key.name}`);
}

const validationIntervalId = setInterval(() => {
    let currentTime = new Date().getTime();
    //console.log(`Validation time: ${obj["key"]["validation"]}, Current time: ${currentTime}`);
    if (currentTime <= obj["key"]["validation"]) {
        get(obj);
    } else {
        clearInterval(validationIntervalId); // Use the interval ID to clear the interval
        console.log('Validation time Expired');
    }
}, 1000);
