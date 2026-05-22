{
    // Sử dụng Block Scope {} để cô lập hoàn toàn các biến bên trong
    const targetUrls = [
        "https://www.google.com",
        "https://www.wikipedia.org",
        "https://github.com",
        "https://archive.org",
        "https://www.youtube.com"
    ];

    const randomIndex = Math.floor(Math.random() * targetUrls.length);
    const chosenUrl = targetUrls[randomIndex];

    // Cấu hình nút bấm dự phòng
    const fallbackBtn = document.getElementById('rd-fallback-btn');
    if (fallbackBtn) {
        fallbackBtn.href = chosenUrl;
    }

    // Xử lý bộ đếm ngược
    let secondsLeft = 10;
    const countdownEl = document.getElementById('rd-countdown-num');

    const redirectTimer = setInterval(() => {
        secondsLeft--;
        if (countdownEl) {
            countdownEl.textContent = secondsLeft;
        }

        if (secondsLeft <= 0) {
            clearInterval(redirectTimer);
            window.location.href = chosenUrl;
        }
    }, 1000);
}