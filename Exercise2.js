function fpb(angka1, angka2) {
    // you can only write your code here!
    arr1 = []
    arr2 = []
    for (i=1;i<angka1;i++){
        if(angka1 % i == 0){
            arr1.push(i)
        }
    }
    for (i=1;i<angka2;i++){
        if(angka2 % i == 0){
            arr2.push(i)
        }
    }
    hasil = 0
    for (i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                if(hasil < arr1[i]){
                    hasil = arr1[i]
                    break;
                }
            }
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1