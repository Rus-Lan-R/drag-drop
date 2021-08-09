const item = document.querySelector(".item");
const placeHolders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeHolder of placeHolders) {
	placeHolder.addEventListener("dragover", dragover);
	placeHolder.addEventListener("dragenter", dragenter);
	placeHolder.addEventListener("dragleave", dragleave);
	placeHolder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
	event.target.classList.add("hold");
	setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
	event.target.classList.remove("hold", "hide");
}

function dragover(event) {
	event.preventDefault();
}

function dragenter(event) {
	event.target.classList.add("hovered");
}

function dragleave(event) {
	event.target.classList.remove("hovered");
	item.classList.remove(event.target.id);
}

function dragdrop(event) {
	event.target.append(item);
	item.classList.add(event.target.id);

	console.log(item.className);
	console.log(event.target.id);
	event.target.classList.remove("hovered");
}
