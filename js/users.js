const usuarios = [
  { name: "ana", password: "ana123" },
  { name: "iker", password: "iker2025" },
  { name: "mari", password: "mari111" },
  { name: "maria", password: "maria01" }
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(usuarios));
}
