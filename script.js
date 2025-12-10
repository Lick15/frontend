document.getElementById("copyBtn").addEventListener("click", () => {

    const script = `loadstring(game:HttpGet("https://raw.githubusercontent.com/Lick15/lll-hub/main/Pickaxe%20Simulator.lua"))()`;

    navigator.clipboard.writeText(script).then(() => {
        document.getElementById("copied").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("copied").classList.add("hidden");
        }, 2000);
    });
});
