// منوی موبایل
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));

// انیمیشن ورود بخش‌ها هنگام اسکرول
const animatedElements = document.querySelectorAll('.animate');
function showOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// فرم تماس
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'لطفاً همه فیلدها را پر کنید.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'پیام شما با موفقیت ارسال شد ✅';
  formMessage.style.color = 'green';
  contactForm.reset();
});
