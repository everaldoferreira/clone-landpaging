
  const deadline = new Date("Jul 31, 2025 23:59:59").getTime();

  const x = setInterval(function() {
    const now = new Date().getTime();
    const t = deadline - now;

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    if (t < 0) {
      clearInterval(x);
      document.getElementById("countdown").textContent = "Promoção encerrada!";
    }
  }, 1000);

