// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput); // event listener for stdin

  return stdin;
};

const handleUserInput = function(data) {
  // const stdin = process.stdin;

  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    connection.write("Move: up");
    return;
  }

  if (data === 'a') {
    connection.write("Move: left");
    return;
  }

  if (data === 's') {
    connection.write("Move: down");
    return;
  }

  if (data === 'd') {
    connection.write("Move: right");
    return;
  }

  if (data === 'z') {
    connection.write("Say: imma snek ssssss");
    return;
  }

  if (data === 'x') {
    connection.write("Say: sneks go ssssss");
    return;
  }

  if (data === 'c') {
    connection.write("Say: sneks on a plen");
    return;
  }
}

module.exports = {
  setupInput
};