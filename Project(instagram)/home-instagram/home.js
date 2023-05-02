// Lấy tất cả tài khoản  từ  localStorage về
let idInfors = JSON.parse(localStorage.getItem("idInfors")); // tất cả các acc đã đăng ký
// Lấy thông tin tài khoản đang đăng nhập từ localStorage về
let currenAccount = JSON.parse(localStorage.getItem("currenAccount")); // acc đang đăng nhập
let contents = JSON.parse(localStorage.getItem("contents"));
let comments = []; // comments
let idContent;

let containerContent = document.getElementById("containerContent");
let containerListComment = document.getElementById("containerListComment");
let eventInput = document.getElementById("eventInput");
let inputComment = document.getElementById("inputComment");
let btnPost = document.getElementById("btnPost");
let main = document.getElementById("main1");
let sumComments = 0;
let sumLikes = 0;

let checkIdContent = -1;

function renderContents() {
  let listContent = "";
  for (let i = contents.length - 1; i >= 0; i--) {
    listContent += `
    <div id="${contents[i].id}" class="main-child">
    <div class="child-head">
    <div class="left">
    <img src="${contents[i].avatar}" alt="" />
    <span>${contents[i].fullname}</span>
    </div>
    <i class="fas fa-ellipsis-h"></i>
    </div>
    <div class="img-content">
    <img src="${contents[i].img}" alt="" class="" />
    </div>
    <div class="child-nav">
                    <div class="icon-left">
                    <i class="far fa-heart"></i>
                    <i type="button" id = '${i}' class="btn  far fa-comment-dots btn-content" data-toggle="modal" data-target="#exampleModal"></i>
                    <i class="fab fa-telegram-plane"></i>
                    </div>
                    <i class="far fa-bookmark"></i>
                    </div>
                    <p class="likes"><b>${contents[i].like}</b>likes</p>
                    <p>${contents[i].content}</p>
                    <p
                    >
                    View all<span>${contents[i].numberComment}</span> Comments
                    </p>
                    </div>
                    `;
  }
  containerContent.innerHTML = listContent;
}
renderContents();
// render trong (containerListComment)
function renderContainerListComment() {
  let listcomment = "";
  let currentContent = JSON.parse(localStorage.getItem("currentContent"));
  for (let i = 0; i < comments.length; i++) {
    let element = comments[i];
    if (element && element.content.id == currentContent.id) {
      listcomment += `
      <div id="${comments[i].id}" class="comment box-comment">
      <div class="id-comment">
      <div class="avatar-comment avatar-img1">
      <img src="${comments[i].img}" alt="">
      </div>
      <b>${comments[i].fullname}</b>
      <span>${comments[i].comment}</span>
      </div>
      <i class="fa-regular fa-heart"></i>
      </div>
      `;
    }
  }
  containerListComment.innerHTML = listcomment;
}
renderContainerListComment();

// //sự kiên main
main.onclick = function (event) {
  let flag = event.target.classList.contains("btn-content");
  // let  flag =null ;
  if (flag) {
    let idContent = event.target.id;
    let currentContent = contents[idContent];
    localStorage.setItem("currentContent", JSON.stringify(currentContent));
    renderContainerListComment();
  }
};

//sự kiện input
inputComment.oninput = function () {
  if (inputComment.value === "") {
    eventInput.children[1].style.color = "#b3dbff";
  } else {
    eventInput.children[1].style.color = "rgb(17, 124, 238)";
  }
};

// // nhận dữ liệu comment
btnPost.onclick = function (e) {
  let flag = e.target.classList.contains("btnPost");
  flag;
  if (flag) {
    let currentContent = JSON.parse(localStorage.getItem("currentContent"));
    if (inputComment.value !== "") {
      let comment = {
        id: Math.floor(Math.random() * 1000000),
        content: currentContent,
        img: currenAccount.avatar,
        fullname: currenAccount.fullname,
        comment: inputComment.value,
        sumcomments: sumComments,
        sumlike: sumLikes,
      };
      comments.push(comment);
      console.log(sumComments);
      renderContainerListComment();
      inputComment.value = "";
    }
  }
};

