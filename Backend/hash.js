const bcrypt = require("bcrypt");

(async () => {
  const hash = await bcrypt.hash("Kaush@004", 10);
  console.log(hash);
})();
