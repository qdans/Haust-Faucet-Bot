# Haust Faucet Bot

This bot automatically claims faucet rewards from [Haust Faucet](https://faucet.haust.app/) at a set interval using Puppeteer.

## 🚀 Features
- **Multi-wallet support**: Reads multiple wallets from `wallet.txt`.
- **Auto-claim every 20 minutes** (configurable in `config.json`).
- **Headless mode** for silent operation (configurable).
- **Logging system**: Logs all activity in `log.txt`.

## 📦 Installation

1. **Install Node.js** (if not installed)  
   Download and install [Node.js](https://nodejs.org/).
   
2. **Clone or Download this repository**  
   ```sh
   git clone https://github.com/yourusername/HaustFaucetBot.git
   cd HaustFaucetBot
   ```
   Or extract the downloaded ZIP file.

3. **Install dependencies**  
   ```sh
   npm install
   ```

## ⚙️ Configuration

Modify `config.json` to adjust settings:

```json
{
  "faucet_url": "https://faucet.haust.app/",
  "interval_minutes": 20,
  "headless": true
}
```
- **`interval_minutes`**: Set the delay between claims (default: 20 minutes).
- **`headless`**: Set `false` if you want to see the browser while running.

## 📝 Add Wallets

Add your wallet addresses in `wallet.txt`, one per line:

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

## 📜 Logs

All claim attempts are recorded in `log.txt`.

## 🛑 Stopping the Bot

To stop the bot, press **Ctrl + C** in the terminal.

## 🤝 Contributing

Feel free to fork and improve the bot. Pull requests are welcome!

## ⚠️ Disclaimer

This bot is for educational purposes. Use at your own risk!
