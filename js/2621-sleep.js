// 2621. Sleep

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return await new Promise((res) =>
    setTimeout(() => {
      res();
    }, millis)
  );
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));
sleep(3000).then(() => console.log("second"));
