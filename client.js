const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on("data", (data) => {
    console.log("Server says: ", data)
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: ADS");
    conn.write("Say: can't catch me!");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500); 
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 1000); 
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 1500); 
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 2000); 
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 2500); 

  });

  return conn;
};

module.exports = { connect };