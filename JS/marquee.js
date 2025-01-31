  // document.addEventListener('DOMContentLoaded', function () {
  //   function duplicateElements(selector, speed) {
  //     const container = document.querySelector(selector);
  //     const items = Array.from(container.children);
  //     let position = 0;

  //     // Дублируем элементы для бесшовного эффекта
  //     container.innerHTML += container.innerHTML;

  //     function animateScroll() {
  //       position -= speed;
  //       container.style.transform = `translateX(${position}px)`;
        
  //       // Если блок ушел за пределы, переносим без рывков
  //       if (Math.abs(position) >= container.scrollWidth / 2) {
  //         position = 0;
  //         container.style.transform = `translateX(0)`;
  //       }

  //       requestAnimationFrame(animateScroll);
  //     }

  //     animateScroll();

  //     // Остановка при наведении
  //     container.addEventListener('mouseenter', () => {
  //       speed = 0;
  //     });

  //     container.addEventListener('mouseleave', () => {
  //       speed = 1;
  //     });
  //   }

  //   duplicateElements('.left-to-right', 1);  // Прокрутка слева направо
  //   duplicateElements('.right-to-left', -1); // Прокрутка справа налево
  // });
