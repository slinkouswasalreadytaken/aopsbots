//assigns the last post's text to a variable, and then prints it. By Linkx (me)
cvar=document.getElementsByClassName("cmty-topic-mini-reply")[0];
cvar.click();
for (let i=0; i<1000; i++) {
setTimeout( function timer(){
cvar.click();
output=document.getElementsByClassName("cmty-post-textarea")[0];
 
var lastpost = 0;
while (document.getElementsByClassName("cmty-post-quote aops-font")[lastpost] != undefined) {
  lastpost++;
}
//quotebutton=document.getElementsByClassName("cmty-post-quote aops-font")[lastpost-1];
//quotebutton.click();

lasttext=document.getElementsByClassName("cmty-post-html")[lastpost-1].textContent

output.value = (lasttext)
 
b=document.getElementsByClassName("cmty-submit-button ")[0];
b.click();
}, i*27000 );
}
