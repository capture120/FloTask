# FloTask
FloTask is a smart app that syncs your work with your body and mind! Connect your wearable device and calendar to get personalized and engaging suggestions for the best tasks and breaks to do based on your focus, energy, and mood.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)
- [expo](https://expo.io/) (need to create an expo account)

* If you have any errors in tsconfig.json, you may need to yarn install the missing dev dependencies.
Ex: ```yarn add --dev @types/graceful-fs```

### Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/capture120/FloTask.git
    cd FloTask
    ```

2. **Install Dependencies**
    ```bash
    cd client
    yarn global add expo-cli
    yarn install
    ```

    * if expo-cli is not recognized you may need to add expo-cli to path with
    ```bash
    export PATH="$(yarn global bin):$PATH" # OR
    npm install -g eas-cli
    ```

### Running App in Localhost Web Browser
1. npx expo start --tunnel
2. Open App
    * Web: Press s to switch to GO build. Press 'w' in terminal to open app in browser
    * Android, IOS: must build for functionality

### Running App in Simulator

*** Note: After building and pushing to expo cloud, you do not have to build again unless you have new dependencies.
If you team already has a functional build on Expo cloud, skip to step 3.

1. **Create client build**
    ***Build Locally***
    If Windows:
    1. Install WSL2
    2. Add ANDROID_NDK_HOME=C:\Users\[Your User]\AppData\Local\Android\Sdk\platform-tools in your path environmental variable
    3. Add JAVA_HOME environmental variable in PATH. Find path to JAVA_HOME by running ```where java``` in cmd
    4. run npx expo install --fix
    ```bash
    eas build --local
    ```
    ***Build and Push to Cloud***
    ```bash
    cd client
    eas login *** login with created expo account
    eas build:configure 
    # ios
    eas build -p ios --profile development
    # android
    eas build --platform android --profile development
    ```
2. **Download the build and drag into simulator**
    You can install an android simulator, or with mac use xcode. Alternatively you can skip to step 3 and use the expo client to run the app from the cloud.

3. **Start the client**
    ```bash
    cd client
    npx expo start --dev-client
    ```

   * You can then open the app in the Expo app in the simulator.
   * This is useful for experimenting with other builds made by you or your team from Expo Cloud
