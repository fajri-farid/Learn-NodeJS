import os from "os";

// Mendapatkan informasi platform sistem operasi
console.info("Platform:", os.platform());

// Mendapatkan informasi arsitektur sistem operasi (misalnya, 'x64')
console.info("Arsitektur:", os.arch());

// Mendapatkan informasi detail tentang CPU dalam bentuk tabel
console.table(os.cpus());

// Mendapatkan waktu aktif sistem dalam detik
console.info("Uptime:", os.uptime(), "detik");

// Mendapatkan total memori (RAM) dalam byte
console.info("Total Memori:", os.totalmem(), "bytes");

// Mendapatkan memori bebas (RAM) dalam byte
console.info("Memori Bebas:", os.freemem(), "bytes");

// Mendapatkan informasi tentang antarmuka jaringan dalam bentuk tabel
console.table(os.networkInterfaces());

// Mendapatkan direktori home pengguna
console.info('Home Directory:', os.homedir());

// Mendapatkan nama host dari sistem operasi
console.info('Hostname:', os.hostname());

// Mendapatkan informasi detail tentang CPU dalam bentuk tabel
console.table(os.cpus());

// Mendapatkan informasi tentang antarmuka jaringan dalam bentuk tabel
console.table(os.networkInterfaces());