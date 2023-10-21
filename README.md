# FloTask
FloTask is a smart app that syncs your work with your body and mind! Connect your wearable device and calendar to get personalized and engaging suggestions for the best tasks and breaks to do based on your focus, energy, and mood.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [expo](https://expo.io/)



### Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/capture120/FloTask.git
    cd FloTask
    ```

2. **Install dependencies**
    ```bash
    cd client
    npm install
    npm install --global eas-cli
    ```


    * If you get an error about `expo-cli` not being installed, run `npm install -g expo-cli` and then run `npm install` again.

### Running

1. **Create client build**
    ```bash
    cd client
    eas login
    eas build:configure
    # ios
    eas build -p ios --profile development
    # android
    eas build -p android --profile development
    
    ```
2. **Download the build and drag into simulator**

1. **Start the client**
    ```bash
    cd client
    npx expo start --dev-client
    ```

   * You can then open the app in the Expo app in the simulator.
