export async function timeoutUtil(ms = 1_000) {
  console.log("timeout:", ms);
  return await new Promise(async (resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
