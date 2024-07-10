import dns from "dns/promises";

async function lookupAddress() {
  try {
    // Melakukan pencarian DNS untuk www.programmerzamannow.com
    const address = await dns.lookup("www.programmerzamannow.com");

    // Mencetak informasi alamat IP dan jenis keluarga alamat
    console.log("Alamat IP:", address.address);
    console.log("Keluarga Alamat:", address.family);
  } catch (error) {
    console.error("Error:", error);
  }
}

lookupAddress();
