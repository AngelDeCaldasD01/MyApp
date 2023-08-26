# MyApp - Pokedex in React Native and Metro using Typescript

## Generate apk

```bash
npx react-native run-android --variant=release
```

```bash
keytool -genkey -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

You should generate an apk file called "app-release"

```bash
cd android/app/build/outputs/apk/release
```
