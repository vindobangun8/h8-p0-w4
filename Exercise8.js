function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var alfabetB='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var alfabetK='abcdefghijklmnopqrstuvwxyz'
    var hasil =''
    for(i=0;i<kalimat.length;i++){
       
        for(j=0;j<alfabetB.length;j++){
            if(alfabetB[j] == kalimat[i]){
                hasil +=alfabetK[j]
                found = true
            }
            else if(alfabetK[j] == kalimat[i]){
                hasil+= alfabetB[j]
                found = true
            }
        }
        if (!found){
            hasil +=kalimat[i]
        }
        found = false
    }
    return hasil
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"