!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}({2:function(e,t,n){e.exports=n("uOOV")},uOOV:function(e,t){$(document).ready(function(){$(".pagination").hide(),$(".container.timeline-container").removeClass("d-none");var e=document.querySelector(".timeline-feed");pixelfed.fetchLikes(),$("video").on("play",function(){activated=this,$("video").each(function(){this!=activated&&this.pause()})}),new InfiniteScroll(e,{path:".pagination__next",append:".timeline-feed",status:".page-load-status",history:!1}).on("append",function(e,t,n){pixelfed.hydrateLikes(),$(".status-card > .card-footer").each(function(){var e=$(this);e.hasClass("d-none")||e.find('input[name="comment"]').val()||$(this).addClass("d-none")}),$("video").on("play",function(){activated=this,$("video").each(function(){this!=activated&&this.pause()})})})}),$(document).on("DOMContentLoaded",function(){var e=!1,t=function(){if(!1===e){e=!0;var t=[].slice.call(document.querySelectorAll("img.lazy"));t.forEach(function(e){e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display&&(e.src=e.dataset.src,e.srcset=e.dataset.srcset,e.classList.remove("lazy"),t=t.filter(function(t){return t!==e}))}),e=!1}};document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationchange",t)})}});