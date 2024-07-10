import { URL } from "url";

// Membuat objek URL baru dengan string URL yang diberikan
const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

// Mencetak representasi string lengkap dari URL ke konsol
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
* Penjelasan Kode:

  1. Import modul 'url':
     - Modul 'url' digunakan untuk bekerja dengan URL di Node.js.
     - `URL` adalah kelas bawaan yang memungkinkan kita untuk memparsing dan memanipulasi URL.

  2. Membuat objek URL baru:
     - `const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs")` membuat objek URL baru dengan string URL yang diberikan.
     - Objek `pzn` sekarang mewakili URL yang diberikan dan menyediakan metode untuk mengakses berbagai komponen URL.

  3. Mencetak URL lengkap:
     - `pzn.toString()` mengembalikan representasi string lengkap dari URL.
     - `console.info(pzn.toString())` mencetak URL lengkap ke konsol.

  4. Mencetak protokol:
     - `pzn.protocol` mengembalikan protokol dari URL (misalnya, 'https:').
     - `console.info(pzn.protocol)` mencetak protokol ke konsol.

  5. Mencetak host:
     - `pzn.host` mengembalikan host dari URL (hostname + port, jika ada).
     - `console.info(pzn.host)` mencetak host ke konsol.

  6. Mencetak pathname:
     - `pzn.pathname` mengembalikan pathname dari URL (bagian path dari URL).
     - `console.info(pzn.pathname)` mencetak pathname ke konsol.

  7. Mencetak search parameters:
     - `pzn.searchParams` mengembalikan objek URLSearchParams yang berisi query string parameter dari URL.
     - `console.info(pzn.searchParams)` mencetak objek URLSearchParams ke konsol.

  Kesimpulan:
  - Kode ini menunjukkan cara menggunakan kelas `URL` dari modul 'url' untuk memparsing dan mengakses berbagai komponen URL di Node.js.
  - Dengan objek `URL`, kita dapat dengan mudah mengakses dan memanipulasi protokol, host, pathname, dan query string parameter dari URL.
*/
