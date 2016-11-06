var nodemon = require('nodemon');

nodemon({
  script: 'server.js',
  ext: 'js json njk',
  watch: [
    'resources/views',
    'config',
    'bootstrap',
    'app',
    '.env'
  ]
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});
