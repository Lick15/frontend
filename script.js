document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("getScriptBtn");
    const popup = document.getElementById("popup");
    const scriptText = document.getElementById("scriptText");

    btn.addEventListener("click", () => {
        scriptText.select();
        document.execCommand("copy");

        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 2000);
    });
});
