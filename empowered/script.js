const allCards = [
  // Major Arcana
  "Fool", "Magician", "High Priestess", "Empress", "Emperor", "Hierophant",
  "Lovers", "Chariot", "Strength", "Hermit", "Wheel of Fortune", "Justice",
  "Hanged Man", "Death", "Temperance", "Devil", "Tower", "Star", "Moon",
  "Sun", "Judgement", "World",

  // Wands
  "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands",
  "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands",
  "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",

  // Cups
  "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups",
  "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
  "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",

  // Swords
  "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords",
  "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords",
  "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",

  // Pentacles
  "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles",
  "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles",
  "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"
];

function getCardImage(cardName) {
  return `../cards/${cardName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}.jpg`;
}

function drawCard() {
  const index = Math.floor(Math.random() * allCards.length);
  const card = allCards[index];

  document.getElementById("card").innerHTML = `
    <p style="margin-top: 30px;">You drew:</p>
    <div class="card-container">
      <div class="card">
        <img src="${getCardImage(card)}" alt="${card}" />
        <h2>${card}</h2>
      </div>
    </div>
  `;

  fetch('cardData.json')
    .then(res => res.json())
    .then(data => {
      const interpretation = data[card] || "<p>Your empowerment message is on its way...</p>";
      document.getElementById("interpretation").innerHTML = interpretation;
    });
}
