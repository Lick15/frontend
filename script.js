// --------- (2) ตรวจว่ามาจาก LootLabs หรือไม่ ---------
const urlParams = new URLSearchParams(window.location.search);
const verified = urlParams.get("verified");

const box = document.getElementById("scriptBox");

if (verified === "1") {
    box.classList.remove("hidden");
} else {
    window.location.href = "https://lootdest.org/s?Z0UxfDhS"; // เปลี่ยนเป็นลิงค์ของคุณ
}


// --------- (11) Copy Script with Animation + Toast ---------

const toast = document.getElementById("toast");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {

    const scriptText =
