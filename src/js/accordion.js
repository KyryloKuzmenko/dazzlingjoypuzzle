document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const faqItem = btn.closest('.faq-item');
      const content = faqItem.querySelector('.faq-content');

      const isActive = faqItem.classList.toggle('active');

      if (isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = 1;
        content.style.marginTop = '10px';
      } else {
        content.style.maxHeight = null;
        content.style.opacity = 0;
        content.style.marginTop = '0px';
      }
    });
  });
});
