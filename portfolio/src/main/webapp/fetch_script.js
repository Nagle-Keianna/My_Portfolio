async function showServerTime() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const greetingcontainer = document.getElementById('greeting-container');
  greetingcontainer.innerText = textFromResponse;
}
