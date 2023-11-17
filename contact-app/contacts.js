const fs = require("fs");
const { rejects } = require("assert");
const { resolve } = require("path");
const readLine = require("readline");
const validator = require("validator");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat folder "./data" jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file "contacts.json" jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Membuat pertanyaan // Function Promise itu mempunyai 2 parameter yaitu resolve dan rejects, resolve jalan jika Promise-nya selesai dan rejects jalan jika Promise-nya gagal
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  // Cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log("Kontak sudah terdaftar, silakan gunakan nama lain.");
    rl.close();
    return;
  }

  // Cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log("Email tidak valid");
      rl.close();
      return;
    }
  }

  // Cek noHP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log("No HP tidak valid");
    rl.close();
    return;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Terima kasih sudah memasukkan data.");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };