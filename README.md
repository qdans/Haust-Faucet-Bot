# Haust Faucet Bot

## Overview
Haust Faucet Bot is an automated tool designed to claim free tokens from the [Haust Faucet](https://faucet.haust.app/) at regular intervals. This bot supports multiple wallets and ensures efficient claiming while adhering to the cooldown period.

## Features
- 🚀 **Automated claiming** every 20 minutes per wallet.
- 🔄 **Multi-wallet support**, sequentially processing claims.
- 🌐 **Lightweight & easy-to-use**, runs on Node.js.
- 🛠️ **Configurable wallet list** via `wallets.txt`.

## Requirements
- Node.js (v16 or higher recommended)
- NPM or Yarn

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/qdans/Haust-Faucet-Bot.git
   cd Haust-Faucet-Bot
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure your wallets:
   - Open `wallets.txt` and add your wallet addresses in the format:
   ```txt
   WALLET_ADDRESS_1
   WALLET_ADDRESS_2
   WALLET_ADDRESS_3
   ```

4. Start the bot:
   ```sh
   npm start
   ```

## How It Works
- The bot reads wallet addresses from `wallets.txt`.
- It sends a claim request to the Haust Faucet API.
- After claiming, it waits 20 minutes before moving to the next wallet.
- The cycle repeats indefinitely.

## Example Log Output
```
██████╗  █████╗ ███╗   ██╗███████╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝
██║  ██║███████║██╔██╗ ██║███████╗
██║  ██║██╔══██║██║╚██╗██║╚════██║
██████╔╝██║  ██║██║ ╚████║███████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
Auto Claim Haust Faucet
GitHub: https://github.com/qdans

[SUCCESS] Claimed for 0xYourWalletAddress1: Success Message
Waiting 20 minutes before next claim...
```

## Contributing
Feel free to fork the repository and submit pull requests to improve the bot.

## Disclaimer
This bot is for educational purposes only. Use it responsibly and comply with Haust Faucet's terms of service.

## License
MIT License. See `LICENSE` for details.

