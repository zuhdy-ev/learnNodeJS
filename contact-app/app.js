// const contacts = require("./contacts");

// const main = async () => {
//   const nama = await contacts.tulisPertanyaan("Masukkan nama Anda: ");
//   const email = await contacts.tulisPertanyaan("Masukkan email Anda: ");
//   const noHP = await contacts.tulisPertanyaan("Masukkan noHP Anda: ");

//   contacts.simpanContact(nama, email, noHP);
// };

// main();

// Mengambil argumen dari command line
console.log(process.argv);
const yargs = require("yargs");
const contacts = require("./contacts");

// Menambahkan contact
yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

//  Menampilkan daftar semua nama & no HP contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    contacts.listContact();
  },
});

// Menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

yargs.parse();
