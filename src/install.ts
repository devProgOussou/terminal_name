import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

function installStartupScript(): void {
  const homeDir = process.env.HOME || '/home/user';
  const bashrcPath = path.join(homeDir, '.bashrc');
  const scriptPath = path.resolve(__dirname, 'index.js');

  if (!fs.existsSync(bashrcPath)) {
    console.log(chalk.yellow(`Le fichier ${bashrcPath} n'existe pas. Création...`));
    fs.writeFileSync(bashrcPath, '');
  }

  const bashrcContent = fs.readFileSync(bashrcPath, 'utf-8');

  const scriptToAdd = `
  # Animation OUSMANE au démarrage du terminal WSL
  if [ -f "${scriptPath}" ]; then
    node "${scriptPath}"
  fi
  `;

  if (bashrcContent.includes(scriptPath)) {
    console.log(chalk.yellow('🔄 Le script est déjà configuré dans votre .bashrc'));
  } else {
    fs.appendFileSync(bashrcPath, scriptToAdd);
    console.log(chalk.green('✅ Script d\'animation OUSMANE ajouté avec succès à votre .bashrc!'));
  }

  console.log(chalk.blue('\n🎉 Installation terminée!'));
  console.log(chalk.cyan('Pour voir l\'animation maintenant, exécutez:'));
  console.log(chalk.white('source ~/.bashrc'));
  console.log(chalk.cyan('ou redémarrez votre terminal WSL'));
}

installStartupScript();