// var a=1

// function cl(a) {
//   console.log(a)
// }
//根据作用域链可以找到a
// cl(a)


var a={
  name:'Y',
  age:18,
  son:{
    name:'y',
    getFatherAge(){
      console.log(a.age)
    }
  }
}

a.son.getFatherAge()