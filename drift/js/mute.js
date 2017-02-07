 var video = document.getElementById('bgvid');
 document.getElementById('vol').addEventListener('click', function(e) {
     e = e || window.event;
     video.muted = !video.muted;
     e.preventDefault();
 }, false);
