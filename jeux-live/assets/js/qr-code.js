export function renderQr(container, url) {
  container.innerHTML = "";
  const img = document.createElement("img");
  img.alt = "QR code pour rejoindre la partie";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=${encodeURIComponent(url)}`;
  container.appendChild(img);
}
