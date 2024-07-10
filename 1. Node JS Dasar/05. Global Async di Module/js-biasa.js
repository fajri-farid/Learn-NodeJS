function samplePromise() {
  return Promise.resolve("fajri");
}

const data = await samplePromise(); // akan eror karena ".js" tidak bisa async
console.info("data");

// solusinya pake tipe file ".mjs"
// bisa juga ke file solusi
