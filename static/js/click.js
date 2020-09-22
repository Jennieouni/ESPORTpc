function hrefClicked(href = "",new_blank = false) {
  if(new_blank){
      window.open(href)
  }else {
      window.location.href = href;
  }
}
function AddFavorite() {
  const host = window.location.host
  try {
      window.external.addFavorite(host, "电竞YB E-Game");
  } catch (e) {
      try {
          window.sidebar.addPanel("电竞YB E-Game", host, "");
      } catch (e) {
          alert("抱歉，您所使用的浏览器无法完成此操作。\n\n请使用快捷键Ctrl+D进行添加！");
      }
  }
}
// export {hrefClicked, AddFavorite}