const fs = require('fs');

let listadoPorHacer = [];

const leerBBDD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error("No se puede guardar la BBDD. ", err);
    });

};

const getListado = () => {
    leerBBDD()
    return listadoPorHacer;
};

const crear = (descripcion) => {
    leerBBDD();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    leerBBDD();

    // let index = listadoPorHacer.findIndex( (tarea) => {
    //         return tarea.descripcion === descripcion;
    // })
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado === "true";
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    let correcto = false;
    leerBBDD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        correcto = true;
    }
    return correcto;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}