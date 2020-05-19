<<html>
<div class="hero">
  <iframe src="https://player.vimeo.com/video/420243553?background=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
  </iframe>
</div>
<div class="stretch">
  <h1>Some more content down here...</h1>
</div>
</html>

<<style>
.hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.hero iframe {
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.stretch {
  height: 2000px;
  background: tomato;
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  margin-top: 800px;
}
.stretch h1 {
  padding: 20px;
}
</style>

