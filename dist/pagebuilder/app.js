!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(5),n(6),n(7),e.exports=n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=(n.n(o),n(3)),r=(n.n(a),n(4));n.n(r)},function(e,t){$(document).ready(function(){$(".gjs-pn-panels").append($("#sidebar-bottom-buttons"))})},function(e,t){$(document).ready(function(){function e(){var e=$("#save-page");e.blur(),e.hasClass("waiting")?(e.attr("disabled",!1),e.removeClass("waiting"),e.find(".spinner-border").addClass("d-none")):(e.attr("disabled",!0),e.addClass("waiting"),e.find(".spinner-border").removeClass("d-none"))}$("#save-page").click(function(){var t=window.editor;e();var n=t.getWrapper().find("[phpb-content-container]")[0];(function(e){var t="";e.get("components").forEach(function(e){e.attributes.isHtmlBlock?t+=e.toHTML():t+='[block id="'+e.attributes.blockId+'"]'})})(n),function(e){var t=[];e.get("components").forEach(function(e){e.attributes.isHtmlBlock?t.push(e.toJSON()):(console.log(JSON.stringify(e.toJSON())),t.push(e.toJSON()))})}(n),t.getCss(),t.getStyle()})})},function(e,t){!function(){function e(e){e.set({removable:!1,draggable:!1,droppable:!1,badgable:!1,stylable:!1,highlightable:!1,copyable:!1,resizable:!1,editable:!1,layerable:!1,selectable:!1,hoverable:!1})}window.editor.on("load",function(t){!function t(n){if("phpb-content-container"in n.attributes.attributes)return;e(n);n.get("components").each(function(e){return t(e)})}(t.getWrapper());var n=t.getWrapper().find("[phpb-content-container]")[0];n.set({droppable:!0,hoverable:!0,removable:!1,copyable:!1}),n.set("custom-name",window.translations["page-content"]),n.components(window.pageComponents)}),window.editor.on("component:selected",function(e){document.querySelector(".gjs-toolbar").classList.add("d-none"),(e.attributes.draggable||e.attributes.removable)&&document.querySelector(".gjs-toolbar").classList.remove("d-none")}),window.editor.on("block:drag:stop",function(t){t&&(!function t(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(n);var a="false"===n.attributes.attributes["is-html"];o=o&&!a;o&&function(e){var t=e.get("tagName");["h1","h2","h3","h4","h5","h6","h7","p","a","img","button","small","b","strong","i","em","ul","li","th","td"].includes(t)&&e.set({hoverable:!0,selectable:!0,editable:!0})}(n);!function(e){"phpb-editable"in e.attributes.attributes&&e.set({hoverable:!0,selectable:!0,editable:!0})}(n);n.get("components").each(function(e){return t(e,o)})}(t,t.attributes.attributes["is-html"]),t.set({removable:!0,draggable:!0,copyable:!0,layerable:!0,selectable:!0,hoverable:!0}))})}()},function(e,t){},function(e,t){},function(e,t){},function(e,t){}]);