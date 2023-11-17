/* 
    fungsi require akan mencari module dengan urutan sebagai berikut:
    1. Core Module (module bawaan node.js)
    2. File atau folder ("./" atau "/" atau "../")
    3. Folder node_modules
*/

// const fs = require("fs"); // contoh CORE MODULE
// const cetakNama = require("./test.js"); // ini cara import module di node.js versi lama // contoh LOCAL MODULE
// import { cetakNama } from "./test.js"; // ini cara import module di node.js versi baru, tetapi baru bisa dijalankan di dalam package.json dengan menambahkan "type": "module" di dalam package.json
// const moment = require("moment"); // contoh NODE MODULES (folder node_modules), dibahas di NPM

const test = require("./test.js");

console.log(test.cetakNama("Zuhdi"), test.PI, test.mahasiswa, new test.Orang());
