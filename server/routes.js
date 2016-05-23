var path = require('path');

var basePath = '';

switch(process.env.NODE_ENV) {
  case 'production':
    basePath = '/dist';
    break;
  case 'development':
    basePath = '/public';
    break;
}

//process.cwd() : /home/romelgomez/workspace/projects/berlin
//__dirname : /home/romelgomez/workspace/projects/berlin/server

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile('index1.html', {root: path.join(process.cwd(), basePath)});
  });

  app.get('*', function(req, res){
    //console.log(' all requests');
    //res.send('#### 404 ####');
    res.sendFile('index1.html', {root: path.join(process.cwd(), basePath)});
  });

};
