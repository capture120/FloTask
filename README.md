# FloTask
FloTask is a smart app that syncs your work with your body and mind! Connect your wearable device and calendar to get personalized and engaging suggestions for the best tasks and breaks to do based on your focus, energy, and mood.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)
- [expo](https://expo.io/) (need to create an expo account)

* If you have any errors in tsconfig.json, you may need to yarn install the missing dev dependencies.
Ex: ```yarn add --dev @types/graceful-fs```

### Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/capture120/FloTask.git
    cd FloTask
    ```

2. **Install dependencies**
    ```bash
    cd client
    yarn global add expo-cli
    yarn install
    ```

### Running

1. **Create client build**
    ```bash
    cd client
    eas init --id f3b2fbc0-7137-4ed1-9e74-75d7bfdd7850 # Overwrite existing project link
    eas login # login with created expo account
    eas build:configure
    eas build # for local dev environment build: eas build --local
    
    ```
2. **Download the build and drag into simulator**

1. **Start the client**
    ```bash
    cd client
    npx expo start --dev-client
    ```

   * You can then open the app in the Expo app in the simulator.
