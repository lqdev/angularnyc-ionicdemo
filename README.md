# 6 Apps 1 Code

Cross platform application that runs on mobile, web, and desktops

## Run mobile

```bash
npm install
ionic lab
```

In your browser visit localhost:8100/lab

## Access website 

In your browser visit localhost:8100

## Desktop

Follow these instructions in the same top-level folder your Ionic application is located.

### Clone Electron Quick Start repository
```bash
git clone https://github.com/electron/electron-quick-start
```
### Update main.js loadURL.pathname to point to Ionic application
```bash
# Go into the repository
cd electron-quick-start
```

```javascript
//Before
pathname: path.join(__dirname,'index.html')

//After
pathname: path.join(__dirname,'../bda/www/index.html')
```

### Install dependencies and start desktop application
```bash
# Install the dependencies and run
npm install && npm start
```