

module.exports = {
  pwd: function() {
    var temp = process.argv[1].split('/');
    temp.pop();
    temp = temp.join('/');
    process.stdout.write(temp);
    process.stdout.write('\nprompt > ');
  },
  date: function() {
    var today = new Date();
    process.stdout.write(today.toString());
    process.stdout.write('\nprompt > ');
  },
  ls: function() {
      var fs = require('fs');
      var res = fs.readdirSync('.');
      res = res.join(' ');
      process.stdout.write(res);
      process.stdout.write('\nprompt > ');
    //   var temp = process.argv[1].split('/');
    //   temp.pop();
    // //   console.log(temp);
    //   temp = temp.join('/');
    // //   console.log(temp);
      
  },
  echo: function(str) {
    if (str[0] === '$') {
        str = str.slice(1);
        process.stdout.write(process.env[str]);
    }
    else {
        process.stdout.write(str);
        process.stdout.write('\nprompt > ');
    }
  },
  cat: function(str) {
    var fs = require('fs');
    var temp = process.argv[1].split('/');
    temp.pop();
    temp = temp.join('/');
    temp = temp.concat('/' + str);
    fs.readFile(temp, (err, data) => {
        if (err) throw err;
        process.stdout.write(data);
    });
  },
  head: function(str) {
    var fs = require('fs');
    var temp = process.argv[1].split('/');
    temp.pop();
    temp = temp.join('/');
    temp = temp.concat('/' + str);
    var write = '';
    write = fs.readFileSync(temp, 'utf8');

    write = write.split('\n');
    write = write.slice(0,5).join('\n');
    process.stdout.write(write);
  },
  tail: function(str) {
    var fs = require('fs');
    var temp = process.argv[1].split('/');
    temp.pop();
    temp = temp.join('/');
    temp = temp.concat('/' + str);
    var write = '';
    write = fs.readFileSync(temp, 'utf8');

    write = write.split('\n');
    write = write.slice(-5).join('\n');
    process.stdout.write(write);
  } 
}


