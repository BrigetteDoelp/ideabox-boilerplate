class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }
  saveToStorage() {

  }
  deleteFromStorage() {

  }
  updateIdea() {
    this.star = !this.star;
    if (this.star) {
      return "assets/star-active.svg";
    }
    else {
      return "assets/star.svg";
    }
  }
}
