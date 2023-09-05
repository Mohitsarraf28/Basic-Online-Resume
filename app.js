let form = document.querySelector(".form");
let resume = document.querySelector(".resume");
let pro = document.querySelector(".pro");
let pro1 = document.querySelector(".Project");
let exp = document.querySelector(".exp1");
let exp1 = document.querySelector(".exp");
let skk = document.querySelector(".skk");
let skill_list = document.querySelector(".skill_list");


const buttons = {
  btn : document.querySelector(".submit"),
  ed_btn : document.querySelector(".ed_btn"),
  p_btn : document.querySelector(".p_btn"),
  ex_btn : document.querySelector(".ex_btn"),
  sk_btn : document.querySelector(".sk_btn")
}


const output = {
  oName: document.querySelector("#name"),
  oEmail: document.querySelector(".email"),
  oPhone: document.querySelector(".phone"),
  otwit: document.querySelector(".twitter"),
  oLink: document.querySelector(".linkedin"),
  oEducation: document.querySelector(".education"),
  oProject: document.querySelector(".p_des"),
  oP_title: document.querySelector(".p_head"),
  oExp_head: document.querySelector(".exp_head"),
  oExp_des: document.querySelector(".exp_des"),
  oFirst_skill: document.querySelector(".first")
}

const input = {
  iFname: document.querySelector("#f_name"),
  iLname: document.querySelector("#l_name"),
  iEmail: document.querySelector("#email"),
  iPhone: document.querySelector("#number"),
  itwit: document.querySelector("#twitter"),
  iLink: document.querySelector("#linkedin"),
  iEducation: document.querySelector("#education"),
  iProject: document.querySelector("#project"),
  iP_title: document.querySelector("#p_title"),
  skill: document.querySelector("#skills"),
  e_title: document.querySelector("#e_title"),
  e_body: document.querySelector("#e_body")
};


let newTextarea;
let newInput, c;
let str = "abcde";
let str2 = "fghij";
let str3 = "klmno";
let str4 = "pqrst";
let i = -1, j = -1, z = -1;
let arr = ["bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm"];

buttons.btn.addEventListener("click", () => {
  dataFun();
  form.style.display = "none";
  resume.style.display = "block";

})

let dataFun = function () {
  output.oName.innerText = input.iFname.value + " " + input.iLname.value;
  output.oEmail.innerText = input.iEmail.value;
  output.oPhone.innerText = input.iPhone.value;
  output.otwit.innerText = input.itwit.value;
  output.oLink.innerText = input.iLink.value;
  output.oEducation.innerText = input.iEducation.value;
  output.oP_title.innerText = input.iP_title.value;
  output.oProject.innerText = input.iProject.value;
  create(str, str2, i, pro1);
  output.oExp_head.innerText = input.e_title.value;
  output.oExp_des.innerText = input.e_body.value;
  create(str3, str4, j, exp1);
  output.oFirst_skill.innerText = input.skill.value
  addSkill();
}

buttons.p_btn.addEventListener("click", () => {
  i++;
  newInput = document.createElement("input");
  newInput.classList.add(str.charAt(i));
  newInput.placeholder = "Project Title";
  newTextarea = document.createElement("textarea");
  newTextarea.rows = 5;
  newTextarea.placeholder = "Project Description"
  newTextarea.classList.add(str2.charAt(i));
  pro.append(newInput);
  pro.append(newTextarea);
})



let create = (st, st2, l, el) => {
  for (let m = 0; m <= l; m++) {
    let c = document.querySelector("." + st.charAt(m));
    let d = document.querySelector("." + st2.charAt(m));
    let newh3 = document.createElement("h3");
    newh3.innerText = c.value;
    newh3.style.marginTop = "10px";
    let newp = document.createElement("p");
    newp.innerText = d.value
    el.append(newh3);
    el.append(newp);
  }
}


buttons.ex_btn.addEventListener("click", () => {
  j++;
  newInput = document.createElement("input");
  newInput.classList.add(str3.charAt(j));
  newInput.placeholder = "Title";
  newTextarea = document.createElement("textarea");
  newTextarea.rows = 5;
  newTextarea.placeholder = "About";
  newTextarea.classList.add(str4.charAt(j));
  exp.append(newInput);
  exp.append(newTextarea);
})

buttons.sk_btn.addEventListener("click", () => {
  z++;
  newInput = document.createElement("input");
  newInput.classList.add(arr[z]);
  skk.append(newInput);
})


let addSkill = () => {
  for (let x = 0; x <= z; x++) {
    c = document.querySelector('.' + arr[x]);
    let newLi = document.createElement("li");
    newLi.innerText = c.value;
    skill_list.append(newLi);
  }
}