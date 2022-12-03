let btn = document.querySelector(".btn");
btn.addEventListener("click", addComment);
let input = document.querySelector(".input");
let comments = [];

function addComment() {
  let result = input.value;
  let text = result.toLowerCase();
  console.log(text);

  /*if (text.includes("viagra")) {
    text = text.replace("viagra", "***");
    alert(comment1);
    comments.push(comment);
  } else if (resultLowCase.search("xxx")) {
    comment2 = resultLowCase.replace("xxx", "***");
    alert(comment2);
    comments.push(comment2);
  } else {
    alert(resultLowCase);
    comments.push(resultLowCase);
  }*/
  comments.push(text);
  console.log(comments);
  generateComments();
  input.value = "";
}

function generateComments() {
  let optionString = "";
  for (let comment of comments) {
    optionString += `<div><p>${comment}</p></div>`;
  }
  document.querySelector(".result").innerHTML += optionString;
}
