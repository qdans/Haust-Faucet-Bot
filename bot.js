import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const ASCII_ART = `
██████╗  █████╗ ███╗   ██╗███████╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝
██║  ██║███████║██╔██╗ ██║███████╗
██║  ██║██╔══██║██║╚██╗██║╚════██║
██████╔╝██║  ██║██║ ╚████║███████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
Auto Claim Haust Faucet Bot
GitHub: https://github.com/qdans
`;

console.log(ASCII_ART);

const configPath = path.resolve('config.json');
const walletsPath = path.resolve('wallet.txt');
const logFile = path.resolve('log.txt');

const loadConfig = () => {
    if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return {
        headless: true,
        interval: 20,
        faucetUrl: "https://faucet.haust.app/"
    };
};

const log = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}`;
    console.log(logMessage);
    fs.appendFileSync(logFile, logMessage + '\n');
};

const claimFaucet = async (wallet) => {
    log(`🚀 Starting bot...`);
    log(`🔹 Claiming faucet for wallet: ${wallet}`);

    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.goto(config.faucetUrl, { waitUntil: 'networkidle2' });

    try {
        await page.waitForSelector("input[type='text']");
        await page.type("input[type='text']", wallet);
        await page.waitForSelector("button");
        await page.click("button");
        log(`✅ Successfully claimed faucet for ${wallet}`);
    } catch (error) {
        log(`❌ Error claiming faucet for ${wallet}: ${error.message}`);
    }

    await browser.close();
};

const startBot = async () => {
    const config = loadConfig();
    const wallets = fs.readFileSync(walletsPath, 'utf8').split('\n').map(w => w.trim()).filter(Boolean);
    
    if (wallets.length === 0) {
        log("⚠️ No wallets found in wallet.txt");
        return;
    }
    
    for (const wallet of wallets) {
        await claimFaucet(wallet);
        log(`⏳ Waiting ${config.interval} minutes before the next claim...`);
        await new Promise(resolve => setTimeout(resolve, config.interval * 60 * 1000));
    }
};

startBot();
