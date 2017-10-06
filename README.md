# 6 Apps 1 Code

Sani Yusuf

saniyusuf@gmail.com

## Ionic

### Cross-Platform Components

-   All components auto-adjust according to what platform they're on
-   Icon library
-   Customizable on different levels

### 1st Class CLI Tool

-   Handles generation and serving
-   Cordova/Electron build
-   Typescript transpiling
-   Error reporting
-   Code splitting & code bundling with tree shaking
    -   All parts of application that are not being used are removed.

## Demo

### Mobile

-   Install

        sudo npm install -g ionic

-   Create Project

        ionic start bda blank

-   Launch Project

        cd bda
        
        ionic lab

-   Run natively

        ionic cordova run ios

### Web

-   No different. Works the same.
-   Access via localhost:<port> without lab path in path
-   Can take advantage of service worker which allows you unlimited storage on device
    -   Allows proxy network requests
    -   Solved flaky connection problem
-   Service worker included in Ionic by default
    -   Uncomment code in index.html

### Desktop

-   Offline is a must

-   Electron

    -   Clone electron quickstart
    
        git clone https://github.com/electron/electron-quick-start
    
    -   Install Node Modules
    
        cd electron-quick-start
        npm install
    
    -   Run Electron
    
        npm start

## Miscellaneous

-   Lynda Course: Ionic 3.0 for Mobile App Developers
-   StencilJS
    -   Allows you to create your own web components
-   UI.SCHOOL