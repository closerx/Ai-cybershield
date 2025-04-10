
function scanText() {
    const input = document.getElementById("inputText").value.toLowerCase();
    const resultBox = document.getElementById("resultBox");
    const threats = ['hack', 'malware', 'attack', 'phishing', 'trojan', 'virus', 'breach'];

    let isThreat = threats.some(word => input.includes(word));

    if (isThreat) {
        resultBox.className = 'threat';
        resultBox.textContent = '⚠️ Threat Detected';
    } else {
        resultBox.className = 'safe';
        resultBox.textContent = '✅ Safe';
    }
}
