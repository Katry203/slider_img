let slider_number = document.querySelector(".slider_imges .slider_number");
let slider_img = Array.from(document.querySelectorAll(`.slider_imges img`));
let prev = document.querySelector(`.slides_controls .prev`);
let indicators = document.querySelector(`.slides_controls .indicators`);
let next = document.querySelector(`.slides_controls .next`);

let current_slide = 1;

display_indecators();
the_cheker_in_slider();
// display all numbers from imges
function display_indecators() {
  let ele_ul = document.createElement("ul");
  ele_ul.classList.add("number");
  let idactor = indicators.appendChild(ele_ul);

  for (let i = 1; i <= slider_img.length; ++i) {
    let el_li = document.createElement("li");
    el_li.innerHTML = i;
    idactor.appendChild(el_li);
    el_li.setAttribute("data_index", i);
  }
}
let bolutes = document.querySelectorAll(`.indicators li`);
for (let x of bolutes) {
  x.addEventListener("click", () => {
    current_slide = parseInt(x.getAttribute("data_index"));
    the_cheker_in_slider();
  });
}
function the_cheker_in_slider() {
  let ine_li = document.querySelector(".slides_controls .indicators ul");
  slider_number.innerHTML = `slide# ${current_slide} of ${slider_img.length}`;
  remove_all_active();
  slider_img[current_slide - 1].classList.add("active");
  ine_li.children[current_slide - 1].classList.add("active");

  if (current_slide == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }

  if (current_slide == slider_img.length) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

function remove_all_active() {
  let bolutes = document.querySelectorAll(`.indicators li`);
  slider_img.forEach(function (slide) {
    slide.classList.remove("active");
  });
  bolutes.forEach(function (number) {
    number.classList.remove("active");
  });
}

prev.addEventListener("click", () => {
  if (prev.classList.contains("disabled")) {
    return 0;
  } else {
    current_slide--;
    the_cheker_in_slider();
  }
});

next.addEventListener("click", () => {
  if (next.classList.contains("disabled")) {
    return 0;
  } else {
    current_slide++;
    the_cheker_in_slider();
  }
});
