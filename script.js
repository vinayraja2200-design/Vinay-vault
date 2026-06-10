function saveNote() {
const input = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

if (!input.value.trim()) {
alert("Please write a note first.");
return;
}

const li = document.createElement("li");
li.textContent = input.value;
notesList.prepend(li);

input.value = "";
}
