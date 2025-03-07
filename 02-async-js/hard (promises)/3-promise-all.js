/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('1 sec wait complete')
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('2 sec wait complete')
        }, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('3 sec wait complete');
        }, 3000);
    })
}

function calculateTime() {
    const startTime = Date.now();

  Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond()
  ])
    .then((results) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log("All promises resolved after", duration, "milliseconds.");
      console.log("Results:", results);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
// calculateTime();
