process.stdout.write('prompt > ');

module.exports = {
  pwd: function() {
      process.stdin.on('data', function (data) {
        var cmd = data.toString().trim(); // remove the newline

        process.stdout.write(process.argv[1]);
      }
  };
}



