function changeMe(arr) {
    // you can only write your code here!
     var name={}  
     for(i=0;i<arr.length;i++){
        name.firstName = arr[i][0]
        name.lastName = arr[i][1]
        name.gender = arr[i][2]
        if(arr[i][3] != undefined){
            name.age = 2019 - arr[i][3]
        }
        else{
            name.age = 'invalid Birth Year'
        }
        console.log(i+1+'.'+name.firstName + name.lastName)
        console.log(name)
    }
    
    return name

    
  }
  
  // TEST CASES
 changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""