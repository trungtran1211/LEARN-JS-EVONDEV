

// function sosanh (a=0 , b=0) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         console.log("Vui lòng nhập vào số");
//         return;
//     }
//     return Math.max(a, b);
// }
// console.log(sosanh(5, 8));


// function rename (name = " ") {
//     if (name.length === 0 ) return 0;

//     let caplate = name.toLowerCase().charAt(0).toUpperCase();
//     let lastname = name.slice(1);
//     return (caplate + lastname);
// }
// console.log(rename("trung"))

// function rename (name = " ") {
//     if (name.length === 0 ) return 0;
//     let firtname = name.charAt(0).toUpperCase();
//     let upper = name.slice(1).toLowerCase();
//     return (firtname + upper)
// }
// console.log(rename("TRUNG"))
// console.log(new Date(1620924541981))
getyear = (year = 2000) => {
    const now = new Date();
    const getYear = now.getFullYear()
    return getYear - year;
}

const kq = getyear(1999);
// console.log(`Năm sinh của bạn là: ${kq}`)

//2

countdown = (minute) => {
    second = minute * 60;
    second1 = 0;
    const time = setInterval(() => {
        second1 += 1;
        console.log(second1)
        if (second1 === 10) {
            clearInterval((time))
            console.log("done")
        }
    },1000)
}

// countdown(1);

Time = (timer) => {
    const dates = timer.getTime();
    console.log(dates)
    const today = new Date().getTime();
    console.log(today);
    const thoigianconlai = (today - dates) / 1000;
    
    const year = Math.floor(thoigianconlai / 31536000);
    const month = Math.floor(thoigianconlai / 2678400);
    const week = Math.floor(thoigianconlai / 604800);
    const day = Math.floor(thoigianconlai / 86400);
    const hour = Math.floor(thoigianconlai / 3600);
    const minute = Math.floor(thoigianconlai / 60);
    if (year > 1) {
        console.log(`Hoạt động ${year} năm trước`);
        return;
    }
    if (month > 1) {
        console.log(`Hoạt động ${month} tháng trước`);
        return;
    }
    if (week >= 1) {
        console.log(`Hoạt động ${week} tuần trước`);
        return;
    }
    if (day > 1) {
        console.log(`Hoạt động ${day} ngày trước`);
        return;
    }
    if (hour > 1) {
        console.log(`Hoạt động ${hour} giờ trước`);
        return;
    }
    if (minute) {
        console.log(`Hoạt động ${minute} phút trước`);
        return;
    }
    if (thoigianconlai > 1) {
        console.log("Hoạt động " + `${Math.floor(thoigianconlai)} giây trước`);
        return;
    }
    console.log(thoigianconlai)
    return ;
}
// Time (new Date("Thu Mar 24 2023 16:17:00 GMT+0700 (Indochina Time)"))

//Đảo ngược một chuỗi 
const reverseString = (str) => {
    if(!str) return null;
    const newString = str.split(" ").reverse()
    console.log (newString);
    const reverseNew = newString.join(" ").toUpperCase();
    return reverseNew;
}
//console.log(reverseString("toi la trung"));

//Đảo ngược một chuỗi bao gồm cái ký tự. Ví dụ "i love" -> " evol i"
const reverseString2 = (str) => {
    if(!str) return null;
    const newString2 = str.split(" ").map((item) => item.split("").reverse().join(""));
    const test = newString2.reverse().join(" ");
    return test;
}
//console.log(reverseString2("toi la trung"));

//In hoa chữ cái đầu trong chuỗi Ví dụ: "i love you" -> "I Love You"

function rename (name = " ") {
    if (name.length === 0 ) return 0;
    let firtname = name.charAt(0).toUpperCase();
    let upper = name.slice(1).toLowerCase();
    return (firtname + upper)
}

const capitalizeStr = (str) =>{
    if(!str) return null;
    const result = str.split(" ").map((item) => rename(item)).join(" ");
    return result;
}
//console.log(capitalizeStr("i love you"));

// const arrCopy = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arrCopy);
// const arr1 = arrCopy.slice();
// console.log(arr1)
// const arr2 = [...arrCopy];
// console.log(arr2)

// const noimang = [...arr1, ...arr2];
// console.log(noimang)

let numberArr = [1, 2, 3, 4, 5, 6, 7];

let numberArrNew = [];

for (let i=0 ; i<numberArr.length; i++) {
    numberArrNew.push(numberArr[i]);
}
// console.log(numberArrNew);

let str = "i love you";
let strNew = "";
for (let i=str.length-1; i>=0; i--) {
    strNew = strNew + str[i];
}
// console.log(strNew)

//cho một mảng trả về giá trị True
let arr3 = ["trung", 3 , undefined, null, [1, 2, 3, 4, 5, ["trung"]]]
const arr4 = arr3.filter(item => Boolean(item));
//console.log(arr4.flat(2)) 


//đổi ngược vị trí của number
const reverseNumber = (number) => {
    const numberToString = number.toString().split("").reverse().join("");
    return parseInt(numberToString)*Math.sign(number);
}
//console.log(reverseNumber(-123456));

const fizzBuzz = (number) => {
    for (i = 1; i <= number; i++) {
        console.log(i)
        if ( i % 2 === 0 &&  i % 3 === 0) {
            console.log("FizzBuzz");
        }else if (i % 3 === 0){
            console.log("Buzz");
        }else if (i % 2 === 0){
            console.log("Frizz");
        }
    }
    return;
}
// fizzBuzz(12)

//đếm số lượng chữ 
const checkString = (string) => {
    let count = 0;
    const text = "ueoai";
    for (c of string) {
        if(text.includes(c)) {
            count = count + 1;
        }
    }
    return count;
}
// console.log(checkString("trung"));

const fillerStrr = (list) => {
    let strNew = [];
    for (let i = 0; i < list.length; i++) {
        if(!strNew.includes(list[i])){
            strNew.push(list[i]);
        }
    }
    return strNew;
}

// console.log(fillerStrr([1,2,3,2,5,4,2,1,2,5,1])) ;

const div = document.createElement("div");
const body = document.body;
const test = document.querySelector(".test");
body.appendChild(div);