function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    hasil = 0
    angka1Str =''
    angka2Str=''
    tmp = 0
    flag = false
    for(i=0;i<=angka;i++){
        if(angka % i == 0){
            angka1Str = String(angka / i)
            angka2Str = String(i)
            tmp = angka1Str.length + angka2Str.length
            flag = true
        }
        if(flag){
            if(hasil == 0){
                hasil = tmp
            }else if(tmp < hasil){
                hasil = tmp
            }
        }
        tmp = 0
        flag =false
    }
    return hasil
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2