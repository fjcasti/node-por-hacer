const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log("crear tarea");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("mostrar tareas");
        let listado = porHacer.getListado();
        console.log("Lista de tareas:".yellow);
        for (let tarea of listado) {
            console.log(tarea.descripcion, " .. ", tarea.completado);

        }
        break;
    case 'actualizar':
        console.log("modifica tarea");
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`tarea modificada ${actualizado}`.blue);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no reconocido");
}