// //người dùng
// let user = [
//   {
//     id: 1,
//     EmailPhone: "huytrinh@gmail.com",
//     avatar:
//       "https://thuthuatphanmem.vn/uploads/2018/05/23/wallpaper-4k-hinh-nen-4k-ky-quan-thien-nhien-dep_100009861.jpg",
//     fullName: "Nguyễn Quang Huy",
//     passWord: "huytrinh97",
//     userName: "huytrinh97",
//     posts: [
//       {
//         id: 11,
//         avatar:
//           "https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2022/12/29/002zlx3bly1h887uh02jlj623e353x6p02-1672311114069829121945-1672314863173-1672314866274808570961-95-0-1345-2000-crop-1672314927829235372339.jpg",
//         fullName: "Dương mịch",
//         content: "phải xinh",
//         image:
//           "https://icdn.dantri.com.vn/thumb_w/660/2021/07/28/mich-7-1627443800805.jpeg",
//         sumLike: 0,
//         sumComment: 0,
//       },
//       {
//         id: 12,
//         avatar:
//           "https://nld.mediacdn.vn/2019/10/19/1571405322-201910180-iu-15714805252122044141800.jpg",
//         fullName: "IU",
//         content: "Một đêm tuyệt vời!!!!!",
//         image: "https://i.ytimg.com/vi/o_nxIQTM_B0/maxresdefault.jpg",
//         sumLike: 0,
//         sumComment: 0,
//       },
//     ],
//   },
//   {
//     id: 2,
//     EmailPhone: "huytrinh@gmail.com",
//     avatar:
//       "https://thuthuatphanmem.vn/uploads/2018/05/23/wallpaper-4k-hinh-nen-4k-ky-quan-thien-nhien-dep_100009861.jpg",
//     fullName: "Nguyễn Quang Huy",
//     passWord: "huytrinh97",
//     userName: "huytrinh97",
//     posts: [
//       {
//         id: 21,
//         avatar:
//           "https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2022/12/29/002zlx3bly1h887uh02jlj623e353x6p02-1672311114069829121945-1672314863173-1672314866274808570961-95-0-1345-2000-crop-1672314927829235372339.jpg",
//         fullName: "Dương mịch",
//         content: "phải xinh",
//         image:
//           "https://icdn.dantri.com.vn/thumb_w/660/2021/07/28/mich-7-1627443800805.jpeg",
//         sumLike: 0,
//         sumComment: 0,
//       },
//       {
//         id: 22,
//         avatar:
//           "https://nld.mediacdn.vn/2019/10/19/1571405322-201910180-iu-15714805252122044141800.jpg",
//         fullName: "IU",
//         content: "Một đêm tuyệt vời!!!!!",
//         image: "https://i.ytimg.com/vi/o_nxIQTM_B0/maxresdefault.jpg",
//         sumLike: 0,
//         sumComment: 0,
//       },
//     ],
//   },
// ];
// //gọi id chứa contents
// let containerContent = document.getElementById("containerContent");
// //tạo 1 thùng chứa tất cả contents
// let contents = [];

// //gọi html chứa contents
// // let main1 = document.getElementById("main1");

// //render ra màn hình contents
// function renderContents() {
//   let listContent = "";
//   for (let i = contents.length - 1; i >= 0; i--) {
//     listContent += `
//     <div id="${contents[i].id}" class="main-child">
//     <div class="child-head">
//     <div class="left">
//     <img src="${contents[i].avatar}" alt="" />
//     <span>${contents[i].fullName}</span>
//     </div>
//     <i class="fas fa-ellipsis-h"></i>
//     </div>
//     <div class="img-content">
//     <img src="${contents[i].image}" alt="" class="" />
//     </div>
//     <div class="child-nav">
//     <div class="icon-left">
//     <i class="far fa-heart"></i>
//     <i type="button" class="btn  far fa-comment-dots btn-content" data-toggle="modal" data-target="#exampleModal"></i>
//     <i class="fab fa-telegram-plane"></i>
//     </div>
//                     <i class="far fa-bookmark"></i>
//                     </div>
//                     <p class="likes"><b>${contents[i].sumLike}</b>likes</p>
//                     <p>${contents[i].content}</p>
//                     <p
//                     >
//                     View all<span>${contents[i].sumComment}</span> Comments
//                     </p>
//                     </div>
//                     `;
//   }
//   containerContent.innerHTML = listContent;
// }
// renderContents();
// //lưu tất cả bài viế của người dùng vào 1 biến contents
// function saveContent() {
//   for (let i = 0; i < user.length; i++) {
//     for (let j = 0; j < user[i].posts.length; j++) {
//       // gộp tất cả bài viết vào 1 mảng
//       contents = contents.concat(user[i].posts[j]);
//     }
//   }
//   renderContents();
// }
// saveContent();

// // event click
// main1.onclick = function (event) {
//   if (event.target.classList.contains("btn-content")) {
//     let id = event.target.parentElement.parentElement.parentElement.id;
//     let currentContent = contents[id];
//   }
// };
