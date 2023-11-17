const fs = require("fs");

// console.log(fs);

/* 
    Menuliskan string ke dalam file (synchronous)
    
    1 - sebelumnya file "text.txt" ini tidak ada, setelah dijalankan maka akan muncul file text.txt
        fs.writeFileSync("text.txt", "Tulisan ini dibuat secara synchronous!");

    2.a - karena sebelumnya folder "data" ini tidak ada, maka fungsi di bawah ini akan error
        fs.writeFileSync("data/text.txt", "Tulisan ini dibuat secara synchronous!");
    2.b - oleh karena itu, folder "data" harus disiapkan terlebih dahulu baru menjalankan fungsinya
    fs.mkdirSync("data");
    fs.writeFileSync("data/text.txt", "Tulisan ini dibuat secara synchronous!");

    Notes:
    Cara menyimpan error
    try {
        fs.writeFileSync("data/text.txt", "Tulisan ini dibuat secara synchronous!");
    } error (err) {
        console.log(err);
    }

*/

/*

    // Menuliskan string ke dalam file (asynchronous)

    fs.writeFile("data/text.txt", "Tulisan ini dibuat secara asynchronous", (err) => {
        console.log(err);
    });

*/

/*

    // Membaca isi file (synchronous)
    const data = fs.readFileSync("data/text.txt", "utf-8"); // utf-8 ini untuk mengubah buffer menjadi string
    console.log(data);

*/

/*

    // Membaca isi file (asynchronous)
    fs.readFile("data/text.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    });

*/

/*

    // Readline - Membuat 1 pertanyaan
    const readline = require("readline"); // Panggil module readline

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    }); // Membuat objek rl sebagai interface

    rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Hello ${nama}`);
    rl.close();
    }); // Membuat pertanyaan

*/

/*

    // Readline - Membuat 2 pertanyaan
    const readline = require("readline"); // Panggil module readline

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    }); // Membuat objek rl sebagai interface

    rl.question("Masukkan nama Anda: ", (nama) => {
    rl.question("Masukkan no HP Anda: ", (noHP) => {
        console.log(`Terima kasih ${nama} sudah memasukkan ${noHP}.`);
        rl.close();
    });
    }); // Membuat pertanyaan

*/

const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama Anda: ", (nama) => {
  rl.question("Masukkan nomor HP Anda: ", (noHP) => {
    const contact = {
      nama: nama,
      noHP: noHP,
    }; // Tampung input dari user ke dalam objek "contact"
    const file = fs.readFileSync("data/contacts.json", "utf-8"); // Baca file contacts.json
    const contacts = JSON.parse(file); // Ubah string pada data "file" menjadi objek agar dapat dibaca oleh JSON

    contacts.push(contact); // Tambahkan objek "contact" ke dalam array (JSON) "contacts"

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); // Tulis ulang file contacts.json dengan data yang baru diinputkan sekaligus mengubah objek menjadi string dengan JSON.stringify
    console.log("Terima kasih sudah memasukkan data.");
    rl.close();
  });
});
