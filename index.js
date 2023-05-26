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
    results.innerHTML = "";

    const hexagramDiv = document.createElement("div");
    hexagramDiv.style.display = "flex";
    hexagramDiv.style.flexDirection = "row";
    hexagramDiv.style.justifyContent = "space-between";

    const randomHexagrams = shuffle(hexagrams).slice(0, 3);

    randomHexagrams.forEach((hexagram) => {
        const hexagramInnerDiv = document.createElement("div");
        hexagramInnerDiv.innerHTML = `<p>${resultLabels[randomHexagrams.indexOf(hexagram)]}</p><p style="font-size: 50px">${hexagram.image}</p><h2>${hexagram.name}</h2><p>${hexagram.description}</p>`;
        hexagramDiv.appendChild(hexagramInnerDiv);
    });
    results.appendChild(hexagramDiv);
}