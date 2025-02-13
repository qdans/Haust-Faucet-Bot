# Haust Faucet Bot

## 📌 Overview
Haust Faucet Bot is an automated script that periodically claims rewards from [Haust Faucet](https://faucet.haust.app/) using Puppeteer. It supports multiple wallets, customizable intervals, and headless mode for seamless operation.

## 🚀 Features
- **Multi-wallet support**: Reads multiple wallet addresses from `wallet.txt`.
- **Automated claiming**: Claims rewards at a set interval (default: 20 minutes, configurable).
- **Headless mode**: Runs in the background without opening a browser (optional).
- **Logging system**: Tracks all activities in `log.txt` for monitoring.

## 📦 Installation
### 1️⃣ Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/qdans/Haust-Faucet-Bot.git
cd Haust-Faucet-Bot
```
Alternatively, you can download and extract the ZIP file.

### 3️⃣ Install Dependencies
```sh
npm install
```

## ⚙️ Configuration
Edit `config.json` to customize bot settings:
```json
{
  "faucet_url": "https://faucet.haust.app/",
  "interval_minutes": 20,
  "headless": true
}
```
- **`interval_minutes`**: Adjust claim interval (default: 20 minutes).
- **`headless`**: Set `false` to display the browser while running.

## 📝 Adding Wallet Addresses
List wallet addresses in `wallet.txt`, one per line:
```
0x1234567890abcdef1234567890abcdef12345678
0xabcdefabcdefabcdefabcdefabcdefabcdefabcd
0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef
```

## ▶️ Running the Bot
Start the bot using:
```sh
npm start
```
or
```sh
node bot.js
```

## 📜 Logging
All claim attempts and activities are logged in `log.txt` for tracking purposes.

## 🛑 Stopping the Bot
To stop the bot, press **Ctrl + C** in the terminal.

## ⚠️ Disclaimer
This bot is intended for educational purposes only. Use it responsibly and at your own risk.

---
### 💡 Need Help?
For issues or suggestions, open an [issue](https://github.com/qdans/Haust-Faucet-Bot/issues) on GitHub.

Happy claiming! 🚀

