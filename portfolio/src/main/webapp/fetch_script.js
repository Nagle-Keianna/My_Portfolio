async function showVideoGame() {
  const responseFromServer = await fetch('/content');
  const textFromResponse = await responseFromServer.json();

  const number = Math.floor((Math.random() * 3) + 1);
  
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = textFromResponse[number];
}


function showTranslation() {
    const responseFromServer = await fetch('/arabic');
    const textFromResponse = await responseFromServer.text();

    const factContainer = document.getElementById('fact-container')
    factContainer.innerText = textFromResponse
}