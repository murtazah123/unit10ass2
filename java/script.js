const teamMembers = [
 {
   name: "Sam",
   icon: "👩‍💻",
   reason: "Loves the friendly team atmosphere and cool projects."
 },
 {
   name: "Luca",
   icon: "👨‍🔧",
   reason: "Enjoys the flexibility and creative freedom."
 },
 {
   name: "Priya",
   icon: "👩‍🎨",
   reason: "Appreciates the company’s focus on design and innovation."
 },
 {
   name: "Alex",
   icon: "🧑‍🚀",
   reason: "Thrilled to work on cutting-edge tech and AI at Hot Beans!"
 }
];
const teamContainer = document.getElementById('team');
teamMembers.forEach(member => {
 const card = document.createElement('div');
 card.className = 'person';
 const icon = document.createElement('div');
 icon.className = 'icon';
 icon.textContent = member.icon;
 const name = document.createElement('div');
 name.className = 'name';
 name.textContent = member.name;
 const reason = document.createElement('div');
 reason.className = 'reason';
 reason.textContent = member.reason;
 card.appendChild(icon);
 card.appendChild(name);
 card.appendChild(reason);
 // Show reason on hover
 card.addEventListener('mouseenter', () => {
   reason.style.display = 'block';
 });
 card.addEventListener('mouseleave', () => {
   reason.style.display = 'none';
 });
 teamContainer.appendChild(card);
});
