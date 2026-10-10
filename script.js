const galleryPhotos = [
  { src: "lotus1.webp", label: "Bridal beauty" },
  { src: "lotus2.webp", label: "Bridal beauty" },
  { src: "lotus3.png", label: "Bridal beauty" },
  { src: "lotus4.webp", label: "Bridal beauty" },
  { src: "lotus5.webp", label: "Bridal beauty" },
  { src: "lotus6.png", label: "Bridal beauty" },
  { src: "lotus7.webp", label: "Bridal beauty" },
  { src: "lotus8.webp", label: "Bridal beauty" },
  { src: "lotus9.webp", label: "Bridal beauty" },
  { src: "lotus10.webp", label: "Bridal beauty" },
  { src: "lotus11.webp", label: "Bridal beauty" },
  { src: "lotus12.webp", label: "Bridal beauty" },
  { src: "lotus13.webp", label: "Bridal beauty" },
  { src: "Screenshot 2026-10-10 120910.png", label: "Bridal makeup finish" }
];

const galleryGrid = document.querySelector("#galleryGrid");
const bookingForm = document.querySelector("#bookingForm");
const serviceSelect = document.querySelector("#serviceSelect");
const toast = document.querySelector("#toast");

const ownerWhatsAppNumber = "";

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function renderGallery() {
  galleryGrid.innerHTML = "";
  galleryPhotos.forEach((photo, index) => {
    const item = document.createElement("figure");
    item.className = "gallery-item";
    item.dataset.label = photo.label;

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = `${photo.label} at Lotus Women's Special`;
    image.loading = index < 4 ? "eager" : "lazy";

    item.appendChild(image);
    galleryGrid.appendChild(item);
  });
}

document.querySelectorAll(".package-book").forEach((button) => {
  button.addEventListener("click", () => {
    serviceSelect.value = button.dataset.package;
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!ownerWhatsAppNumber) {
    showToast("Online booking is not set up yet. Please contact the studio directly to confirm your enquiry.");
    return;
  }

  const formData = new FormData(bookingForm);
  const message = [
    "Hello Lotus Women's Special, I want to book a service.",
    `Name: ${formData.get("name")}`,
    `Phone: ${formData.get("phone")}`,
    `Service: ${formData.get("service")}`,
    `Preferred date: ${formData.get("date") || "Not fixed"}`,
    `Notes: ${formData.get("notes") || "No extra notes"}`
  ].join("\n");

  window.open(`https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

renderGallery();
