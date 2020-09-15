//counts up - by Jomity
c=document.getElementsByClassName("cmty-topic-mini-reply")[0];
c.click();
for (let i=0; i<1000; i++) {
setTimeout( function timer(){
c.click();
a=document.getElementsByClassName("cmty-post-textarea")[0];
if (i===999) {a.value='Post bot - progress: end'}
else if ((i+1)===1) {a.value='Post bot - progress: start';}
else if ((i+1)%10===0) {a.value='Post bot - progress: checkpoint';}
else {a.value='Post bot - progress: '+(i+1)+' posts';}
b=document.getElementsByClassName("cmty-submit-button")[0];
b.click();
}, i*27000 );
}
