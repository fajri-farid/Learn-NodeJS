import path from "path";

const file = "/Users/khannedy/contoh.html";

// Mendapatkan karakter pemisah direktori pada platform saat ini
console.info("Pemisah direktori:", path.sep);

// Mendapatkan direktori dari path file
console.info("Direktori:", path.dirname(file));

// Mendapatkan nama file dari path file
console.info("Nama file:", path.basename(file));

// Mendapatkan ekstensi file dari path file
console.info("Ekstensi file:", path.extname(file));

// Mendapatkan informasi lengkap tentang path file dalam bentuk objek
console.info("Informasi path:", path.parse(file));
