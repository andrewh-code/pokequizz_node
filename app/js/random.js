var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var hash = {};	//empty array to hold questions
var i = 0;
var j = 0;
var duplicateExists = true;


for (i = 0; i < 10; i++){
  duplicateExists = true;
  
  while (duplicateExists){
		j++;  
    var x = Math.floor(Math.random() * arr.length);
  
  	if (Object.values(hash).indexOf(x) > -1){
    	console.log("found duplicate for " + x);
      console.log("trying again...");
    	duplicateExists = true;
    }else{
    	hash[i] = x;
      duplicateExists = false;
    }
    
  }
}
console.log("numbers tried: " + j);
console.log(hash);