count=0;
function Increment() {
count++;
document.getElementById('countvalue').innerHTML=`counter value:- ${count}`;
}

function Decrement() {
count--;
document.getElementById('countvalue').innerHTML=`counter value:- ${count}`;
}
function Reset() {
count = 0;
document.getElementById('countvalue').innerHTML=`counter value:- ${count}`;
}
