"use strict";if("standalone"in window.navigator&&window.navigator.standalone){var noddy,remotes=!1;document.addEventListener("click",function(event){for(noddy=event.target;"A"!==noddy.nodeName&&"HTML"!==noddy.nodeName;)noddy=noddy.parentNode;"href"in noddy&&-1!==noddy.href.indexOf("http")&&(-1!==noddy.href.indexOf(document.location.host)||remotes)&&(event.preventDefault(),document.location.href=noddy.href)},!1)}