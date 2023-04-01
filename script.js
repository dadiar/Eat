function updateTime() {
    // Set the timeout time to 6:40 PM
    const timeoutHour = 20; // 6 PM
    const timeoutMinute = 01;
  
    // Get the current date and time
    const now = new Date();
  
    // Set the timeout time to today's date
    const timeout = new Date(now.getFullYear(), now.getMonth(), now.getDate(), timeoutHour, timeoutMinute, 0);
  
    // If the timeout time has already passed, set it to tomorrow
    if (now > timeout) {
      timeout.setDate(timeout.getDate() + 1);
    }
  
    // Calculate the time difference between now and the timeout time
    const timeDiff = timeout - now;
  
    // Calculate the hours, minutes and seconds remaining
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
  
    // Format the remaining time as a string
    const remainingTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    // Update the HTML display with the remaining time
    const countdown = document.getElementById("countdown");
    countdown.textContent = remainingTime;
  
    // If the timeout has expired, play a ringing tone
    if (timeDiff <= 0) {
      const audio = new Audio('s.mp3');
      audio.play();
    }
  }
  
  // Call the updateTime function every second to update the display
  setInterval(updateTime, 1000);
  
  // Prayer times data for Glasgow
const prayerTimes = [
  { name: "Fajr", time: "5:00 AM" },
  { name: "Sunrise", time: "7:00 AM" },
  { name: "Dhuhr", time: "1:29 PM" },
  { name: "Asr", time: "4:44 PM" },
  { name: "Maghrib", time: "8:01 PM" },
  { name: "Isha", time: "9:35 PM" },
];

// Function to update the popup with the current date and prayer times
function updatePopup() {
  // Get the current date and format it as "day month year"
  const now = new Date();
  const date = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  document.getElementById("date").textContent = date;

  // Update the prayer times
  const prayerTimesList = document.getElementById("prayer-times");
  prayerTimesList.innerHTML = "";
  for (const prayer of prayerTimes) {
    const li = document.createElement("li");
    li.textContent = `${prayer.name}: ${prayer.time}`;
    prayerTimesList.appendChild(li);
  }
}

// Update the popup when the page is loaded
updatePopup();

// Set an interval to update the popup every day at midnight
setInterval(updatePopup, 1000 * 60 * 60 * 24);

// Show the popup when the button is clicked
const showPopupButton = document.getElementById("show-popup");
const popupContainer = document.getElementById("popup-container");
const closePopupButton = document.getElementById("close-popup");

showPopupButton.addEventListener("click", () => {
  popupContainer.classList.add("show");
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener("click", () => {
  popupContainer.classList.remove("show");
});

function playAlarm() {
  const alarmSound = new Audio('s.mp3');
  alarmSound.play();
}

const timeoutDuration = 10000; // 10 seconds
const timeoutId = setTimeout(playAlarm, timeoutDuration);
