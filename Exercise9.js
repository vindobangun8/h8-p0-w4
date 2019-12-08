function checkAB(num) {
    // you can only write your code here!
    hasil = 0
    for(i=0;i<num.length;i++){
        if( num[i] == 'a'){
            for(j=0;j<num.length;j++){
                if(num[j] == 'b'){
                    hasil =Math.abs(j-i-1)
                    if(hasil == 3){
                        return true
                    }
                    else{
                        hasil = 0
                    }
                }
            }
        }
        else if(num[i] == 'b'){
            for(j=0;j<num.length;j++){
                if(num[j] == 'a'){
                    hasil =Math.abs(j-i-1)
                    if(hasil == 3){
                        return true
                    }
                    else{
                        hasil = 0
                    }
                }
                
            }
        }
    }
    if(hasil != 3){
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false