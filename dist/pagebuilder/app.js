!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([,,,,,,function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i=(n.n(o),n(9)),a=(n.n(i),n(10)),r=(n.n(a),n(11)),s=(n.n(r),n(12)),l=(n.n(s),n(13));n.n(l)},function(t,e){$(document).ready(function(){function t(){$(window).width()<1e3&&($("#gjs").addClass("sidebar-collapsed"),e())}function e(){window.editor.trigger("change:canvasOffset canvasScroll")}$(".gjs-editor").append($("#toggle-sidebar")),$(".gjs-pn-panels").prepend($("#sidebar-header")),$(".gjs-pn-panels").append($("#sidebar-bottom-buttons")),$("#toggle-sidebar").click(function(){$("#gjs").toggleClass("sidebar-collapsed"),e()}),t(),window.editor.on("run:open-sm",function(t){$(".gjs-trt-traits").parent().parent().css("display","none"),$(".gjs-sm-sectors").parent().parent().css("display","block"),$("#gjs-sm-advanced .gjs-sm-properties").append($(".gjs-clm-tags"))}),window.editor.on("run:open-tm",function(t){$(".gjs-sm-sectors").parent().parent().css("display","none"),$(".gjs-trt-traits").parent().parent().css("display","block")}),window.editor.on("block:drag:start",function(e){t()});var n=!1;$(document).keydown(function(t){8===t.which&&(n=!0)}).keyup(function(t){8===t.which&&(n=!1)}),$(window).on("beforeunload",function(t){n&&t.preventDefault()})}),window.addEventListener("message",function(t){"page-loaded"===t.data?setTimeout(function(){$("#phpb-loading").addClass("loaded"),$(".gjs-blocks-cs").prepend($("#block-search")),window.isLoaded=!0},500):"touch-start"===t.data&&window.touchStart()},!1)},function(t,e){$(document).on("input","#block-search input",function(){var t=$(this).val().toLowerCase();$(".gjs-blocks-cs .gjs-block").each(function(){$(this).text().toLowerCase().includes(t)?$(this).removeClass("d-none"):$(this).addClass("d-none")})})},function(t,e){$(document).ready(function(){var t="";function e(t){var e=window.pageBlocks[t],n=window.pageBlocks[window.currentLanguage];if(void 0===e)e=n;else{for(var o in n)void 0===e[o]&&(e[o]=n[o]);for(var i in e)void 0===n[i]&&delete e[i]}window.pageBlocks[t]=e}function n(t){setTimeout(function(){var e=i(window.editor.getWrapper().find("[phpb-content-container]")[0]);window.pageData={html:e.html,components:e.components,css:e.css,style:e.style},window.pageBlocks[window.currentLanguage]=e.blocks,window.pageComponents=e.components,t&&t()},200)}function o(){l(),n(function(){window.languages.forEach(function(t){t!==window.currentLanguage&&e(t)});var t,n,o,i=window.pageData;i.style=(t=i.css,n=i.style,o=[],n.forEach(function(e){var n=e.attributes.selectors.models[0].id;t.includes(n)&&o.push(e)}),o),i.blocks=window.pageBlocks,$.ajax({type:"POST",url:$("#save-page").data("url"),data:{data:JSON.stringify(i)},success:function(){l(),window.toastr.success(window.translations["toastr-changes-saved"])},error:function(){l(),window.toastr.error(window.translations["toastr-saving-failed"])}})})}function i(e){var n=window.editor.DomComponents.componentsById;window.editor.DomComponents.componentsById=[],e=window.cloneComponent(e),t=window.editor.getCss();var o=function e(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];var r={current_block:{settings:{},blocks:{},html:"",is_html:!1},blocks:{}};var l=o;var c=i;void 0!==n.attributes["block-id"]&&("false"===n.attributes["is-html"]?(l=!0,c=!1):o&&"true"===n.attributes["is-html"]&&(c=!0));n.get("components").forEach(function(t){var n=e(t,l,c);for(var o in n.current_block.blocks)r.current_block.blocks[o]=n.current_block.blocks[o];for(var i in n.blocks)r.blocks[i]=n.blocks[i]});if(void 0!==n.attributes["block-id"])if(o&&"true"===n.attributes["is-html"]&&!1===i)r.current_block.blocks[n.attributes["block-id"]]={settings:{},blocks:{},html:window.html_beautify(a(n)),is_html:!0};else if("false"===n.attributes["is-html"]){var d={};n.get("traits").each(function(t){d[t.get("name")]=t.getTargetValue()}),r.current_block.settings.attributes=d,void 0!==n.attributes["style-identifier"]&&t.includes(n.attributes["style-identifier"])&&(r.current_block.settings.attributes["style-identifier"]=n.attributes["style-identifier"]);var u=n.attributes["block-id"];if(n.attributes["block-id"].startsWith("ID")||(u=s()),n.replaceWith({tagName:"phpb-block",attributes:{slug:n.attributes["block-slug"],id:u}}),o){var g={settings:{},blocks:{},html:"",is_html:!1};g.blocks[n.attributes["block-id"]]=r.current_block,r.current_block=g}else r.blocks[u]=r.current_block,r.current_block={settings:{},blocks:{},html:"",is_html:!1}}else if("true"===n.attributes["is-html"]&&!1===o){void 0!==n.attributes["style-identifier"]&&t.includes(n.attributes["style-identifier"])&&(r.current_block.settings.attributes={"style-identifier":n.attributes["style-identifier"]});var b=n.attributes["block-id"];n.attributes["block-id"].startsWith("ID")||(b=s()),n.replaceWith({tagName:"phpb-block",attributes:{slug:n.attributes["block-slug"],id:b}}),r.blocks[b]={settings:r.current_block.settings,blocks:{},html:window.html_beautify(a(n)),is_html:!0},r.current_block={settings:{},blocks:{},html:"",is_html:!1}}return r}(e).blocks,i=window.html_beautify(function(t){var e="";t.get("components").forEach(function(t){return e+=t.toHTML()});var n=$("<container>"+e+"</container>");return n.find("phpb-block").each(function(){$(this).replaceWith('[block slug="'+$(this).attr("slug")+'" id="'+$(this).attr("id")+'"]')}),n.html()}(e)),r=window.editor.getCss(),l=window.editor.getStyle(),c=JSON.parse(JSON.stringify(e.get("components")));return window.editor.DomComponents.componentsById=n,{html:i,css:r,components:c,blocks:o,style:l}}function a(t){var e=$("<container>"+t.toHTML()+"</container>");return e.find("phpb-block").each(function(){$(this).replaceWith('[block slug="'+$(this).attr("slug")+'" id="'+$(this).attr("id")+'"]')}),e.html()}window.pageData={},$("#save-page").click(function(){o()}),$(document).bind("keydown",function(t){if(t.ctrlKey&&83===t.which)return window.editor.store(),o(),t.preventDefault(),!1}),window.switchLanguage=function(t,o){window.setWaiting(!0),n(function(){e(t);var n,i,a,r=window.pageData;r.blocks=(n={},i=t,a=window.pageBlocks[t],i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n),$.ajax({type:"POST",url:window.renderLanguageVariantUrl,data:{data:JSON.stringify(r),language:t},success:function(e){e=JSON.parse(e),window.pageBlocks[t]=e.dynamicBlocks?e.dynamicBlocks:{},o()},error:function(){o(),window.toastr.error(window.translations["toastr-switching-language-failed"])}})})},window.getComponentDataInStorageFormat=function(t){var e=window.cloneComponent(t.parent());return e.get("components").reset(),e.append(t),i(e)};var r=0;function s(){return"ID"+(Date.now().toString(36)+Math.random().toString(36).substr(2,5)+r++).toUpperCase()}function l(){var t=$("#save-page");t.blur(),t.hasClass("waiting")?(t.attr("disabled",!1),t.removeClass("waiting"),t.find(".spinner-border").addClass("d-none")):(t.attr("disabled",!0),t.addClass("waiting"),t.find(".spinner-border").removeClass("d-none"))}window.setWaiting=function(t){var e=window.editor.DomComponents.getWrapper();t?e.addClass("gjs-waiting"):e.removeClass("gjs-waiting")}})},function(t,e){!function(){function t(){for(var t in window.themeBlocks){var e=window.themeBlocks[t],n=$("<container>").append(e.content);n.find("[phpb-blocks-container]").each(function(){""!==$(this).html()&&""===$(this).html().trim()&&$(this).html("")}),window.themeBlocks[t].content=n.html(),e.content=n.html(),editor.BlockManager.add(t,e)}}function e(t){var n=t;if("phpb-block"===t.get("tagName")){var o=t.attributes.attributes.id;void 0!==window.pageBlocks[window.currentLanguage][o]&&void 0!==window.pageBlocks[window.currentLanguage][o].html&&(n=t.replaceWith(window.pageBlocks[window.currentLanguage][o].html),window.pageBlocks[window.currentLanguage][o].html="")}n.get("components").each(function(t){return e(t)})}function n(t){var e=!1,n=t.getEl();if(n&&n.style){var o=window.getComputedStyle(n);["background","background-image","background-color"].forEach(function(t){var n=o.getPropertyValue(t);void 0===n||""===n||n.includes("none")||n.includes("rgba(0, 0, 0, 0)")||(e=!0)})}return e}function o(t){return t.attributes.traits.length>0}function i(t){if("phpb-block"===t.attributes.tagName){var e=t.parent(),n=cloneComponent(t),o=void 0;"false"===t.attributes.attributes["is-html"]?e.components().each(function(e){e.cid===t.cid&&((o=t.replaceWith({tagName:"div"})).attributes["is-style-wrapper"]=!0,n.components().each(function(t){o.append(cloneComponent(t))}))}):e.components().each(function(e){e.cid===t.cid&&(1===n.components().length?o=t.replaceWith(n.components().models[0].clone()):((o=t.replaceWith({tagName:"div"})).attributes["is-style-wrapper"]=!0,n.components().each(function(t){o.append(cloneComponent(t))})))}),t.remove(),r(n,o,!0,!1),function(t){if(void 0===window.blockSettings[t.attributes["block-slug"]])return;t.attributes.settings={};var e=function(t){var e=[],n=t;for(;n.parent()&&void 0===n.parent().attributes.attributes["phpb-blocks-container"]&&"true"!==n.parent().attributes["is-html"]&&void 0===n.parent().attributes.attributes["phpb-content-container"];)void 0!==n.attributes["block-id"]&&e.push(n.attributes["block-id"]),n=n.parent();var o=n.attributes["block-id"],i=window.pageBlocks[window.currentLanguage][o];e.reverse().forEach(function(t){i=void 0===i||void 0===i.blocks||void 0===i.blocks[t]?{}:i.blocks[t]});var a={};void 0!==i&&void 0!==i.settings&&void 0!==i.settings.attributes&&(a=i.settings.attributes);return a}(t);void 0!==e["style-identifier"]&&t.addClass(e["style-identifier"]);t.attributes["is-updating"]=!0,window.blockSettings[t.attributes["block-slug"]].forEach(function(n){var o=t.addTrait(n);void 0!==e[n.name]?o.setTargetValue(e[n.name]):void 0!==n["default-value"]&&o.setTargetValue(n["default-value"])}),t.attributes["is-updating"]=!1}(o),i(o)}else t.components().each(function(t){i(t)})}window.editor.on("load",function(e){t(),window.languages.forEach(function(t){null===window.pageBlocks[t]&&(window.pageBlocks[t]={})}),activateLanguage(window.currentLanguage)}),$("#language-selector select").on("change",function(){var t=$(this).find("option:selected").val();window.switchLanguage(t,function(){activateLanguage(t)})}),window.activateLanguage=function(t){window.currentLanguage=t,window.editor.select(),window.editor.DomComponents.clear(),window.editor.DomComponents.componentsById=[],window.editor.UndoManager.clear(),window.editor.setComponents(window.initialComponents),function t(e){if("phpb-content-container"in e.attributes.attributes)return;c(e);e.get("components").each(function(e){return t(e)})}(editor.getWrapper());var n=editor.getWrapper().find("[phpb-content-container]")[0];n.set("custom-name",window.translations["page-content"]),n.components(window.pageComponents),e(n),i(n),setTimeout(function(){s(n),window.setWaiting(!1)},500)},window.editor.on("component:selected",function(t){o(t)?$(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(2)").click():""===t.get("type")&&n(t)&&($(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(3)").click(),$("#gjs-sm-position").hasClass("gjs-sm-open")&&$("#gjs-sm-position").find(".gjs-sm-title").click(),$("#gjs-sm-background").hasClass("gjs-sm-open")||$("#gjs-sm-background").find(".gjs-sm-title").click()),o(t)||setTimeout(function(){$(".gjs-trt-traits").html('<p class="no-settings">'+window.translations["trait-manager"]["no-settings"]+"</p>")},0),setTimeout(function(){t.attributes.removable||$(".gjs-toolbar .fa-trash-o.gjs-toolbar-item").hide(),t.attributes.copyable||$(".gjs-toolbar .fa-clone.gjs-toolbar-item").hide(),t.attributes.draggable||$(".gjs-toolbar .fa-arrows.gjs-toolbar-item").hide()},0)}),window.editor.on("component:clone",function(t){a||(void 0!==t.attributes["style-identifier"]&&""!==t.attributes["style-identifier"]&&(t.removeClass(t.attributes["style-identifier"]),delete t.attributes["style-identifier"],l(t)),t.attributes["block-id"]=t.attributes["block-slug"])}),window.editor.on("block:drag:stop",function(t){if(t){var e=t.parent();i(t),s(e)}}),window.editor.on("component:update",function(t){if(!0===window.isLoaded&&!t.attributes["is-updating"]&&void 0!==t.changed.attributes&&0!==$(".gjs-frame").contents().find("#"+t.ccid).length){for(var n=[],o=t;o.parent()&&void 0===o.parent().attributes.attributes["phpb-blocks-container"]&&"true"!==o.parent().attributes["is-html"]&&void 0===o.parent().attributes.attributes["phpb-content-container"];)void 0!==o.attributes["block-id"]&&n.push(o.attributes["block-id"]),o=o.parent();(t=o).attributes["is-updating"]=!0,$(".gjs-frame").contents().find("#"+t.ccid).addClass("gjs-freezed");var a=window.editor.getWrapper().find("#"+t.ccid)[0].parent(),r=window.getComponentDataInStorageFormat(t);$.ajax({type:"POST",url:window.renderBlockUrl,data:{data:JSON.stringify(r),language:window.currentLanguage},success:function(o){var l=$(o).attr("block-id");window.pageBlocks[window.currentLanguage][l]=void 0===r.blocks[l]?{}:r.blocks[l],t.replaceWith(o),e(a),i(a),s(a,!1,!1),n.push(l);var c=function t(e,n){if(0===n.length)return e;var o=null;e.components().each(function(e){if(e.attributes["block-id"]===n[0])return o=t(e,n.slice(1)),!1});e.components().each(function(e){var i=t(e,n);if(null!==i)return o=i,!1});return o}(a,n.reverse());window.editor.select(c)},error:function(){$(".gjs-frame").contents().find("#"+t.ccid).removeClass("gjs-freezed"),t.attributes["is-updating"]=!1,window.toastr.error(window.translations["toastr-component-update-failed"])}})}});var a=!1;function r(t,e,n,o){var i=t.attributes.attributes;for(var a in i)o&&(e.attributes.attributes[a]=i[a]),n&&(e.attributes[a]=i[a])}function s(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(c(t),void 0!==t.attributes.attributes["phpb-content-container"])t.set({droppable:!0,hoverable:!0});else if(void 0!==t.attributes["block-slug"]){var i={selectable:!0,hoverable:!0};e||(i={removable:!0,draggable:!0,copyable:!0,selectable:!0,hoverable:!0,stylable:!0},l(t)),"true"===t.attributes["is-html"]?(e=!1,o=!0):(e=!0,o=!1,t.getEl().setAttribute("data-cursor","default")),t.set(i)}o&&(!function(t){var e=t.get("tagName"),o={};"phpb-blocks-container"in t.attributes.attributes&&(o.hoverable=!0,o.selectable=!0,o.droppable=!0);(["h1","h2","h3","h4","h5","h6","h7","img","button","p","small","b","strong","i","em","ul","li","th","td"].includes(e)||"phpb-editable"in t.attributes.attributes)&&(o.editable=!0,t.attributes["made-text-editable"]="true");n(t)&&(o.hoverable=!0,o.selectable=!0,o.stylable=!0);"a"===e&&(o.hoverable=!0,o.selectable=!0,o.stylable=!0);$.isEmptyObject(o)||(t.set(o),void 0!==o.stylable&&o.stylable&&l(t))}(t),"true"===t.attributes["made-text-editable"]&&(t.attributes.attributes["data-raw-content"]="true",o=!1)),t.get("components").each(function(t){return s(t,e,o)})}function l(t){var e=!1;t.getClasses().forEach(function(t){t.startsWith("ID")&&16===t.length&&(e=t)}),void 0===t.attributes["style-identifier"]&&(t.attributes["style-identifier"]=e||"ID"+(Date.now().toString(36)+Math.random().toString(36).substr(2,5)+d++).toUpperCase()),t.addClass(t.attributes["style-identifier"])}function c(t){t.set({removable:!1,draggable:!1,droppable:!1,badgable:!1,stylable:!1,highlightable:!1,copyable:!1,resizable:!1,editable:!1,layerable:!1,selectable:!1,hoverable:!1})}window.cloneComponent=function(t){a=!0;var e=t.clone();return function t(e,n){r(e,n,!1,!0);for(var o=0;o<e.components().length;o++){var i=e.components().models[o],a=n.components().models[o];t(i,a)}}(t,e),a=!1,e};var d=0}()},function(t,e){$(document).ready(function(){window.CKEDITOR.on("dialogDefinition",function(t){var e=t.data.name,n=t.data.definition;if("link"===e){var o=n.getContents("info");n.onLoad=function(){var t=CKEDITOR.dialog.getCurrent();t.getContentElement("info","linkType").getElement().hide(),t.getContentElement("info","protocol").getElement().hide(),t.getContentElement("info","url").getElement().hide()},o.add({type:"select",id:"linktype-selector",label:"Linktype",default:"",items:[[window.translations.page,"page"],["URL","url"]],onChange:function(t){var e=CKEDITOR.dialog.getCurrent();"page"===t.data.value?(e.getContentElement("info","page-selector").getElement().show(),e.getContentElement("info","url-field").getElement().hide()):(e.getContentElement("info","page-selector").getElement().hide(),e.getContentElement("info","url-field").getElement().show(),e.getContentElement("info","url-field").setValue(""))},setup:function(t){void 0===t.type?this.setValue("page"):"url"===t.type&&t.url.url.startsWith("[page id=")?this.setValue("page"):this.setValue(t.type)}}),o.add({type:"select",id:"page-selector",label:window.translations.page,default:"",items:window.pages,onChange:function(){var t=CKEDITOR.dialog.getCurrent(),e="[page id="+this.getValue()+"]";t.setValueOf("info","url",e),t.setValueOf("info","protocol","")},setup:function(t){this.allowOnChange=!1;var e="";t.url&&(e=t.url.url.substr(9,t.url.url.length-10)),this.setValue(e),this.allowOnChange=!0}}),o.add({type:"text",id:"url-field",label:"URL",default:"",onChange:function(){var t=CKEDITOR.dialog.getCurrent(),e=this.getValue();t.setValueOf("info","url",e)},setup:function(t){this.allowOnChange=!1;var e="";t.url&&(e=t.url.url),this.setValue(e),this.allowOnChange=!0}})}})})},function(t,e){$(document).ready(function(){window.touchStart=function(){$("#gjs").addClass("sidebar-collapsed")}})}]);