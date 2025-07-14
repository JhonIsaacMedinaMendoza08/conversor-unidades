const inquirer = require('inquirer');
const convert = require('convert-units');
const chalk = require('chalk'); 
const units = convert().possibilities();

async function mainMenu() {
    console.clear();
    console.log(chalk.blue.bold('\n=== CONVERSOR DE UNIDADES UNIVERSAL ===\n'));

    const { opcion } = await inquirer.prompt([{
        type: 'list',
        name: 'opcion',
        message: 'Selecciona una opción:',
        choices: [
            '1. Convertir unidades',
            '2. Ver unidades disponibles',
            '3. Ver historial de conversiones',
            '4. Salir'
        ]
    }]);
    switch (opcion) {
        case '1. Convertir unidades':
            await convertUnits();
            break;
        case '2. Ver unidades disponibles':
            showAvailableUnits();
            break;
        case '3. Ver historial de conversiones':
            showConversionHistory();
            break;
        case '4. Salir':
            console.log(chalk.green('¡Gracias por usar el conversor!'));
            process.exit();
    }
    await continuar();
    await mainMenu();
}
