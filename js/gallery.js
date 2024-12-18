'use strict';

const imgModal = document.getElementById("imgModal");

// Function to open the modal and pass the image and caption
function openModal(imgSrc, captionText) {
	const modalImg = document.getElementById("modalImage");
	const modalCaption = document.getElementById("modalCaption");
	imgModal.style.visibility = "visible";
	modalImg.src = imgSrc;
	modalCaption.innerText = captionText;
}

// Function to close the modal
function closeModal() {
	imgModal.style.visibility = null;
}

function galleryClick(event) {
	const caption = event.target.parentNode.getElementsByTagName("figcaption")[0];
	openModal(event.target.src, caption.innerText);
}

for(const img of document.querySelectorAll(".gallery img")) {
	img.addEventListener("click", galleryClick);
}

imgModal.addEventListener("click", closeModal);