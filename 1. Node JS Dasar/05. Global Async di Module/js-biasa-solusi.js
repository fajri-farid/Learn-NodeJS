function samplePromise() {
  return Promise.resolve("fajri");
}

// sebelumnya kan eror, tapi klw memang mau pake js itu bisa pake function
async function run() {
  const data = await samplePromise();
  console.info(data);
}

run();
