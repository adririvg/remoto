const fs = require('fs');

let archivoTareas = {

    archivo: 'tareas.json',
    leerJSON: function () {

        return JSON.parse( fs.readFileSync( this.archivo, 'utf-8') );

    },
    escribirJSON: function (data) {

        return fs.writeFileSync( this.archivo, data, 'utf-8');


    },

}

module.exports = archivoTareas;