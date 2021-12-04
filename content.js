function buildMyFunction() {
  let bool = true;
  function innerFunction() {
    if (bool) {
      document.getElementById("demo").innerHTML =
        "Paragraph changed external js.";
    } else if (!bool) {
      document.getElementById("demo").innerHTML = "Paragraph changed back.";
    }
    bool = !bool;
  }
  return innerFunction;
}

let myFunction = buildMyFunction();
