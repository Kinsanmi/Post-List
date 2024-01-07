
let text: string;

text = "hello";


let boolean: boolean;


boolean = true;


let stringOrNumber: string | number;

stringOrNumber = "10";
stringOrNumber = 10;


let names: string[] = ["john", "james", "tom" ]


names.push("mike");


let numbers: number[] = [1,3,5,6,7,8];

numbers.push(2)


// union type

let stringOrNumberArray: (string | number) [];

stringOrNumberArray = [2,5,"25","50"];


// object

let John:  {
    firstName: string;
    lastName: string;
    age: number;
    phone? : string;
    // ?=  not required
}


John = {
    firstName: 'mike',
    lastName: 'Kinsanmi',
    age: 28,
    phone: "+24385694"
}





// function

let sayHi = ()=>{
    console.log("welcome home");
}


let string = () => {
    console.log("hi beautiful");
    return "ho!!!"
}


let multiple = (num:number): number=> {
    return num* 2;
}


let sum = (num: number, num1: number) =>{
    return num + num1;
}

sum(1, 4);


let func = (user : {username: string; age: number; phone?: number})=>{
    return user;
}


interface User {
    username: string;
    email: string;
    client: string;
    digit: number
}


const epm : User = {
    username : "tom",
    email: 'example@gamil.com',
    client: 'EN Moore',
    digit: 125
}