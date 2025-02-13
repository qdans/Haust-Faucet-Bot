const fs = require('fs');
const axios = require('axios');
const cron = require('node-cron');
const chalk = require('chalk');
const config = require('./config');

// ASCII Art dan Identitas Bot
const ASCII_ART = `
${chalk.cyan('██████╗  █████╗ ███╗   ██╗███████╗')}
${chalk.cyan('██╔══██╗██╔══██╗████╗  ██║██╔════╝')}
${chalk.cyan('██║  ██║███████║██╔██╗ ██║███████╗')}
${chalk.cyan('██║  ██║██╔══██║██║╚██╗██║╚════██║')}
${chalk.cyan('██████╔╝██║  ██║██║ ╚████║███████║')}
${chalk.cyan('╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝')}
${chalk.yellow('Auto Claim Haust Faucet')}
${chalk.green('GitHub: https://github.com/qdans/Haust-Faucet-Bot')}
`;

console.log(ASCII_ART);

// Baca wallet dari file wallet.txt
function readWallets() {
    try {
        const data = fs.readFileSync('wallet.txt', 'utf8');
        const wallets = data.split('\n').filter(wallet => wallet.trim() !== '');
        return wallets;
    } catch (error) {
        console.error(chalk.red('Error reading wallet.txt:'), error);
        process.exit(1);
    }
}

// Fungsi untuk melakukan claim faucet
async function claimFaucet(walletAddress) {
    try {
        const response = await axios.post(config.faucetUrl, {
            address: walletAddress
        });

        if (response.data.success) {
            console.log(chalk.green(`Successfully claimed faucet for wallet: ${walletAddress}`));
        } else {
            console.log(chalk.red(`Failed to claim faucet for wallet: ${walletAddress}`));
        }
    } catch (error) {
        console.log(chalk.red(`Error claiming faucet for wallet: ${walletAddress}`));
        console.error(error);
    }
}

// Fungsi untuk menjalankan bot dengan interval yang ditentukan
function startBot() {
    const wallets = readWallets();
    let index = 0;

    cron.schedule(`*/${config.claimInterval} * * * *`, () => {
        if (index < wallets.length) {
            const walletAddress = wallets[index];
            console.log(chalk.blue(`Claiming faucet for wallet: ${walletAddress}`));
            claimFaucet(walletAddress);
            index++;
        } else {
            console.log(chalk.yellow('All wallets have been processed. Restarting from the first wallet.'));
            index = 0;
        }
    });
}

// Jalankan bot
startBot();
