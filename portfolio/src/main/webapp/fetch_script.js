async function showVideoGame() {
  const responseFromServer = await fetch('/content');
  const textFromResponse = await responseFromServer.json();

  const number = Math.floor((Math.random() * 3) + 1);
  
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = textFromResponse[number];
}

function requestTranslation() {
        const text = document.getElementById('text').value;
        const languageCode = document.getElementById('language').value;

        const resultContainer = document.getElementById('fact-container');
        resultContainer.innerText = 'Loading...';

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        fetch('/arabic', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
      }