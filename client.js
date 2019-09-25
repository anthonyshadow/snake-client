const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.on(`data`, (data) => {
    console.log('', data);
  });
  conn.setEncoding('utf8');  

conn.on('connect', () => {
  console.log('successfully connected');
  conn.write('Name: ADS');

  /*
  setInterval(() => {
    conn.write("Move: up");
  },50)
  */
  conn.write("Move: up");
  conn.write("Move: down");
  conn.write("Move: left");
  conn.write("Move: right");
});

//conn.on('connect', () => {
  //conn.write("Move: up");
//});


  return conn;
};


module.exports = {
  connect,

}