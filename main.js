const inquirer = require('inquirer');
const convert = require('convert-units');
const fs = require('fs');
const chalk = require('chalk');

async function mainMenu() {
  console.clear();
  console.log(chalk.blue.bold('\n=== CONVERSOR DE UNIDADES UNIVERSAL ===\n'));

  const { opcion } = await inquirer.prompt([
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué deseas hacer?',
      choices: [
        '1. 🔄 Realizar una conversión de unidades',
        '2. 📚 Consultar unidades disponibles',
        '3. 🕘 Ver historial de conversiones realizadas',
        '4. 🚪 Salir'
      ]
    }
  ]);

  switch (opcion) {
    case '1. 🔄 Realizar una conversión de unidades':
      await convertUnits();
      break;
    case '2. 📚 Consultar unidades disponibles':
      showAvailableUnits();
      break;
    case '3. 🕘 Ver historial de conversiones realizadas':
      showRecord();
      break;
    case '4. 🚪 Salir':
      console.log(chalk.green('\nGracias por usar el conversor 🔄. ¡Hasta pronto!\n'));
      process.exit();
  }

  await continuar();
  await mainMenu();
}

async function convertUnits() {
  const medidas = convert().measures();

  const { tipo } = await inquirer.prompt([
    {
      type: 'list',
      name: 'tipo',
      message: '¿Qué tipo de medida quieres convertir?',
      choices: medidas
    }
  ]);

  const unidades = convert().possibilities(tipo);

  const respuestas = await inquirer.prompt([
    {
      type: 'list',
      name: 'from',
      message: 'Unidad de origen:',
      choices: unidades
    },
    {
      type: 'list',
      name: 'to',
      message: 'Unidad de destino:',
      choices: unidades
    },
    {
      type: 'input',
      name: 'valor',
      message: '¿Qué valor deseas convertir?',
      validate: input => !isNaN(input) || 'Por favor ingresa un número válido.'
    }
  ]);

  const resultado = convert(Number(respuestas.valor)).from(respuestas.from).to(respuestas.to);
  const mensaje = `${respuestas.valor} ${respuestas.from} = ${resultado.toFixed(4)} ${respuestas.to}`;

  console.log(chalk.yellow(`\n${mensaje}\n`));
  fs.appendFileSync('historial.txt', mensaje + '\n');
}

function showAvailableUnits() {
  const medidas = convert().measures();

  console.log(chalk.cyan('\nUnidades disponibles por categoría:\n'));
  medidas.forEach(tipo => {
    const unidades = convert().possibilities(tipo);
    console.log(`${chalk.bold(tipo)}: ${unidades.join(', ')}`);
  });
  console.log('');
}

function showRecord() {
  if (!fs.existsSync('historial.txt')) {
    console.log(chalk.red('\nNo hay historial de conversiones aún.\n'));
    return;
  }

  const historial = fs.readFileSync('historial.txt', 'utf8');
  console.log(chalk.magenta('\nHistorial de conversiones:\n'));
  console.log(historial || 'Historial vacío.');
}

async function continuar() {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'continuar',
      message: 'Presiona ENTER para continuar...'
    }
  ]);
}

mainMenu();
