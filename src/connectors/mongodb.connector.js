const config = require("../config");

module.exports = async function (mongoose) {
  // set locals, only providing error in development mode
  const { database, port, host } = config.databaseConfig;
  mongoose
    .connect(
      `mongodb://${host}:${port}/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.error("Error connected to mongodb:", error.reason);
      process.exit(1);
    });
};
