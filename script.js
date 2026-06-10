const SUPABASE_URL = "https://empqhpzwsgbreosuzcln.supabase.co";
const SUPABASE_KEY = "sb_publishable_K9OLp5G7M9uXx4Bt0XPpzQ_nXx8KhOt";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function saveNote() {
const noteInput = document.getElementById("noteInput");
const content = noteInput.value.trim();

if (!content) {
alert("Please write a note first.");
return;
}

const { error } = await supabaseClient.from("notes").insert([
{
title: "Quick Private Note",
content: content,
category: "General"
}
]);

if (error) {
alert("Note not saved. Check console.");
console.error(error);
return;
}

alert("Note saved successfully!");
noteInput.value = "";
loadNotes();
}

async function loadNotes() {
const notesList = document.getElementById("notesList");
if (!notesList) return;

const { data, error } = await supabaseClient
.from("notes")
.select("*")
.order("created_at", { ascending: false });

if (error) {
console.error(error);
return;
}

notesList.innerHTML = "";

data.forEach(note => {
const li = document.createElement("li");
li.innerHTML = `
<strong>${note.title}</strong><br>
${note.content}<br>
<small>${note.category} • ${new Date(note.created_at).toLocaleString()}</small>
`;
notesList.appendChild(li);
});
}

loadNotes();
