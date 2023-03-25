function updateTime() {
    // Set the timeout time to 6:40 PM
    const timeoutHour = 18; // 6 PM
    const timeoutMinute = 40;
  
    // Get the current date and time
    const now = new Date();
  
    // Set the timeout time to today's date
    const timeout = new Date(now.getFullYear(), now.getMonth(), now.getDate(), timeoutHour, timeoutMinute, 0);
  
    // If the timeout time has already passed, set it to tomorrow
    if (now > timeout) {
      timeout.setDate(timeout.getDate() + 2);
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