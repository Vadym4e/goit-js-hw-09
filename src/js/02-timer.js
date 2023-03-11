import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const flatpickrInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    startButton.disabled = false;
  },
};

flatpickr(flatpickrInput, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

addLeadingZero = value => value.toString().padStart(2, '0');

startButton.addEventListener('click', () => {
  let timerStart = setInterval(() => {
    let countdown = new Date(flatpickrInput.value) - new Date();
    // console.log(countdown);
    startButton.disabled = true;

    if (countdown >= 0) {
      let convertTime = convertMs(countdown);

      days.textContent = addLeadingZero(convertTime.days);
      hours.textContent = addLeadingZero(convertTime.hours);
      minutes.textContent = addLeadingZero(convertTime.minutes);
      seconds.textContent = addLeadingZero(convertTime.seconds);
    } else {
      clearInterval(timerStart);
    }
  }, 1000);
});
