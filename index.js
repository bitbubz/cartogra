const form = document.getElementById("enrollment");
const dropDown = document.createElement("select");
form.appendChild(dropDown);

const destinations = [
  { id: 1, name: "Amalfi Coast" },
  {
    id: 2,
    name: "Bora Bora",
  },
  {
    id: 3,
    name: "Costa Rica",
  },
  {
    id: 4,
    name: "Kyoto",
  },
  {
    id: 5,
    name: "Maldives",
  },
  {
    id: 6,
    name: "Nepal",
  },
  {
    id: 7,
    name: "Paris",
  },
  {
    id: 8,
    name: "Patagonia",
  },
  {
    id: 9,
    name: "Queenstown",
  },
  {
    id: 10,
    name: "Reykjavik",
  },
  {
    id: 11,
    name: "Santorini",
  },
  {
    id: 12,
    name: "Seychelles",
  },
  {
    id: 13,
    name: "Tanzania",
  },
  {
    id: 14,
    name: "Tuscany",
  },
  {
    id: 15,
    name: "Whistler",
  },
];

destinations.forEach((element, array) => {
  const choice = document.createElement("option");
  dropDown.appendChild(choice);
  choice.innerHTML = element.name;
});

console.log(form);
