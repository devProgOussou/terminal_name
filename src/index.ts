import figlet from 'figlet';
import gradient from 'gradient-string';
import chalk from 'chalk';
import ora from 'ora';
import delay from 'delay';

const elegantGold = gradient(['#FFD700', '#FFA500', '#FF8C00', '#DAA520', '#B8860B']);
// const deepOcean = gradient(['#1E90FF', '#4169E1', '#0000CD', '#191970', '#000080']);
// const purpleRoyal = gradient(['#9370DB', '#8A2BE2', '#7B68EE', '#6A5ACD', '#483D8B']);
// const sunsetGlow = gradient(['#FF6347', '#FF4500', '#FF0000', '#DC143C', '#8B0000']);
const emeraldTeal = gradient(['#2E8B57', '#3CB371', '#20B2AA', '#008B8B', '#008080']);

async function animateOusmane() {
  console.clear();

  const spinner = ora({
    text: 'Préparation de votre environnement de travail...',
    color: 'cyan'
  }).start();

  await delay(1500);
  spinner.succeed('Environnement prêt!');
  await delay(500);

  const name = 'OUSMANE';
  let displayText = '';

  for (const char of name) {
    displayText += char;
    console.clear();
    console.log('\n');
    console.log(
      emeraldTeal(
        figlet.textSync(displayText, {
          font: 'ANSI Shadow',
          horizontalLayout: 'fitted'
        })
      )
    );
    await delay(250);
  }

  console.clear();
  console.log('\n');
  console.log(
    elegantGold(
      figlet.textSync('OUSMANE', {
        font: 'ANSI Shadow',
        horizontalLayout: 'full'
      })
    )
  );

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

  console.log('\n');
  console.log(chalk.hex('#1E90FF')('┌──────────────────────────────────────────────────────┐'));
  console.log(chalk.hex('#1E90FF')('│') + chalk.hex('#FFD700')(` 🕒  ${time} - ${formattedDate}`.padEnd(52)) + chalk.hex('#1E90FF')('│'));
  console.log(chalk.hex('#1E90FF')('│') + chalk.hex('#20B2AA')(` 💻  Terminal WSL actif et prêt!`.padEnd(52)) + chalk.hex('#1E90FF')('│'));
  console.log(chalk.hex('#1E90FF')('└──────────────────────────────────────────────────────┘'));
  console.log('\n');
}

animateOusmane().catch(console.error);