/*
const argv...

comando crear 'crear un elemento por hacer'
        --descripcion  -d 

comando actualizar 'actualiza el estado de una tarea'
        --descripcion -d 
        --completado  -c  true

        --help
*/

// const argv = require('yargs')
//     .command('crear', 'Crea una tarea por hacer')
//     .command('actualizar', 'actualiza el estado de una tarea')
//     .option('descripcion', { alias: 'd', demand: true })
//     .option('completado', { alias: 'c', default: true })
//     .help()
//     .argv;


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('listar', 'listar las tareas ', {
        todas: {
            alias: 't',
            default: false
        }
    })
    .command('borrar', 'borra una tarea ', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea a borrar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};