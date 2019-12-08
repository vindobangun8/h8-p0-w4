function urutkanAbjad(str) {
    // you can only write your code here!
    
    var hasil =''
    var alfabet ='abcdefghijklmnopqrstuvwxyz'
    for(i=0;i<alfabet.length;i++){
        for(j=0;j<str.length;j++){
            if(alfabet[i] == str[j]){
                hasil += alfabet[i]
            }
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'