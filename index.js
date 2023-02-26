


// function CallApple(){
//     let appleElement = document.getElementById("apple");
//     appleElement.innerHTML = "Apple Clicked";
// }

// function CallMango(){
//     let mangoElement = document.getElementById("mango");
//     mangoElement.innerHTML = "Mango Clicked";
// }


// function CallWatermelon(){
//     let watermelonElement = document.getElementById("watermelon");
//     watermelonElement.innerHTML = "Watermelon Clicked";
// }


var isClicked = false;

function Call(id) {
    let element = document.getElementById(id);


    if (!isClicked) {
        element.innerHTML = element.innerHTML + " Clicked";
    }
    else {
        let arr = element.innerHTML.split(' ');
        element.innerHTML = arr[0];
    }

    isClicked = !isClicked;


}



let turned = false;
let imageElement = document.getElementById("bulbImage");

function Turn() {
    if (!turned) {
        imageElement.src = "images/on.png";
    }
    else {
        imageElement.src = "images/off.png";
    }
    turned = !turned;
}



function CallFunction() {
    alert(document.body.innerHTML);



}





let x = 10;
let y = 20;




function main() {
    // alert(x+y);


    // document.write(x + y);


    // const pi = 3.14;
    // pi = 5;
    // console.log(pi);



    // let name = "Ilkin";
    // console.log(name);





    // let name = "John";
    // let surname = "Johnlu";
    // let data = "              salam        ";
    // console.log(data.trim());
    // console.log(name + " " + surname);



    // let info = "6f6fdg Tural Eliyev";
    // alert(info.substring(0,6));



    // let result = "10+20";
    // alert(eval(result));

    // eval => eger string in icinde riyazi emeliyyat varsa onu icra edir


    // let number = 10; // type number
    // let name = "Salam"; // type string
    let data; // type any (yeni istenilen tip ola biler)



    // Operators


    // + - * / % ++ --
    // += -= *= /=


    // let number1 = 10;
    // let number2 = 20;

    // alert(number1*number2);



    // Comparasion

    // > < >= <= == !== ===


    // (==) -> sirf deyerleri yoxlayir

    // (===) -> hem tipleri hem de deyerleri beraberdirse

    // alert(100==100);
    // alert(100 == "100");



    // let name = prompt("Enter your name : ");
    // let age = prompt("Enter your age:");
    // alert("Welcome "+ name + " Your Age is " + age);



    // let num1 = Number(prompt("Enter firstnum : "));
    // let num2 = Number(prompt("Enter secondnum : "));


    // let element = document.getElementById("result");
    // element.innerHTML = num1+"+"+num2+"="+(num1+num2);



    // let data2 = confirm("Are you a programmer? ");
    // var headerElement = document.getElementById("result2");


    // if(data2){
    //     headerElement.innerHTML = "You are best Programmer";
    //     headerElement.style.color = "green";
    // }
    // else{
    //     headerElement.innerHTML = "You are oout of software";
    //     headerElement.style.color = "red";
    // }




}


let isDark = false;
function Turn2(){
    let myBody = document.body;
    let header = document.getElementById("header");
    let button = document.getElementById("mybutton");
    if(!isDark){
        myBody.classList.remove("light-body");
        myBody.classList.add("dark-body");
        header.classList.remove("light-header");
        header.classList.add("dark-header");
        button.innerHTML = "Light Mode";
    }
    else{
        myBody.classList.remove("dark-body");
        myBody.classList.add("light-body");
        header.classList.remove("dark-header");
        header.classList.add("light-header");
        button.innerHTML = "Night Mode";
    }



    isDark = !isDark;





}



main();

