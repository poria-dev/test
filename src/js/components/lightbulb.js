const bulbImg = document.getElementById('bulb-img');
const onBtn = document.getElementById('bulb-on');
const offBtn = document.getElementById('bulb-off');

const BULB_ON = 'src/assets/img/pic_bulbon.gif';
const BULB_OFF = 'src/assets/img/pic_bulboff.gif';

function setBulb(state) {
  bulbImg.src = state ? BULB_ON : BULB_OFF;
}

// Event listeners
onBtn.addEventListener('click', () => setBulb(true));
offBtn.addEventListener('click', () => setBulb(false));
bulbImg.addEventListener('click', () => {
  const isOn = bulbImg.src.includes('bulbon');
  setBulb(!isOn);
});