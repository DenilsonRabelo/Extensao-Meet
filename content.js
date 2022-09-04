function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm(".Hjto4e").then((elm) => {
  const buttonBaixar = document.createElement("a");
  buttonBaixar.innerHTML = "Baixar Frequência";
  buttonBaixar.className = "frequencia";
  elm.appendChild(buttonBaixar);
  getClick(buttonBaixar);
});

async function getClick(btn) {
  btn.addEventListener("click", () => {
    const date = new Date().toLocaleTimeString();
    let pessoas = ["#,Nome,Data"];
    document.querySelectorAll(".zWGUib").forEach((element, index) => {
      pessoas[index + 1] = [index, element.textContent, date];
    });

    btn.setAttribute("download", "chamada.csv");
    btn.setAttribute(
      "href",
      `data:text/csvcharset=utf8,${encodeURIComponent(pessoas.join("\n"))}`
    );
  });
}
