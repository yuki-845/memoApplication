let x = 0;
const today = new Date();
const data = new Date();
const da = new Date();
let day = da.getDate();

let months = data.getMonth();
months += 1;
let tablesElements = document.getElementsByTagName("td");
let years = data.getFullYear();
let showDate = new Date(today.getFullYear(), today.getMonth(), 1);
window.onload = function(){
    document.querySelector('#header').innerHTML = years + "年 " + (months) + "月";
    calendar();
}
function calendar() {
    const date = new Date();
    
    let tableElements = [].slice.call(tablesElements);
    let year = date.getFullYear();
    let month = date.getMonth();
    let initOfday = new Date(year, month + x, 1).getDay();
    var endDate = new Date(year, month + 1 + x, 0).getDate();
    let count = 0;
    bool = fire = true;
    for(let i = 0; i < tablesElements.length; i++) {
        if(i < initOfday) {
            tableElements[i].innerHTML = "";
        }else if(count !== endDate){
            count++;
            tableElements[i].innerHTML = count;
            if(i % 7 === 0) {
                tableElements[i].style.color = 'red';
            }else if(i % 7 == 6) {
                tableElements[i].style.color = 'blue';
            }
            if(years === year && month + 1 === months && count === day) {
              tableElements[i].style.backgroundColor = "yellow";
              fire = false;
            }
            
        }else {
            tableElements[i].innerHTML = "";
        }
    }
    if(fire) {
      for(let i = 0; i < tableElements.length; i++) {
        tableElements[i].style.backgroundColor = "white";
      }
    }
}
function getCELL(){
      for(var i=0 ;i<tablesElements.length; i++){ //tdの数だけループ
       tablesElements[i].onclick=function(){Mclk(this);}
          }
         }
   getCELL();
   function Mclk(Cell) {
    if(Cell === "") {
        console.log("バカ");
    }else {
        console.log("アホ");
    }
       }
         // try ～ catch 例外処理、エラー処理
         // イベントリスナーaddEventListener,attachEventメソッド
   try{
    window.addEventListener("load",getCELL,false);
        }catch(e){
      window.attachEvent("onload",getCELL);
     }
function next() {
    months += 1;
    if(months === 13) {
        months = 1;
        years += 1;
    }
    document.querySelector('#header').innerHTML = years + "年 " + (months) + "月";
    x += 1;
    calendar();
}
function front() {
    months -= 1;
    if(months === 0) {
        months = 12;
        years -= 1;
    }
    document.querySelector('#header').innerHTML = years + "年 " + (months) + "月";
    x -= 1;
    calendar();
}
