import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const flatpickrInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const currentTime = Date.now();

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
    selectedTime.time = selectedDates.getTime();
    if (selectedDates[0] < options.defaultDate) {
      window.alert('Please choose a date in the future');
      return;
    }
    // console.log('currentTime', currentTime);
    startButton.disabled = false;
  },
};

flatpickr(flatpickrInput, options);

console.log('currentTime', currentTime);
console.log('selectedTime', selectedTime.time);
