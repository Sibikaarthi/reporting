// //constructor

// let newArray=new Array(1,2,3,4,5,6,7,8,9)
// console.log(newArray)

// // Create a new array with a single element
// var newArrays = new Array("hi");
// console.log(newArrays)

// //creating length with new array
// let setlength= new Array(7).fill().map((_,index)=>index+1);
// console.log(setlength)

// //creating length with new array using forloop
// let setlengths = new Array(10);
// for (let i = 0; i < setlengths.length; i++) {
//     setlengths[i] = i+1;
// }
// console.log(setlength);

//at

// let arr=["a","b","c","d"]
// let index=3;
// let findat=arr.at(index);
// console.log(findat)

//concat
// let str=[1,2,3]
// let str1=[4,5,6]
// console.log(str.concat(str1))

//copywithin
// let fruits=["apple","banana","grapes","kiwi"]
// console.log(fruits.copyWithin(0,1,2))

//entries
// let val=["a","b","c"]
// let iterator=val.entries();
// console.log(iterator.next().value)

//every
// let arr=[1,2,3,3,4,5,6,7,8,9]
// let filterarray=arr.every(val=>{
//     return val >0
// })
// console.log(filterarray);

//fill
// let createnewarray= new Array(3).fill(3)
// console.log(createnewarray)

//filter
// let number=[23,45,76,1,98,65]
// console.log(number.filter(val=>{
//     return val>45
// }))

//find
// let bike=["honda","tvs","duke","pulsar"]
// console.log(bike.find(function (el){
//     return el ==="duke"
// }))

// findindex
// let data=["name","age","roll"]
// console.log(data.findIndex(function (element){
//     return element ==="age"
// }))

//findlastindex
// let value=[11,2,4,56,78,54]
// let number = (element) => element > 45;
// console.log(value.findLastIndex(number))

//flat
// let val=[1,[2,3,4],[4,5,6],9,8]
// console.log(val.flat(Infinity));

//flatmap

//foreach
// let data=[1,2,3,4,5,6]
// let value=[]
// data.forEach((val)=>{
//      value.push(val*2)
// })
// console.log(value)

//includes
// let bike=["honda","tvs","duke","pulsar"]
// console.log(bike.includes("tvs"))

//indexof
// let bike=["honda","tvs","duke","pulsar"]
// console.log(bike.indexOf("duke"))

//join
// let names=["jason","roy","thomas"]
// console.log(names.join('_'))

//keys
// let alphabets=["a","b","c","d"];
// let alphabet=alphabets.keys();
// for(let key of alphabet){
//     console.log(key)
// }

//last index of
// let array = [5, 12, 50, 130, 44];
// let isLargeNumber = (element) => element > 45;
// console.log(array.findLastIndex(isLargeNumber))


//map
// let array = [5, 12, 50, 130, 44];
// let newarr=array.map((val)=>{
//     return val/2
// })
// console.log(newarr)

// pop
// let fruits=["apple","mango","kiwi","pineapple"]
// console.log(fruits.pop())

//push
// let fruits=["apple","mango","kiwi"]
// fruits.push("banana")
// console.log(fruits);

//reduce
// let fruits=["apple","mango","kiwi","pineapple","kiwi"]
// let reducearray=fruits.reduce((accu,curval)=>{
// if(!accu.includes(curval)){
//     accu.push(curval)
// }
// return accu;
// },[])
// console.log(reducearray)

//reduceright
// let val=[23,56,76,32,58];
// let filterarray=val.reduceRight((accu,curval )=>{
//    return  accu.concat(curval)
// },[])
// console.log(filterarray)

//reverse
// let fruits=["apple","mango","grapes","kiwi"];
// console.log(fruits.reverse())

//shift
// let fruits=["apple","mango","grapes","kiwi"];
// console.log(fruits.shift())

//unshift
// let fruits=["apple","mango","grapes","kiwi"];
// console.log(fruits.unshift("banana"))

//slice
//  let fruits=["apple","mango","grapes","kiwi"];
//  let val= fruits.slice(1,2)
// console.log(val);

//some
// let fruits=["apple","mango","grapes","kiwi"];
// let expression=function named(para){
//    return para==="apple"
// }
// let check=fruits.some(expression)
// if(check){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

//sort
// let number=[5,6,8,3,2,4,9,5]
// number.sort()
// console.log(number);

//splice
// let number = ['a', 'b', 'c', 'h', 't', 's', 'g'];
// console.log(number.splice(1,3,"b"))

//values

// let array1 = ['a', 'b', 'c'];
// let iterator = array1.values();

// for (let value of iterator) {
//   console.log(value);
// }

//with

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); 
// console.log(arr)

     















