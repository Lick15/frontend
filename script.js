document.getElementById("getScriptBtn").addEventListener("click", () => {
    const box = document.getElementById("scriptBox");
    box.classList.remove("hidden");
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const text = document.getElementById("scriptText");

    text.select();
    text.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(text.value);

    // SHOW POPUP
    const popup = document.getElementById("copiedPopup");
    popup.classList.add("show");

    setTimeout(() => popup.classList.remove("show"), 1500);
});
