var a={send:function(t){return new Promise(function(n){t.nocache=Math.floor(1e6*Math.random()+1),t.Action="Send";var e=JSON.stringify(t);a.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",e,function(o){n(o)})})},ajaxPost:function(t,n,e){var o=a.createCORSRequest("POST",t);o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){var s=o.responseText;e!=null&&e(s)},o.send(n)},ajax:function(t,n){var e=a.createCORSRequest("GET",t);e.onload=function(){var o=e.responseText;n!=null&&n(o)},e.send()},createCORSRequest:function(t,n){var e=new XMLHttpRequest;return"withCredentials"in e?e.open(t,n,!0):typeof XMLHttpRequest<"u"?(e=new XMLHttpRequest).open(t,n):e=null,e}};export{a as E};