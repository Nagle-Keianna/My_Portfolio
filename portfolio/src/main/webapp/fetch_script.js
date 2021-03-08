async function showVideoGame() {
  const responseFromServer = await fetch('/content');
  const textFromResponse = await responseFromServer.json();

  const number = Math.floor((Math.random() * 3) + 1);
  
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = textFromResponse[number];
}
