module.exports = {
  port: 3000,
  host: "localhost",
  mongo: {
    uri: "mongodb://localhost/timecode",
    connectionOptions: {
      reconnectTries: 3,
      reconnectInterval: 500
    }
  }
}