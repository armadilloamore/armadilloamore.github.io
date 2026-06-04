document.addEventListener("DOMContentLoaded", async () => {
  const drawBtn = document.getElementById("draw-btn");
  const statusMessage = document.getElementById("status-message");
  const resultBox = document.getElementById("card-result");
  const cardImage = document.getElementById("card-image");
  const cardTitle = document.getElementById("card-title");
  const cardMeaning = document.getElementById("card-meaning");

  let cards = [];
  let previousCardIndex = -1;

  try {
    const response = await fetch("seasons.json");
    if (!response.ok) {
      throw new Error(`Deck data could not be loaded (${response.status}).`);
    }

    cards = await response.json();
    if (!Array.isArray(cards) || cards.length === 0) {
      throw new Error("Deck data is empty.");
    }

    drawBtn.disabled = false;
    drawBtn.textContent = "Draw Your Card";
    statusMessage.textContent = "";
  } catch (error) {
    console.error("Seasons of the Heart deck error:", error);
    drawBtn.textContent = "Deck Unavailable";
    statusMessage.textContent = "The deck could not be loaded. Please refresh the page and try again.";
    return;
  }

  drawBtn.addEventListener("click", () => {
    let cardIndex = Math.floor(Math.random() * cards.length);

    if (cards.length > 1) {
      while (cardIndex === previousCardIndex) {
        cardIndex = Math.floor(Math.random() * cards.length);
      }
    }

    previousCardIndex = cardIndex;
    const card = cards[cardIndex];

    cardImage.src = card.image;
    cardImage.alt = `${card.name} oracle card`;
    cardTitle.textContent = card.name;
    cardMeaning.textContent = card.meaning || "Let the image and the name of this card speak gently to your present season.";
    resultBox.hidden = false;
    drawBtn.textContent = "Draw Another Card";
    statusMessage.textContent = `You drew ${card.name}.`;
    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
