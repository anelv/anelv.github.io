const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

//   alice1.animate(aliceTumbling, aliceTiming);

  //attempt

  alice1.animate(aliceTumbling, aliceTiming);
  const promise1 = alice1.animate(aliceTumbling, aliceTiming).finished;
  
  promise1.then(() => {
    const promise2 = alice2.animate(aliceTumbling, aliceTiming).finished;
    promise2.then(() => {
  alice3.animate(aliceTumbling, aliceTiming)
    });
  });