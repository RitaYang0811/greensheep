import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");

// Banner 輪播
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  speed: 1000,
  centeredSlides: true,
  //自動播放
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  //分頁點點
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 點擊愛心
const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});
//客製設計輪播
var swiper = new Swiper(".cusSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//換寶石
$(document).ready(function () {
  // 獲取所有寶石按鈕和對應寶石圖片元素
  var $toggleButtons = $(".toggle-button");
  var $icons = $(".icon");

  // 創建狀態變量來跟蹤每個按鈕的當前狀態
  var buttonStates = {};

  // 增加點擊事件處理程序
  $toggleButtons.click(function () {
    //獲取點擊按鈕的對應圖示ID
    var targetIconId = $(this).data("target");

    // 獲取當前按鈕狀態
    var currentState = buttonStates[targetIconId] || "hidden";

    if (currentState === "hidden") {
      // 隱藏所有圖示
      $icons.hide();
      // 顯示對應圖示
      $("#" + targetIconId).show();
      // 更新按鈕狀態為顯示
      buttonStates[targetIconId] = "shown";
    } else {
      // 隱藏目標圖示
      $("#" + targetIconId).hide();
      // 更新按鈕狀態為隱藏
      buttonStates[targetIconId] = "hidden";
    }
  });
});

// 回到最上頁按鈕(柯基新增 9/10)
// 用goTop當成變數，而這個變數是抓到scroll-top-btn這個class
const goTop = document.querySelector(".scroll-top-btn");

//對螢幕使用監聽器(可以想像成監視器)，監視的條件是scroll(滑動)與否
window.addEventListener("scroll", () => {
  // 假設當垂直滑動超過300px時，會對goTop，也就是scroll-top-btn加上active這個class
  if (window.scrollY > 300) {
    goTop.classList.add("active");
    // console.log("123"); //這句只是看有沒有進入判斷式
  } else {
    // 如果沒有超過300px，就移除active這個class
    goTop.classList.remove("active");
  }
});

$(document).ready(function () {
  // 獲取各個元素
  var $inputText = $("#inputText");
  var $fontRadios = $('input[name="fontRadio"]');
  var $previewText = $("#previewText");
  var $previewImage = $("#previewImage");
  var $previewButton = $("#previewButton");

  // 點擊預覽按鈕觸發事件
  $previewButton.click(function (event) {
    // 阻止表單默認提交行為
    event.preventDefault();

    // 獲取輸入的文字
    var inputText = $inputText.val();

    // 獲取選擇的字體
    var selectedFont = $fontRadios.filter(":checked").val();

    //限制中文字符不超過5個字，英文字符不超過10個字母
    if (/^[\u4e00-\u9fa5\w\s\d]{1,5}$|^[\w\s\d]{1,10}$/.test(inputText)) {
      // 更新輸入文字
      $previewText.text(inputText);
      $previewText.css("font-family", selectedFont);
    } else {
      alert(
        "請注意：中文字數不超過5個字、英文字母不超過10個字。（包含空白及數字組合）"
      );
    }
  });
});
