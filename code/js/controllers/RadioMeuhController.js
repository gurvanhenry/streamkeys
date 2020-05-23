; (function () {
  "use strict";

  var BaseController = require("BaseController");

  new BaseController({
    siteName: "RadioMeuh",
    playPause: ".jp-play",
    playState: ".jp-state-playing",
    song: ".titre",
    artist: ".artist",
    // iframe: '#frameplayer',
    // did not work with iframe
    // open the iframe in your browser 😁 : https://www.radiomeuh.com/player/v1212/index.html
  });
})();
