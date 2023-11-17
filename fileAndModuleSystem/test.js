// function
function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

// variable
const PI = 3.14;

// object
const mahasiswa = {
  nama: "Zuhdi",
  umur: 20,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  },
};

// class
class Orang {
  constructor() {
    console.log("Objek orang telah dibuat.");
  }
}

// EXPORT
// Cara export satu per satu
// module.exports.cetakNama = cetakNama; // ini cara export module di node.js versi lama
// export default cetakNama; // ini cara export module di node.js versi baru, tetapi baru bisa dijalankan di dalam package.json dengan menambahkan "type": "module" di dalam package.json
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// Cara export semua (1)
// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

// Cara export semua (2)
module.exports = { cetakNama, PI, mahasiswa, Orang };
