async function showServerTime() {
  const responseFromServer = await fetch('/content');
  const games = await responseFromServer.json();

  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = textFromResponse;
}
