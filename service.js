var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Nome da sua Aplicação',
  description: 'Apenas uma descrição',
  script: 'C:\\Users\\Marcelo\\projetoAV3\\src\\app.vue'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();