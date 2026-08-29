
document.getElementById("year").textContent = new Date().getFullYear();

const email = document.getElementById("supportEmail").textContent.trim();
document.getElementById("copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    const btn = document.getElementById("copyEmail");
    const old = btn.textContent;
    btn.textContent = "E-mail copiado ✓";
    setTimeout(() => btn.textContent = old, 1800);
  } catch {
    alert("E-mail de suporte: " + email);
  }
});

document.querySelectorAll("[data-plan]").forEach(el => {
  el.addEventListener("click", () => {
    localStorage.setItem("etiquetaSeguraPlano", el.dataset.plan);
  });
});
