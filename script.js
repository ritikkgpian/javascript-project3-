let TEXT=window.document.getElementById("TEXT");
let AMOUNT=window.document.getElementById("AMOUNT");
let button1=window.document.getElementById("button1");
let button2=window.document.getElementById("button2");
let first=window.document.getElementById("first");
// let string="";
function creating_savings(){
 let rectangle1=window.document.createElement("div");
    rectangle1.style.height="30px";
    rectangle1.style.backgroundColor="white";
    rectangle1.style.display="flex";
    rectangle1.style.marginBottom="5px";
    let content=window.document.createElement("div");
    content.style.width="90%";
    content.textContent=TEXT.value;
    content.style.color="black";
    content.style.fontFamily="sans-serif"
    content.style.fontSize="20px";
    content.style.fontWeight="bold";
   content.style.display="flex";
    content.style.justifyContent="space-between";

    let final=window.document.createElement('div');
    final.textContent=`+ ₹ ${AMOUNT.value} `;
    final.style.color="black";
    final.style.fontSize="20px";
    final.style.fontWeight="bold";

    content.append(final);

    rectangle1.append(content);
    let square1=window.document.createElement("div");
    square1.style.width="10%"
    square1.style.height="30px";
    square1.style.backgroundColor="green";
    square1.textContent="C";
    square1.style.color="white";
   
    rectangle1.append(square1);
    return rectangle1;
}
function creating_expenses(){
     let rectangle1=window.document.createElement("div");
    rectangle1.style.height="30px";
    rectangle1.style.backgroundColor="white";
    rectangle1.style.display="flex";
     rectangle1.style.marginBottom="5px";
    let content=window.document.createElement("div");
    content.style.width="90%";
    content.textContent=TEXT.value;
    content.style.color="black";
    content.style.fontFamily="sans-serif"
    content.style.fontSize="20px";
    content.style.fontWeight="bold";
    content.style.display="flex";
    content.style.justifyContent="space-between";

    let final=window.document.createElement('div');
    final.textContent=`- ₹ ${AMOUNT.value} `;
    final.style.color="black";
    final.style.fontSize="20px";
    final.style.fontWeight="bold";

    content.append(final);


    rectangle1.append(content);
    let square1=window.document.createElement("div");
    square1.style.width="10%"
    square1.style.height="30px";
    square1.style.backgroundColor="red";
    square1.textContent="D";
    square1.style.color="white";
    let space=window.document.createElement("br");
    rectangle1.append(space);
    rectangle1.append(square1);
    return rectangle1;
}
button1.addEventListener("click",(e)=>{
    e.preventDefault();
    e.target.textContent=`Rs.${AMOUNT.value}`;
    first.value=parseFloat(first.value)+parseFloat(AMOUNT.value);
    let written=window.document.getElementById("written");
    written.append(creating_savings());
})
button2.addEventListener("click",(e)=>{
    e.preventDefault();
    e.target.textContent=`Rs.${AMOUNT.value}`;
    first.value=parseFloat(first.value)-parseFloat(AMOUNT.value);
    let written=window.document.getElementById("written");
    written.append(creating_expenses());
})
    