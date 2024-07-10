function samplePromise() {
  return Promise.resolve("fajri");
}

const data = await samplePromise();
console.info(data);

// by default sudah async
