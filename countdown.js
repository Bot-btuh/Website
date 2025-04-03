
   const targetDate = new Date('May 19, 2025 23:59:').getTime();


   const countdownInterval = setInterval(updateCountdown, 1000);

   function updateCountdown() {
       const now = new Date().getTime();
       const distance = targetDate - now;

       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       document.getElementById('Days').innerHTML = days;
       document.getElementById('Hours').innerHTML = hours;
       document.getElementById('Minutes').innerHTML = minutes;
       document.getElementById('Seconds').innerHTML = seconds;

       if (distance < 0) {
           clearInterval(countdownInterval);
           document.getElementById('countdown').style.display = 'none';
           document.getElementById('message').style.display = 'block';
       }
   }


   updateCountdown();