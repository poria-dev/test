const box1 = document.getElementById('box1');
const colorBtns = document.querySelectorAll('.color-btn');

const colors = {
  red: '#ef4444',
  blue: '#3b82f6',
  green: '#22c55e',
  reset: '#fcd34d', // amber-300
};

colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const colorKey = btn.dataset.color;
    box1.style.backgroundColor = colors[colorKey] || colors.reset;
  });
});