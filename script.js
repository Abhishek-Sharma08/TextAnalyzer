const textarea = document.querySelector("#text");
const wordCount = document.querySelector("#word-count");
const charCount = document.querySelector("#char-count");
const readTime = document.querySelector("#read-time");
const mostRepeatedWord = document.querySelector("#most-repeated-word");

textarea.addEventListener("input", (e) => {
    let text = textarea.value;
    let words = text.trim().toLowerCase().split(/\s+/);
    let freq = {};
    let maxWord = "";
    let maxCount = 0;

    if (text.trim() === "") {
        wordCount.innerHTML = `Words count is : 0`;
        charCount.innerHTML = `Character count is : 0`;
        readTime.innerHTML = `Reading time required : 0 minutes`;
        mostRepeatedWord.innerHTML = `No repeated word yet`;
        return;
    }

    wordCount.innerHTML = `Words count is : ${words.length}`;
    charCount.innerHTML = `Character count is : ${text.length}`;
    readTime.innerHTML = `Reading time required : ${Math.round(text.length / 200)} minutes`;

    words.forEach(word => {
        if (word === "") return;
        freq[word] = (freq[word] || 0) + 1;

        if (freq[word] > maxCount) {
            maxCount = freq[word];
            maxWord = word;
        }
    });

    mostRepeatedWord.innerHTML = maxWord
        ? `Most repeated word is "${maxWord}" (${maxCount} times)`
        : `No repeated word yet`;
});