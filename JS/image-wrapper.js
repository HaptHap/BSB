document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".main-text");
    let currentIndex = 0;

    function switchImage() {
        const currentImage = images[currentIndex];
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];

        // Убираем текущее изображение
        currentImage.classList.remove("active");
        currentImage.classList.add("exiting");

        // Показ следующего изображения
        nextImage.classList.add("active");

        // Ждем окончания анимации
        setTimeout(() => {
            currentImage.classList.remove("exiting");
        }, 500);

        // Обновляем текущий индекс
        currentIndex = nextIndex;
    }

    // Показываем первое изображение
    images[currentIndex].classList.add("active");

    // Запускаем интервал смены изображений
    setInterval(switchImage, 1000);
});
