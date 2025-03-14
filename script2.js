function updateDiv() {
    const qarson = document.querySelector(".qarson");
    if (qarson) {
      if (qarson.style.display === "none") {
        qarson.style.display = "block";
      } else {
        qarson.style.display = "none";
      }
    }
  }