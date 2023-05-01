function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();


for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
  
function rectangle(length){
   function innerRectangle(breadth){
      let area=length*breadth;
      return area;
  }
  return innerRectangle;
}
let result =rectangle(10);
console.log(result(5));



function outer(){
let count=0;
  function inner(){
count++;
console.log(count);
  }
  return inner;
}
let increase=outer();
increase();
increase();
increase();




