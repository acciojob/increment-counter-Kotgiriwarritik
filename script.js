//your JS code here. If required.
const myButton = document.getElementById("incrementBtn");
const myPara =  document.getElementById("counter");

let normalCount = 0;

function incrementNum() {
    normalCount++;
	myPara.innerText = normalCount;
}
myButton.addEventListener("click",()=>{
	incrementNum();
});
