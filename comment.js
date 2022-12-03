let btn = document.querySelector(".btn");
btn.addEventListener("click", addComment);
let input = document.querySelector(".input");
let comments = [];

function checkSpam() {
  let result = input.value;
  let text = result.toLowerCase();
  console.log(text);

  if (text.includes("viagra")) {
    text = text.replace("viagra", "***");
    comments.push(text);
  } else if (text.includes("xxx")) {
    text = text.replace("xxx", "***");
    comments.push(text);
  } else {
    comments.push(text);
  }

  console.log(comments);
  generateComments();
  input.value = "";
  comments = [];
}

function generateComments() {
  let optionString = "";
  for (let comment of comments) {
    optionString += `<div><p>${comment}</p></div>`;
  }
  document.querySelector(".result").innerHTML += optionString;
}
