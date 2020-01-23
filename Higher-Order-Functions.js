function repeat(operation, num) {
    // SOLUTION GOES HERE
	console.log(num<=0)
    if(num<=0) {
    operation();
    return  repeat(operation,num--);
    }
    
  }
  
  module.exports = repeat
