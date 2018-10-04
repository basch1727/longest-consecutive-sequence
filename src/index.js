module.exports = function longestConsecutiveLength(array) {
 let step= 0;
 let count = 1;
 array.sort ((a,b) => a-b);
 if (array.length === 0)
 return 0;
 if (array.length === 1)
 return 1;
   for(i=1; i<array.length; i++) {
     if(array[i]-array[i-1]===1){
      count++;
     }
    if(array[i]-array[i-1]>1){
      if(count>step) {
        step=count;
      }
      count=1;
    }
  }
  return step;

  

     /*if (i === 0) {
       step = a[i] - a[i-1];
       continue;
     }
     if (i === 1) {
        step = a[i] - a[i-1];
        
     }
      if(a[i] - a[i-1] != step ) {
      length = Math.max(count, length);
      count = 0;
      step = a[i+1] - a[i];     }
   }


  return length;*/
}
