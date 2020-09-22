if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  window.location.href = "/m/";
} else {
  window.location.href = "/";
}