import axios from "axios";
import fs from "fs";
import chalk from "chalk";

// ASCII Art
console.log(chalk.cyan(`
██████╗  █████╗ ███╗   ██╗███████╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝
██║  ██║███████║██╔██╗ ██║███████╗
██║  ██║██╔══██║██║╚██╗██║╚════██║
██████╔╝██║  ██║██║ ╚████║███████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
`));
console.log(chalk.yellow("Auto Claim Haust Faucet"));
console.log(chalk.green("GitHub: https://github.com/qdans\n"));

const FAUCET_URL = "https://faucet.haust.app/api/claim";
const INTERVAL = 20 * 60 * 1000; // 20 minutes in milliseconds

// Read wallet addresses from file
const loadWallets = () => {
    if (!fs.existsSync("wallets.txt")) {
        console.log(chalk.red("Error: wallets.txt not found!"));
        process.exit(1);
    }
    return fs.readFileSync("wallets.txt", "utf8").split("\n").map(addr => addr.trim()).filter(Boolean);
};

const wallets = loadWallets();
if (wallets.length === 0) {
    console.log(chalk.red("No wallets found in wallets.txt!"));
    process.exit(1);
}

let currentWalletIndex = 0;

const claimFaucet = async (wallet) => {
    try {
        console.log(chalk.blue(`Claiming faucet for wallet: ${wallet}`));
        const response = await axios.post(FAUCET_URL, { address: wallet }, {
            headers: { "Content-Type": "application/json" }
        });
        console.log(chalk.green(`[SUCCESS] Claimed for ${wallet}: ${response.data.message || "Success"}`));
    } catch (error) {
        console.log(chalk.red(`[ERROR] Failed for ${wallet}: ${error.response ? error.response.data : error.message}`));
    }
};

function startCountdown(duration, callback) {
    let timeLeft = duration / 1000;
    const countdown = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = (timeLeft % 60).toFixed(0);
        process.stdout.write(`\rWaiting ${minutes} minutes ${seconds} seconds before next claim... `);
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            console.log("\nClaiming now...");
            callback();
        }
        timeLeft--;
    }, 1000);
}

const startClaiming = () => {
    claimFaucet(wallets[currentWalletIndex]);
    currentWalletIndex = (currentWalletIndex + 1) % wallets.length;
    console.log(chalk.yellow("Waiting 20 minutes before next claim..."));
    startCountdown(INTERVAL, startClaiming);
};

console.log(chalk.magenta(`Starting auto-claim bot for ${wallets.length} wallets...`));
startClaiming();
