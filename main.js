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

async function convertUnits() {
    const medidas = convert().measures();

    const {tipe } = await inquirer.prompt([{
        type: 'list',
        name: 'tipe',
        message: 'Selecciona el tipo de medida:',
        choices: medidas
    }]);
    const unidades = convert(tipe).possibilities(tipo);

    const respuestas = await inquirer.prompt([
        {
            type: 'list',
            name: 'from',
            message: '¿Qué tipo de medida quieres convertir?',
            choices: unidades
        },
        {
            type: 'list',
            name: 'to',
            message: '¿A qué tipo de medida quieres convertir?',
            choices: unidades
        },
        {
            type: 'input',
            name: 'value',
            message: 'Introduce el valor a convertir:',
            validate: (input) => !isNaN(input) || 'Por favor, introduce un número válido.'
        }
    ]);

    



