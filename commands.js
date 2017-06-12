

module.exports = {
  pwd: function() {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt > ');
  },
  date: function() {
    var today = new Date();
    process.stdout.write(today.toString());
    process.stdout.write('\nprompt > ');
  }
}




