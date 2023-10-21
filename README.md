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

### Running the app

1. **Create client build**
    ```bash
    cd client
    eas login # login with created expo account
    eas build:configure 
    # ios
    eas build -p ios --profile development
    # android
    eas build --profile development --platform android

    # to build app with local machine, run: build: 'eas build --local' or 'expo-cli start --tunnel'
    
    ```
2. **Download the build and drag into simulator**
    You can install an android simulator, or with mac use xcode


1. **Start the client**
    ```bash
    cd client
    npx expo start --dev-client (for local machine: npx expo start --tunnel)
    ```

   * You can then open the app in the Expo app in the simulator.
