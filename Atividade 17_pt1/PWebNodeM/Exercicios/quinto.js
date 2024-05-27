var eventos = require("events");
var ee = new eventos.EventEmitter();

ee.on("dados", function(fecha) {
    console.log(fecha);
});

setInterval(function() {
    ee.emit("dados", Date.now());
}, 500);