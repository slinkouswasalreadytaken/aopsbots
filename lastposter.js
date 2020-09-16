//Buggy, posts last poster. (Mark888)
cvar=document.getElementsByClassName("cmty-topic-mini-reply")[0];
cvar.click();
for (let i=0; i<1000; i++) {
setTimeout( function timer(){
cvar.click();
Readpost=documents.getElementsByClassName(“city-post-html”)[0].textContent;
if (Readpost == “!aopsbot”){
output=document.getElementsByClassName("cmty-post-textarea")[0];

lastposter=document.getElementsByClassName("cmty-topic-cell-last-poster")[0].textContent;

output.value=(lastposter);
b=document.getElementsByClassName("cmty-submit-button ")[0];
b.click();
} else {
output.value=‘Bot has not been called’; 
b=document.getElementsByClassName("cmty-submit-button ")[0];
b.click();
}
}, i*27000 );
}
