let access_btn = document.getElementById("access_btn");

let access_value = document.getElementById("access_input");

let err_msg = document.querySelector(".err_msg");
let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

access_btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (access_value.value.match(validRegex)) {
    err_msg.classList.add("hidden");

    return true;
  } else {
    err_msg.classList.remove("hidden");
    return false;
  }
});
