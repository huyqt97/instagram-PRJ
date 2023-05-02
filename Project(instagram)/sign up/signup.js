// login up
let idInfors = JSON.parse(localStorage.getItem("idInfors"));
if (!idInfors) {
  idInfors = [];
}
// let idInfors = [
//   {
//     id: 1,
//     EmailPhone: "Email và sđt",
//     fullname: "Nguyễn Quang Huy",
//     username: "tên đăng nhập",
//     password: "password",
//     avatar: "avatar",
//   },
// ];
// localStorage.setItem("idInfors", JSON.stringify(idInfors));

let loginUp = document.getElementById("form-login_up");
let id = 0;

//
loginUp.onsubmit = function (event) {
  debugger;
  event.preventDefault();
  checkUser = -1;
  for (let i = 0; i < idInfors.length; i++) {
    if (loginUp.userName.value === idInfors[i].username) {
      checkUser = i;
    }
  }
  if (checkUser !== -1) {
    alert("tên tài khoản đã tồn tại mời nhập lại");
  } else if (
    loginUp.emailOrNumber.value !== "" &&
    loginUp.fullName.value !== "" &&
    loginUp.userName.value.length >= 6 &&
    loginUp.password.value.length >= 8
  ) {
    let idInfor = {
      id: Math.random(Math.random() * 1000000),
      EmailPhone: loginUp.emailOrNumber.value,
      fullname: loginUp.fullName.value,
      username: loginUp.userName.value,
      password: loginUp.password.value,
      avatar: "",
    };
    idInfors.push(idInfor);
    localStorage.setItem("idInfors", JSON.stringify(idInfors));
    alert("đăng ký thành công!");

    // Resert dữ liệu
    loginUp.emailOrNumber.value = "";
    loginUp.fullName.value = "";
    loginUp.userName.value = "";
    loginUp.password.value = "";
  } else {
    alert("mời nhập đủ thông tin");
  }
};


