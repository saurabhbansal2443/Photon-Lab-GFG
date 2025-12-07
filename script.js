const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const fileInput = document.getElementById("fileInput");

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
