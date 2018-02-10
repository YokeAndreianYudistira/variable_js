// memasukan nilai ke dalam variabel global menggunakan inner HTML
var nama = "Yoke Andreian Yudistira";
var alamat = "Desa bajang mlarak ponorogo";

document.getElementById('nama').innerHTML= nama;
document.getElementById('alamat').innerHTML = alamat;

// contoh efek konsep global variabel danlocal variabel dalam js

var nilai = "global";

function test()
{
	var nilai = "local";
	var nilai_local = "dunia_js";
	tanpa_var = "no_scape";  // tanpa var akan menjadi global variabel
	console.log(nilai);
}

test(); // print local
console.log(tanpa_var); // print : no_scape (variabel dapat di akses)
console.log(nilai_local); // error karena nilai local adalah local variabel