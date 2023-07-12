document.addEventListener("DOMContentLoaded", function() {
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const cookieBanner = document.getElementById("cookie-banner");

    acceptCookiesButton.addEventListener("click", function() {
        closeCookieBanner();
    });

    function countWordsAndCharacters() {
        const text = document.getElementById('text-area').value;
        const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;
        const characterCountWithSpaces = text.length;
        const characterCountWithoutSpaces = text.replace(/\s/g, '').length;
        const paragraphCount = text.split('\n\n').filter(paragraph => paragraph !== '').length;
        const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence !== '').length;

        let wordsArray = text.toLowerCase().match(/\b[a-z]+\b/g);
        let wordFrequency = {};
        let mostFrequentWord = '';

        if (wordsArray) {
          wordsArray.forEach(function(word) {
            if (!wordFrequency[word]) {
              wordFrequency[word] = 0;
            }
            wordFrequency[word] += 1;
          });

          for (let word in wordFrequency) {
            if (wordFrequency[word] >= 2) { // Mostrar solo cuando hay dos palabras repetidas o más
              if (mostFrequentWord === '') {
                mostFrequentWord = word;
              } else if (wordFrequency[word] > wordFrequency[mostFrequentWord]) {
                mostFrequentWord = word;
              }
            }
          }
        }



        document.getElementById('word-count').textContent = wordCount;
        document.getElementById('character-count-with-spaces').textContent = characterCountWithSpaces;
        document.getElementById('character-count-without-spaces').textContent = characterCountWithoutSpaces;
        document.getElementById('paragraph-count').textContent = paragraphCount;
        document.getElementById('sentence-count').textContent = sentenceCount;

        // Agregar el resultado de la palabra más repetida al DOM
        document.getElementById('most-frequent-word').textContent = mostFrequentWord;
    }


    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closeCookieBanner() {
        cookieBanner.style.display = "none";
    }

    // Evento inicial para contar palabras y caracteres
    countWordsAndCharacters();

    // Evento para contar palabras y caracteres en tiempo real
    document.getElementById('text-area').addEventListener('input', countWordsAndCharacters);
});

document.addEventListener('DOMContentLoaded', function() {
    if (navigator.userAgent.indexOf('Edg') != -1 || navigator.userAgent.indexOf('Opera') != -1 || navigator.userAgent.indexOf('OPR') != -1) {
        console.log('Estoy en Edge o en Opera');
        const countersContainer = document.querySelector('.counters-container');
        countersContainer.style.marginTop = '20px';
        countersContainer.style.marginRight = '20px';
    }
    if (navigator.userAgent.indexOf('Firefox') != -1){
            const countersContainer = document.querySelector('.counters-container');
            countersContainer.style.marginTop = '20px';
            countersContainer.style.marginRight = '50px';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

function clearTextArea() {
        document.getElementById('text-area').value = '';
        countWordsAndCharacters();
    }


















































































