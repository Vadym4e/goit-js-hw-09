// import Notiflix from 'notiflix';

// const form = document.querySelector('.form');
// const delay = document.querySelector('[name="delay"]');
// const step = document.querySelector('[name="step"]');
// const amount = document.querySelector('[name="amount"]');
// const buttonCreate = document.querySelector('[type="submit"]');

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;

//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     });
//   });

//   return promise;
// }

// buttonCreate.addEventListener('click', evt => {
//   let firstDalay = Number(delay.value);
//   let stepDelay = Number(step.value);

//   for (let i = 0; i < amount.value; i += 1) {
//     createPromise(i + 1, firstDalay + 1 * stepDelay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })

//       .catch(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }

//   form.reset();
// });

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnCreatePromise = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

btnCreatePromise.addEventListener('click', e => {
  e.preventDefault();
  let firstDelay = Number(delay.value);
  let delayStep = Number(step.value);
  for (let i = 0; i < amount.value; i++) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  form.reset();
});
