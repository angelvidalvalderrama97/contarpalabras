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
        const vowelCount = countVowels(text);
        const consonantCount = countConsonants(text);

        document.getElementById('word-count').textContent = wordCount;
        document.getElementById('character-count-with-spaces').textContent = characterCountWithSpaces;
        document.getElementById('character-count-without-spaces').textContent = characterCountWithoutSpaces;
        document.getElementById('paragraph-count').textContent = paragraphCount;
        document.getElementById('sentence-count').textContent = sentenceCount;
        document.getElementById('vowel-count').textContent = vowelCount;
        document.getElementById('consonant-count').textContent = consonantCount;
    }

    function clearTextArea() {
        document.getElementById('text-area').value = '';
        countWordsAndCharacters();
    }

    function countVowels(text) {
        const vowels = 'aeiouAEIOU';
        let count = 0;

        for (let i = 0; i < text.length; i++) {
            if (vowels.includes(text[i])) {
                count++;
            }
        }

        return count;
    }

    function countConsonants(text) {
        const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
        let count = 0;

        for (let i = 0; i < text.length; i++) {
            if (consonants.includes(text[i])) {
                count++;
            }
        }

        return count;
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
    if (navigator.userAgent.indexOf('Edg') != -1) {
        const countersContainer = document.querySelector('.counters-container');
        countersContainer.style.marginTop = '20px';
        countersContainer.style.marginRight = '20px';
    }
});


























