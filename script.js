const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const fileInput = document.getElementById("fileInput");
const brightnessInput = document.getElementById("brightness-input");
const contrastInput = document.getElementById("contrast-input");
const saturationInput = document.getElementById("saturation-input");
const blurInput = document.getElementById("blur-input");

let image = new Image();

fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
});

image.onload = () => {
  canvas.height = image.height;
  canvas.width = image.width;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

function applyFilters() {
  const brightnessValue = brightnessInput.value;
  const contrastValue = contrastInput.value;
  const saturationValue = saturationInput.value;
  const blurValue = blurInput.value;

  ctx.filter = `brightness(${brightnessValue}%)contrast(${contrastValue}%)saturate(${saturationValue}%)blur(${blurValue}px)`;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

brightnessInput.addEventListener("input", applyFilters);
contrastInput.addEventListener("input", applyFilters);
saturationInput.addEventListener("input", applyFilters);
blurInput.addEventListener("input", applyFilters);
