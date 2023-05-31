function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomHexagrams() {
    const results = document.getElementById("results");
    results.style.display = "flex";
    results.innerHTML = "";

    const hexagramDiv = document.createElement("div");
    hexagramDiv.style.display = "flex";
    hexagramDiv.style.flexDirection = "row";
    hexagramDiv.style.justifyContent = "space-between";

    const randomHexagrams = shuffle(hexagrams).slice(0, 3);

    randomHexagrams.forEach((hexagram) => {
        const hexagramInnerDiv = document.createElement("div");
        hexagramInnerDiv.classList.add("hexagram");
        hexagramInnerDiv.innerHTML = `<p class="name" style="margin-top: -10px;">${resultLabels[randomHexagrams.indexOf(hexagram)]}</p><p class="image">${hexagram.image}</p><h2 class="name">${hexagram.name}</h2><p class="description">${hexagram.description}</p>`;
        hexagramDiv.appendChild(hexagramInnerDiv);
    });
    results.appendChild(hexagramDiv);
}

function showAboutDialog() {
    const dialogOverlay = document.createElement('div');
    dialogOverlay.classList.add('dialog-overlay');

    const dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog-content');
    dialogContent.addEventListener('click', hideAboutDialog);

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    // closeButton.innerText = '×';
    closeButton.addEventListener('click', hideAboutDialog);

    const dialogText = document.createElement('p');
    dialogText.innerText = 'Це програма для отримання гексаграм за книгою змін І-цзин. Дія книги заснована на концепції І-цзин та використовується для передбачення майбутнього та отримання порад.';

    dialogContent.appendChild(closeButton);
    dialogContent.appendChild(dialogText);
    dialogOverlay.appendChild(dialogContent);

    document.body.appendChild(dialogOverlay);
}

function hideAboutDialog() {
    const dialogOverlay = document.querySelector('.dialog-overlay');
    if (dialogOverlay) {
        document.body.removeChild(dialogOverlay);
    }
}


function redirectToBook() {
    window.open("https://uk.wikipedia.org/wiki/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0_%D0%B7%D0%BC%D1%96%D0%BD", "_blank");
}


const logo = document.getElementById("logo");
logo.addEventListener("click", hideHexagrams);

function hideHexagrams() {
    const results = document.getElementById("results");
    results.style.display = "none";
}