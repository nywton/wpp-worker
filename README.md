# WhatsApp Worker Client

## Description
A client application for managing WhatsApp services efficiently. This project allows you to handle tasks related to WhatsApp messaging and provides a user-friendly interface for interaction.

## Features
- [Capture Messages: capture messages from WhatsApp and store them in a database]
- [Integrations: integrations with other services like Ticktick, Trello, etc.]

## Requirements
- Node.js (version 20.18.0 or higher)
- npm (version 10.9.0 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nywton/wpp-worker.git
   cd wpp-worker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To start the development server, run:
```bash
npm run dev
```

Then it will show a QR code to scan.

## Launch Chrome
if you want to launch Chrome, edit your environment variables and set `SKIP_BROWSER`=true:
```txt
# environments/.env.dev
...
SKIP_BROWSER=false # change it to false if you want to launch Chrome
```


## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
