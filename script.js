const output = document.querySelector(".output");

function display(carac) {
  output.value += carac;
}

function del() {
  output.value = output.value.slice(0, -1);
}

function resetCalcul() {
  output.value = "";
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch {
    output.value = "invalid";
  } finally {
    output.value = eval(output.value);
  }
}

var themeSwitch = document.getElementById("theme-switch");

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

themeSwitch.addEventListener("change", switchTheme);

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  themeSwitch.checked = true;
  document.body.classList.add("dark-mode");
}