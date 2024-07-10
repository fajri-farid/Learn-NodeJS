import { URL } from "url";

// Membuat objek URL baru dengan string URL yang diberikan
const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

// Mengubah host dari URL
pzn.host = "www.khannedy.com";

// Menambahkan parameter query baru ke URL
pzn.searchParams.append("status", "premium");

// Mencetak representasi string lengkap dari URL yang telah dimodifikasi ke konsol
console.info(pzn.toString());

// Mencetak protokol dari URL ke konsol
console.info(pzn.protocol); 

// Mencetak host (hostname + port) dari URL ke konsol
console.info(pzn.host);

// Mencetak pathname dari URL ke konsol
console.info(pzn.pathname);

// Mencetak objek URLSearchParams yang berisi query string parameter dari URL ke konsol
console.info(pzn.searchParams);

/*
  Penjelasan Kode:

  1. Import modul 'url':
     - Modul 'url' digunakan untuk bekerja dengan URL di Node.js.
     - `URL` adalah kelas bawaan yang memungkinkan kita untuk memparsing dan memanipulasi URL.

  2. Membuat objek URL baru:
     - `const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs")` membuat objek URL 
       baru dengan string URL yang diberikan.
     - Objek `pzn` sekarang mewakili URL yang diberikan dan menyediakan metode untuk mengakses dan 
       memanipulasi berbagai komponen URL.

  3. Mengubah host URL:
     - `pzn.host = "www.khannedy.com"` mengubah host dari URL menjadi "www.khannedy.com".
     - Host adalah bagian dari URL yang terdiri dari hostname dan (opsional) port.

  4. Menambahkan parameter query:
     - `pzn.searchParams.append("status", "premium")` menambahkan parameter query baru dengan nama 
       "status" dan nilai "premium" ke URL.
     - `searchParams` adalah objek URLSearchParams yang memungkinkan kita untuk memanipulasi parameter 
        query dalam URL.

  5. Mencetak URL lengkap yang telah dimodifikasi:
     - `pzn.toString()` mengembalikan representasi string lengkap dari URL yang telah dimodifikasi.
     - `console.info(pzn.toString())` mencetak URL lengkap ke konsol.

  6. Mencetak komponen URL:
     - `console.info(pzn.protocol)` mencetak protokol dari URL ke konsol.
     - `console.info(pzn.host)` mencetak host dari URL ke konsol.
     - `console.info(pzn.pathname)` mencetak pathname dari URL ke konsol.
     - `console.info(pzn.searchParams)` mencetak objek URLSearchParams yang berisi query string parameter 
       dari URL ke konsol.

  Kesimpulan:
  - Kode ini menunjukkan cara menggunakan kelas `URL` dari modul 'url' untuk memparsing, mengubah, dan 
    mengakses berbagai komponen URL di Node.js.
  - Dengan objek `URL`, kita dapat dengan mudah mengubah host, menambahkan parameter query, dan mengakses 
    protokol, host, pathname, dan parameter query dari URL.
*/
