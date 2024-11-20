const imageUpload = document.getElementById('imageUpload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gradients = document.querySelectorAll('#gradients button');
const downloadBtn = document.getElementById('download');
const marginSlider = document.getElementById('marginSlider');
const marginValueDisplay = document.getElementById('marginValue');

let currentImage = null;
let currentGradient = 'gradient1';
let margin = parseInt(marginSlider.value); // Margen inicial

// Actualiza el valor del margen dinámicamente
marginSlider.addEventListener('input', (e) => {
  margin = parseInt(e.target.value);
  marginValueDisplay.textContent = margin; // Muestra el valor del margen
  applyGradient(); // Actualiza el canvas al cambiar el margen
});

// Subir y mostrar imagen en el canvas
imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = () => {
    canvas.width = img.width + margin * 2;
    canvas.height = img.height + margin * 2;
    currentImage = img;
    applyGradient(); // Aplica el degradado actual con la imagen
  };
  img.src = URL.createObjectURL(file);
});

// Cambiar degradado
gradients.forEach(button => {
  button.addEventListener('click', () => {
    currentGradient = button.dataset.gradient;
    applyGradient();
  });
});

// Dibujar degradado y luego la imagen
function applyGradient() {
  if (!currentImage) return;

  // Establece el tamaño del canvas con márgenes dinámicos
  canvas.width = currentImage.width + margin * 2;
  canvas.height = currentImage.height + margin * 2;

  // Dibujar el degradado en el canvas
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  if (currentGradient === 'gradient1') {
    gradient.addColorStop(0, '#ff7e5f');
    gradient.addColorStop(1, '#feb47b');
  } else if (currentGradient === 'gradient2') {
    gradient.addColorStop(0, '#6a11cb');
    gradient.addColorStop(1, '#2575fc');
  } else if (currentGradient === 'gradient3') {
    gradient.addColorStop(0, '#43cea2');
    gradient.addColorStop(1, '#185a9d');
  } else if (currentGradient === 'gradient4') {
    gradient.addColorStop(0, '#ff9a9e');
    gradient.addColorStop(1, '#fad0c4');
  } else if (currentGradient === 'gradient5') {
    gradient.addColorStop(0, '#ff9966');
    gradient.addColorStop(1, '#ff5e62');
  } else if (currentGradient === 'gradient6') {
    gradient.addColorStop(0, '#00c6ff');
    gradient.addColorStop(1, '#0072ff');
  } else if (currentGradient === 'gradient7') {
    gradient.addColorStop(0, '#a1c4fd');
    gradient.addColorStop(1, '#c2e9fb');
  } else if (currentGradient === 'gradient8') {
    gradient.addColorStop(0, '#fddb92');
    gradient.addColorStop(1, '#d1fdff');
  } else if (currentGradient === 'gradient9') {
    gradient.addColorStop(0, '#fc00ff');
    gradient.addColorStop(1, '#00dbde');
  } else if (currentGradient === 'gradient10') {
    gradient.addColorStop(0, '#8e2de2');
    gradient.addColorStop(1, '#4a00e0');
  } else if (currentGradient === 'gradient11') {
    gradient.addColorStop(0, '#ee9ca7');
    gradient.addColorStop(1, '#ffdde1');
  } else if (currentGradient === 'gradient12') {
    gradient.addColorStop(0, '#42275a');
    gradient.addColorStop(1, '#734b6d');
  } else if (currentGradient === 'gradient13') {
    gradient.addColorStop(0, '#bdc3c7');
    gradient.addColorStop(1, '#2c3e50');
  } else if (currentGradient === 'gradient14') {
    gradient.addColorStop(0, '#ff6a00');
    gradient.addColorStop(1, '#ee0979');
  } else if (currentGradient === 'gradient15') {
    gradient.addColorStop(0, '#56ab2f');
    gradient.addColorStop(1, '#a8e063');
  } else if (currentGradient === 'gradient16') {
    gradient.addColorStop(0, '#4ca1af');
    gradient.addColorStop(1, '#c4e0e5');
  } else if (currentGradient === 'gradient17') {
    gradient.addColorStop(0, '#ec008c');
    gradient.addColorStop(1, '#fc6767');
  } else if (currentGradient === 'gradient18') {
    gradient.addColorStop(0, '#8a2387');
    gradient.addColorStop(1, '#e94057');
    gradient.addColorStop(2, '#f27121');
  } else if (currentGradient === 'gradient19') {
    gradient.addColorStop(0, '#009fff');
    gradient.addColorStop(1, '#ec2f4b');
  } else if (currentGradient === 'gradient20') {
    gradient.addColorStop(0, '#7f00ff');
    gradient.addColorStop(1, '#e100ff');
  } else if (currentGradient === 'gradient21') {
    gradient.addColorStop(0, '#fc466b');
    gradient.addColorStop(1, '#3f5efb');
  } else if (currentGradient === 'gradient22') {
    gradient.addColorStop(0, '#1f4037');
    gradient.addColorStop(1, '#99f2c8');
  } else if (currentGradient === 'gradient23') {
    gradient.addColorStop(0, '#ff5f6d');
    gradient.addColorStop(1, '#ffc371');
  } else if (currentGradient === 'gradient24') {
    gradient.addColorStop(0, '#00c9ff');
    gradient.addColorStop(1, '#92fe9d');
  } else if (currentGradient === 'gradient25') {
    gradient.addColorStop(0, '#2b5876');
    gradient.addColorStop(1, '#4e4376');
  }

  // Dibuja el degradado en todo el canvas
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Centrar la imagen en el canvas
  const offsetX = margin; // Espacio horizontal
  const offsetY = margin; // Espacio vertical
  ctx.drawImage(currentImage, offsetX, offsetY);
}

// Descargar la imagen
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'edited-image.png';
  link.href = canvas.toDataURL();
  link.click();
});
