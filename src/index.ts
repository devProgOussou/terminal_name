import figlet from 'figlet';
import gradient from 'gradient-string';
import chalk from 'chalk';
import ora from 'ora';
import delay from 'delay';

// Configuration des dégradés de couleurs
const rainbowColors = gradient(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']);
const blueGreen = gradient(['#0000FF', '#00FFFF', '#00FF00']);

// Fonction principale d'animation
async function animateOusmane() {
  console.clear();

  // Spinner de chargement
  const spinner = ora({
    text: 'Préparation de votre environnement de travail...',
    color: 'blue'
  }).start();

  await delay(1500);
  spinner.succeed('Environnement prêt!');
  await delay(500);

  // Animation lettre par lettre
  const name = 'OUSMANE';
  let displayText = '';

  for (const char of name) {
    displayText += char;
    console.clear();
    console.log('\n');
    console.log(
      blueGreen(
        figlet.textSync(displayText, {
          font: 'ANSI Shadow',
          horizontalLayout: 'fitted'
        })
      )
    );
    await delay(250);
  }

  // Affichage final du nom avec animation de couleurs
  console.clear();
  console.log('\n');
  console.log(
    rainbowColors(
      figlet.textSync('OUSMANE', {
        font: 'ANSI Shadow',
        horizontalLayout: 'full'
      })
    )
  );

  // Informations du système
  const now = new Date();
  const formattedDate = now.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const time = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  // Affichage des informations en bas
  console.log('\n');
  console.log(chalk.cyan('┌──────────────────────────────────────────────────────┐'));
  console.log(chalk.cyan('│') + chalk.yellow(` 🕒  ${time} - ${formattedDate}`.padEnd(52)) + chalk.cyan('│'));
  console.log(chalk.cyan('│') + chalk.green(` 💻  Terminal WSL actif et prêt!`.padEnd(52)) + chalk.cyan('│'));
  console.log(chalk.cyan('└──────────────────────────────────────────────────────┘'));
  console.log('\n');
}

// Exécuter l'animation
animateOusmane().catch(console.error);