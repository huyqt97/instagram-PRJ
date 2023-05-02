let fullname = document.getElementById("fullname");
let personalPage = document.getElementById("personal-page");
let personalPageFullname = document.getElementById("personal-page-fullname");
let headerRight2 = document.getElementById("header-right-2");
let fname = document.getElementById("fname");
let btnUpAvatar = document.getElementById("btn-up-avatar");
let inputAvatar = document.getElementById("input-avatar");
let checkImg = document.getElementsByClassName("avatar-img1");
let avatarPage = document.getElementById("avatar-img");
let logOut = document.getElementById("logout");
let btnProfile = document.getElementById("btn-profile");

//in ra số posts, số like, số following
headerRight2.innerHTML = `
<span><b>${2}</b> posts</span>
<span><b>${3}</b> followers</span>
<span><b>${4}</b> following</span>
`;
//check avatar
inputAvatar.oninput = function () {
  avatarPage.innerHTML = `
    <img src="${inputAvatar.value}" alt="" />
    `;
};
// function forCheckId() {
//   for (let i = 0; i < idInfors.length; i++) {
//     checkId = i;
//   }
// }
// forCheckId();

btnUpAvatar.onclick = function () {
  let checkId = -1;
  if (inputAvatar.value !== "") {
    console.log(inputAvatar.value);
    currenAccount.avatar = inputAvatar.value;
    localStorage.setItem("currenAccount", JSON.stringify(currenAccount));
    // forCheckId();
    for (let i = 0; i < idInfors.length; i++) {
      if (currenAccount.username === idInfors[i].username) {
        checkId = i;
      }
    }
    if (checkId !== -1) {
      idInfors.splice(checkId, 1, currenAccount);
      localStorage.setItem("idInfors", JSON.stringify(idInfors));
      alert("cập nhập ảnh thành công!");
      location.reload();
    }
  } else {
    alert("chưa chọn file");
  }
};

// in ra cá nhân
fname.innerHTML = currenAccount.fullname;
fullname.innerHTML = currenAccount.fullname;
personalPageFullname.innerText = currenAccount.fullname;

//in ra avatar
for (let i = 0; i < checkImg.length; i++) {
  checkImg[i].innerHTML = `
  <img src="${currenAccount.avatar}" alt="" />
  `;
}
// log out
logOut.onclick = function () {
  swal({
    title: "you are trying to log out!?",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      window.location.href = "http://127.0.0.1:5501/login/login.html";
      localStorage.removeItem("currenAccount");
    }
  });
};
