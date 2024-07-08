require ("dotenv").config()
module.exports = {
  HOST: "ep-snowy-sea-a125sqdi-pooler.ap-southeast-1.aws.neon.tech",
  USER: "default",
  PASSWORD: "LlWspDTx76Vz",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

