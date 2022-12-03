document.querySelector("#btn").addEventListener("click", getName);

function getName() {
  let input = document.querySelector("#name");
  let data = input.value;

  let firstname = document.querySelector("#firstname");
  let secondname = document.querySelector("#secondname");
  let thirdname = document.querySelector("#thirdname");
  firstname.innerHTML = "";
  secondname.innerHTML = "";
  thirdname.innerHTML = "";

  let arrays = data.split(" ");
  let arraysFiltered = arrays.filter((element) => {
    return (
      element !== false &&
      element !== undefined &&
      element !== null &&
      element !== "" &&
      element !== 0
    );
  });
  let newArray = arraysFiltered.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  firstname.innerHTML += "Фамилия: " + newArray[0];
  secondname.innerHTML += "Имя: " + newArray[1];
  thirdname.innerHTML += "Отчество: " + newArray[2];
  input.value = "";
}
