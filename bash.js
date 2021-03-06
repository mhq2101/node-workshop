// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    var commands = require('./commands');
    var temp = cmd.split(' ');
    cmd = temp[0];
    temp.shift();
    temp = temp.join(' ')
    commands[cmd](temp);

//   if (cmd === 'pwd') {
//       process.stdout.write(process.argv[1]);
//   }
//   else if (cmd === 'date') {
//    var today = new Date();

//     process.stdout.write(today.toString());
//   }
//   else {
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
//   }
});