const button = document.querySelector("button");

const container = document.getElementById("container");
const input = document.querySelector("input");
const form = document.querySelector("form");
form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const newtask = `   <div class="task">
    <span class="icon-star-full icon"></span>
    <p class="p">${input.value}</p>
    <div>
      <span class="icon-bin icon"></span>

      <span class="icon-eye icon"></span>
    </div>
    <!-- <span class="icon-heart"></span> -->
  </div>`;
  container.innerHTML += newtask;
  input.value = " ";
});

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-bin icon":
      eo.target.parentElement.parentElement.remove();
      break;
    case "icon-eye icon":
      const newicon = ` <span class="icon-heart"></span> `;
      eo.target.parentElement.parentElement
        .getElementsByClassName("p")[0]
        .classList.add("finish");

      eo.target.classList.add("dn");

      eo.target.parentElement.innerHTML += newicon;

      break;
    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("p")[0]
        .classList.remove("finish");

      const newicons = ` <span class="icon-eye icon"></span> `;
      eo.target.classList.add("dn");
      eo.target.parentElement.innerHTML += newicons;

      break;
    case "icon-star-full icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);

      break;
    case "icon-star-full icon orange":
      eo.target.classList.remove("orange");
      container.append(eo.target.parentElement);

      break;

    default:
      break;
  }
});
// defrent way:
// if (eo.target.className == "icon-bin icon") {
//   eo.target.parentElement.parentElement.remove();
// } else if (eo.target.className == "icon-eye icon") {
//   const newicon = ` <span class="icon-heart"></span> `;
//   eo.target.parentElement.parentElement
//     .getElementsByClassName("p")[0]
//     .classList.add("finish");

//   eo.target.classList.add("dn");

//   eo.target.parentElement.innerHTML += newicon;
// } else if (eo.target.className == "icon-heart") {
//   eo.target.parentElement.parentElement
//     .getElementsByClassName("p")[0]
//     .classList.remove("finish");

//   const newicon = ` <span class="icon-eye icon"></span> `;
//   eo.target.classList.add("dn");
//   eo.target.parentElement.innerHTML += newicon;
// } else if (eo.target.className == "icon-star-full icon") {
//   eo.target.classList.add("orange");
//   container.prepend(eo.target.parentElement);
// } else if (eo.target.className == "icon-star-full icon orange") {
//   eo.target.classList.remove("orange");
//   container.append(eo.target.parentElement);
// }
