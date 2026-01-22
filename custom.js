// 導航按鈕滾動高亮功能
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav_btn a');
  const sections = document.querySelectorAll('[id^="DAY"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 移除所有 active 狀態
        navLinks.forEach(link => link.classList.remove('active'));
        // 為對應的按鈕加上 active
        const activeLink = document.querySelector(`.nav_btn a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,      // 當區段有 10% 進入畫面時觸發
    rootMargin: '-10% 0px -70% 0px'  // 調整觸發範圍，讓高亮更精準
  });

  // 觀察每個區段
  sections.forEach(section => observer.observe(section));
});
