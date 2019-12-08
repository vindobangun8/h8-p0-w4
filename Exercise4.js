function cariModus(arr) {
    // you can only write your code here!
    modus = 0
    tmp = 0
    modusTmp = 0
    tmp2 = 0
    flag = 0
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                tmp2 +=1
                modusTmp = arr[i]
            }
        }
        if(tmp < tmp2){
            tmp = tmp2
            modus = modusTmp
        }
        tmp2 =0
        modusTmp = 0
    }
    if(modus == 0 || tmp == arr.length-1){
        return -1
    }else{
        return modus
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1