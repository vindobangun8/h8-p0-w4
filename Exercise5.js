function ubahHuruf(kata) {
    // you can only write your code here!
    hasil = ''
    alfabet = 'abcdefghijklmnopqrstuvwxyz'
    for(i=0;i<kata.length;i++){
        for(j=0;j<alfabet.length;j++){
            if(kata[i] == alfabet[j]){
                hasil += alfabet[j+1]
            }
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu