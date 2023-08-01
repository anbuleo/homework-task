//1.Print odd numbers in an array
//by basic function method 
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let oddArr=[];
// function odd(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             oddArr.push(arr[i])
//         }
//     }
     
//     return oddArr;
// }
// console.log(odd(arr));
/////////////////////////////////////////////////

//by using Anonymous Function

// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let result=[];

// let oddArr= function(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             result.push(arr[i])
//         }
//     }
     
//     return result;
// }
// console.log(oddArr(arr1));

/*-----------------------------------------------------------------*/
//IIFE (Immediately Invoked Function Expression)
// let arr=[1,2,3,4,5,6,7,8,9,10];
// (function odd(arr){
//     let oddArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             oddArr.push(arr[i])
//         }
//     }
     
//     console.log(oddArr);
// })
// (arr);
/*///////////////////////////////////////////////////////////*/
//arrow function
// let arr=[1,2,3,4,5,6,7,8,9,10];
// const od= (arr)=>{
//     let oddArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             oddArr.push(arr[i])   
//         }
//     }
//     return oddArr
// }
// console.log(od(arr));
/////////////////////////////////////////////////////////////////////////
//2.Convert all the strings to title caps in a string array 
//(i)-function method 
// let sArr=["hai","hello","Convert all the strings to title caps in a string array ","ok"];

// function properCase(sArr){
//     let newSarr=[];

//         for(let i=0;i<sArr.length;i++){
//           newSarr.push(sArr[i].charAt(0).toUpperCase()+sArr[i].slice(1).toLowerCase());
//         }
//         return newSarr
//     }
//     let result=properCase(sArr);
//     console.log(result)

////////////////////////////////////////----------------//////////////////////////////
//2.Convert all the strings to title caps in a string array 
//(ii)-by using Anonymous Function
// let sArr=["hai","hello","Convert all the strings to title caps in a string array ","ok"];

// let  properCase=function(sArr){
//     let newSarr=[];

//         for(let i=0;i<sArr.length;i++){
//           newSarr.push(sArr[i].charAt(0).toUpperCase()+sArr[i].slice(1).toLowerCase());
//         }
//         return newSarr
//     }
//     let result=properCase(sArr);
//     console.log(result);
////////////////////////////////////////////////////////////
//2.Convert all the strings to title caps in a string array 
//(iii)-by using IIFE (Immediately Invoked Function Expression).
// let sArr=["hai","hello","Convert all the strings to title caps in a string array ","ok"];

// (function properCase(sArr){
//     let newSarr=[];

//         for(let i=0;i<sArr.length;i++){
//           newSarr.push(sArr[i].charAt(0).toUpperCase()+sArr[i].slice(1).toLowerCase());
//         }
//         console.log(newSarr)
//     })
//     (sArr)
//////////////////////////////////////---//////////////////////////////////////
//2.Convert all the strings to title caps in a string array 
//(iv)-by using arrow function =>.
// let sArr=["hai","hello","Convert all the strings to title caps in a string array ","ok"];

// const properCase=(sArr)=>{
//     let newSarr=[];

//         for(let i=0;i<sArr.length;i++){
//           newSarr.push(sArr[i].charAt(0).toUpperCase()+sArr[i].slice(1).toLowerCase());
//         }
//         return newSarr
//     }
//     let result=properCase(sArr);
//     console.log(result)
///////////////////.........................////////////////////////////////////////////
//3.Sum of all numbers in an array   
//(i)--> using function method
// let a=[1,2,3,5,6,7];
// function sum(num){
//     let newnum=0;
//     for(let i=0;i<a.length;i++){
//         newnum +=a[i]
//     }
//     return newnum;
// }
// console.log(sum(a))
////,,,,,,,,,,,////////////////////,,,,,,,,,,,,,,,///////////////,,,,,,,,,,,///////////////////
//3.Sum of all numbers in an array   
//(ii)-by using Anonymous Function
// let a=[1,2,3,5,6,7];
// let sum=function(num){
//     let newnum=0;
//     for(let i=0;i<a.length;i++){
//         newnum +=a[i]
//     }
//     return newnum;
// }
// console.log(sum(a))
//-----------------//////////////////////////////////////////------------------/////////////////
//3.Sum of all numbers in an array 
//(iii)-by using IIFE (Immediately Invoked Function Expression).
// let a=[1,2,3,5,6,7];
// (function sum(num){
//     let newnum=0;
//     for(let i=0;i<a.length;i++){
//         newnum +=a[i]
//     }
//     console.log(newnum);
// })
// (a)
//////////////========================================================////////////////////////
//3.Sum of all numbers in an array 
//(iv)-by using arrow function =>.
// let a=[1,2,3,5,6,7];
// const sum=(num)=>{
//     let newnum=0;
//     for(let i=0;i<a.length;i++){
//         newnum +=a[i]
//     }
//     return newnum;
// }
// console.log(sum(a))
/////////////////////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;//////////////////////
//4.Return all the palindromes in an array 
//(i)--> using function method
// let rawData=[121,"dad","liril","hello",757];
// function getplindrmes(rawData){
//     let newData=[];
//     for(let i=0;i<rawData.length;i++){
//         if(rawData[i]==rawData[i].toString().split("").reverse().join("")){
//         newData.push(rawData[i])
//     }
   
//     } return newData
    
// }console.log(getplindrmes(rawData))
/////:::::::::::::::::::::::::::::::::?/////////////////////////////////////////////////
//4.Return all the palindromes in an array 
//(ii)-by using Anonymous Function
// let rawData=[121,"dad","liril","hello",757];
// let =function(rawData){
//     let newData=[];
//     for(let i=0;i<rawData.length;i++){
//         if(rawData[i]==rawData[i].toString().split("").reverse().join("")){
//         newData.push(rawData[i])
//     }
   
//     } console.log(newData)
    
// }
// (rawData);
//////////////////////////+++++++++++++++++++++++==////////////////////////////
//4.Return all the palindromes in an array
//(iii)-by using IIFE (Immediately Invoked Function Expression).

// let rawData=[121,"dad","liril","hello",757];
// (function getplindrmes(rawData){
//     let newData=[];
//     for(let i=0;i<rawData.length;i++){
//         if(rawData[i]==rawData[i].toString().split("").reverse().join("")){
//         newData.push(rawData[i])   }
   
//     } console.log(newData)
    
// })
// (rawData);
////////////////////////////.................................///////////////////////////////
//4.Return all the palindromes in an array
//(iv)-by using arrow function =>.
// let rawData=[121,"dad","liril","hello",757];
// const getplindrmes=(rawData)=>{
//     let newData=[];
//     for(let i=0;i<rawData.length;i++){
//         if(rawData[i]==rawData[i].toString().split("").reverse().join("")){
//         newData.push(rawData[i])
//     }
   
//     } return newData
    
// }
// console.log(getplindrmes(rawData))