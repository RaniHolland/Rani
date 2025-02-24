const correctWord = "טלפון".split("");
function checkWord() {
    const input = document.getElementById("wordInput").value.trim();
    if (input.length !== 5) {
        alert("המילה חייבת להיות באורך 5 אותיות");
        return;
    }
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let letterSpan = document.createElement("span");
        letterSpan.classList.add("letter");
        letterSpan.textContent = input[i].toUpperCase();
        if (input[i] === correctWord[i]) {
            letterSpan.classList.add("green");
        } else if (correctWord.includes(input[i])) {
            letterSpan.classList.add("yellow");
        } else {
            letterSpan.classList.add("gray");
        }
        resultDiv.appendChild(letterSpan);
    }
    document.getElementById("wordInput").value = "";
}
