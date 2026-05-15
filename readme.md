# Penjelasan
## Penjelasan program hitung luas dan keliling lingkaran dengan callback

penjelasan program nya:
1. pertama ada function hitung dimana function ini berisi 2 parameter parameter r adalah nilai jari jarinya, dan parameter cb adalah nama function yang akan di callback 
2. pada function hitung kita membuat proses guarding supaya parameter r berisi number, dan menentukan nilai phi, terakhir kita panggil function yang akan di callback yang berisi parameter r dan phi
3. lalu ada function luas dan keliling yang ada dua parameter dimana jumlah parameternya sama dengan jumlah parameter yang akan di callback pada penjelasan no 2. dan pada function ini berisi rumus untuk menghitung luas dan keliling dan memberikan output hasilnya
4.  selanjutnya kita panggil function dengan parameter nilai r, dan juga pada parameter kedua isi nama function lain yang akan di callback pada function hitung. kalo dalam kasus saya itu saya mencallback function luas dan keliling pada function hitung