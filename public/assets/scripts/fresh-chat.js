function initFreshChat(){window.fcWidget.init({token:"f7b2428e-6a7f-4039-87e4-83711f00ac51",host:"https://wchat.in.freshchat.com"})}function initialize(t,i){var e;t.getElementById(i)?initFreshChat():((e=t.createElement("script")).id=i,e.async=!0,e.src="https://wchat.in.freshchat.com/js/widget.js",e.onload=initFreshChat,t.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);