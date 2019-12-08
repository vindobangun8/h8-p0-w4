function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var total = []
    var dari =''
    var tujuan = ''
    //your code here
    for(i = 0; i < arrPenumpang.length; i++){
        for(j = 0; j < rute.length; j++){
            if(arrPenumpang[i][1] == rute[j]){
                dari = j
            }
        }
        for(k = 0;k < rute.length; k++){
            if(arrPenumpang[i][2] == rute[k]){
                tujuan = k
            }
        }
        ongkos = (tujuan - dari) * 2000
        var hasil = {}
        hasil.penumpang = arrPenumpang[i][0]
        hasil.naikDari = arrPenumpang[i][1]
        hasil.tujuan = arrPenumpang[i][2]
        hasil.bayar = ongkos
        total.push(hasil)
    }
    return total
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]