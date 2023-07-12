class Controls {
  constructor() {
    this.up = false;
    this.#addKeyListeners();
  }

  #addKeyListeners() {
    document.addEventListener("keyup", (key) => {
      if (key.key === "ArrowUp") {
        this.up = false;
      }
    });

    document.addEventListener("keydown", (key) => {
      if (key.key === "ArrowUp") {
        this.up = true;
      }
    });
  }
}
