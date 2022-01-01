const config = require("../config");
// const mongoose = require("mongoose");
const Pool = require("pg").Pool;

const { database, port, host, user, password } = config.databaseConfig;
const { isDevelopment } = config;

const pool = new Pool({
  user,
  host,
  password,
  database,
  port,
});

pool.connect(function (err) {
  if (err) throw err;
  if (isDevelopment) console.log("Connected!");
});

module.exports = pool;

/** MONGO DB CONNECTOR  */

// module.exports = async function () {
//   // set locals, only providing error in development mode
//   const { database, port, host } = config.databaseConfig;
//   const { isDevelopment } = config;
//   mongoose
//     .connect(
//       `mongodb://${host}:${port}/${database}?retryWrites=true&w=majority`,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//     )
//     .then(() => {
//       if (isDevelopment) {
//         console.log("connected to mongodb");
//       }
//     })
//     .catch((error) => {
//       if (isDevelopment) {
//         console.error("Error connected to mongodb:", error.reason);
//       }

//       process.exit(1);
//     });
// };

/** CONNECTION TO MONGODB CLOUD SERVICE */

// module.exports = async function () {
//   // set locals, only providing error in development mode
//   const { dbCloud } = config.databaseConfig;
//   const { isDevelopment } = config;
//   mongoose
//     .connect(`${dbCloud}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       if (isDevelopment) {
//         console.log("connected to mongodb");
//       }
//     })
//     .catch((error) => {
//       if (isDevelopment) {
//         console.error("Error connected to mongodb:", error.reason);
//       }
//     });
// };
