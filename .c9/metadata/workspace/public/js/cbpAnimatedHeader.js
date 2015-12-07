{"filter":false,"title":"cbpAnimatedHeader.js","tooltip":"/public/js/cbpAnimatedHeader.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":43,"column":5},"action":"insert","lines":["/**"," * cbpAnimatedHeader.js v1.0.0"," * http://www.codrops.com"," *"," * Licensed under the MIT license."," * http://www.opensource.org/licenses/mit-license.php"," * "," * Copyright 2013, Codrops"," * http://www.codrops.com"," */","var cbpAnimatedHeader = (function() {","","\tvar docElem = document.documentElement,","\t\theader = document.querySelector( '.navbar-fixed-top' ),","\t\tdidScroll = false,","\t\tchangeHeaderOn = 300;","","\tfunction init() {","\t\twindow.addEventListener( 'scroll', function( event ) {","\t\t\tif( !didScroll ) {","\t\t\t\tdidScroll = true;","\t\t\t\tsetTimeout( scrollPage, 250 );","\t\t\t}","\t\t}, false );","\t}","","\tfunction scrollPage() {","\t\tvar sy = scrollY();","\t\tif ( sy >= changeHeaderOn ) {","\t\t\tclassie.add( header, 'navbar-shrink' );","\t\t}","\t\telse {","\t\t\tclassie.remove( header, 'navbar-shrink' );","\t\t}","\t\tdidScroll = false;","\t}","","\tfunction scrollY() {","\t\treturn window.pageYOffset || docElem.scrollTop;","\t}","","\tinit();","","})();"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":26,"column":23},"end":{"row":26,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":53,"mode":"ace/mode/javascript"}},"timestamp":1449337908348,"hash":"de239a1f4138cb119bffc4b681bd3ab64ea9085f"}