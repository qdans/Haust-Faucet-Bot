# Haust Faucet Bot

## 📌 Overview
Haust Faucet Bot is an automated script that periodically claims rewards from [Haust Faucet](https://faucet.haust.app/) using Puppeteer. It supports multiple wallets, customizable intervals, and headless mode for seamless operation.

## 🚀 Features
- **Multi-wallet support**: Reads multiple wallet addresses from `wallet.txt`.
- **Automated claiming**: Claims rewards at a set interval (default: 20 minutes, configurable).
- **Headless mode**: Uses Puppeteer's new headless mode for better performance.
- **Logging system**: Tracks all activities in `log.txt` for monitoring.
- **Root-friendly execution**: Supports running without sandbox issues.

## 📞 Installation
### 1⃣ Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### 2⃣ Clone the Repository
```sh
git clone https://github.com/qdans/Haust-Faucet-Bot.git
cd Haust-Faucet-Bot
```
Alternatively, you can download and extract the ZIP file.

### 3⃣ Install Dependencies
```sh
npm install
```

## ⚙️ Configuration
Edit `config.json` to customize bot settings:
```json
{
  "headless": "new",
  "interval": 20,
  "faucetUrl": "https://faucet.haust.app/"
}
```
- **`interval_minutes`**: Adjust claim interval (default: 20 minutes).
- **`headless`**: Uses Puppeteer's `"new"` mode to avoid deprecation warnings.

## 📝 Adding Wallet Addresses
List wallet addresses in `wallet.txt`, one per line:
```
0xYourWalletAddress1
0xYourWalletAddress2
0xYourWalletAddress3
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

## 🐝 Troubleshooting
- If running as root, use:
  ```sh
  node bot.js --no-sandbox
  ```
- If Puppeteer fails to launch, install missing dependencies:
  ```sh
  apt-get install -y libatk1.0-0 libgtk-3-0 libx11-xcb1 libnss3 libxcomposite1 libxrandr2 libasound2
  ```

## 💜 Logging
All claim attempts and activities are logged in `log.txt` for tracking purposes.

## 🛡️ Stopping the Bot
To stop the bot, press **Ctrl + C** in the terminal.

## ⚠️ Disclaimer
This bot is intended for educational purposes only. Use it responsibly and at your own risk.

---
### 💡 Need Help?
For issues or suggestions, open an [issue](https://github.com/qdans/Haust-Faucet-Bot/issues) on GitHub.

Happy claiming! 🚀
