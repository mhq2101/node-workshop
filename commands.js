

module.exports = {
  pwd: function() {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt > ');
  }
}




