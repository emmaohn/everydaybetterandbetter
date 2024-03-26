const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false //HERE!
  }
});

const getMerchants = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM merchants", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

// select month day, year
// SELECT TO_CHAR(NOW():: DATE, 'Mon dd, yyyy');