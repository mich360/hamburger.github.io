// メニューの開閉用のスクリプト
document.querySelector(".btn_test").addEventListener("click", function() {
   const checkbox = document.getElementById("menu-toggle");
   checkbox.checked = !checkbox.checked;  // チェックボックスの状態を反転
});
