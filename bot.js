const puppeteer = require("puppeteer");
const fs = require("fs-extra");

console.log(`
██████╗  █████╗ ███╗   ██╗███████╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝
██║  ██║███████║██╔██╗ ██║███████╗
██║  ██║██╔══██║██║╚██╗██║╚════██║
██████╔╝██║  ██║██║ ╚████║███████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
Auto Claim Haust Faucet
GitHub: https://github.com/qdans
`);

const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
const walletFile = "wallet.txt";
const logFile = "log.txt";

function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;
    console.log(logMessage);
    fs.appendFileSync(logFile, logMessage);
}

async function claimFaucet(wallet) {
    log(`🔹 Claiming faucet for wallet: ${wallet}`);
    const browser = await puppeteer.launch({ headless: config.headless });
    const page = await browser.newPage();

    try {
        await page.goto(config.faucet_url, { waitUntil: "networkidle2" });
        await page.type("input[type='text']", wallet, { delay: 50 });
        await page.click("button");
        log(`✅ Successfully claimed for wallet: ${wallet}`);
    } catch (error) {
        log(`❌ Failed to claim for wallet: ${wallet} | Error: ${error.message}`);
    } finally {
        await browser.close();
    }
}

async function runBot() {
    if (!fs.existsSync(walletFile)) {
        log("⚠️ File wallet.txt not found!");
        return;
    }

    const wallets = fs.readFileSync(walletFile, "utf8").split("\n").map(w => w.trim()).filter(w => w);
    if (wallets.length === 0) {
        log("⚠️ No wallets found in wallet.txt");
        return;
    }

    log("🚀 Starting bot...");

    for (const wallet of wallets) {
        await claimFaucet(wallet);
        log(`⏳ Waiting ${config.interval_minutes} minutes before next wallet...`);
        await new Promise(resolve => setTimeout(resolve, config.interval_minutes * 60000));
    }

    log("✅ All wallets processed, bot finished!");
}

runBot();
