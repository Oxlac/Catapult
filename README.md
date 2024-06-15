<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://github.com/Oxlac/Catapult/blob/main/assets/logo.png?raw=true" alt="Logo" width="100" height="100">

  <h3 align="center">Catapult React Native Boilerplate</h3>

  <p align="center">
    Batteries included React Native boilerplate heavily inspired by the <a href="https://github.com/infinitered/ignite">Ignite Boilerplate</a>
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>View Package »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

A highly opinionated React Native boilerplate with batteries included, based off the widely used and battle tested [Ignite Boilerplate](https://github.com/infinitered/ignite). This is the react native boilerplate that [Oxlac Tech LLP](https://oxlac.com) uses on a daily basis to build our client's applications and our own mobile apps. We initially started with the ignite boilerplate and as we developed more apps we noticed we where adding the same things over and over again. This is where the idea for this boilerplate took off. Numerous packages and little features have been added to the ignite boilerplate to make it more `batteries included` from the start. Below are some of the features that have been added. We will continue to add more features to this boilerplate as we develop more apps.

### Features

- Uses Battle Tested [Ignite Boilerplate](https://github.com/infinitered/ignite) as a base
- Adds [nativewind](https://github.com/nativewind/nativewind) for styling
- Adds widely used [Modals](https://github.com/react-native-community/react-native-modal) and [Bottom Sheet](hhttps://github.com/gorhom/react-native-bottom-sheet) components
- Adds Persistent and Non Persistent Root Stores through Mobx state trees.
- Adds custom InApp Alerts using [react-native-notifier](https://github.com/seniv/react-native-notifier)
- Adds modern Vibrations for both Android and IOS using [react-native-haptic-feedback](https://github.com/react-native-haptic-feedback/react-native-haptic-feedback)
- Adds [react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage) for secure storage
- Adds Firebase Analytics and Remote Config Only. Other firebase packages are added as needed
- Adds alert to the user if there is no internet connection and another alert if the connection is restored.
- Works with `expo prebuild` and `expo go`.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Included Packages

The ignite boilerplate comes with a lot of packages that are used in the project. You can take a look [here] (https://github.com/infinitered/ignite) for the full list.

Catapult also installs a couple of packages that are not included in the ignite boilerplate. These are:

| Package                              | About                                   | Link                                                                                                                             |
| ------------------------------------ | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| @gorhom/bottom-sheet                 | Adds a bottom Sheet                     | [https://github.com/gorhom/react-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet)                       |
| @react-native-community/netinfo      | Check if internet is active on device   | [https://github.com/react-native-netinfo/react-native-netinfo](https://github.com/react-native-netinfo/react-native-netinfo)     |
| @react-native-firebase/analytics     | Adds Firebase Analytics                 | [https://rnfirebase.io/analytics/usage](https://rnfirebase.io/analytics/usage)                                                   |
| @react-native-firebase/app           | Base Firebase Package                   | [https://rnfirebase.io/](https://rnfirebase.io/)                                                                                 |
| @react-native-firebase/remote-config | Adds Firebase Remote Config             | [https://rnfirebase.io/remote-config/usage](https://rnfirebase.io/remote-config/usage)                                           |
| react-native-encrypted-storage       | Adds encrypted storage support          | [https://github.com/emeraldsanto/react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage) |
| react-native-haptic-feedback         | Adds native platform vibration patterns | [https://github.com/mkuczera/react-native-haptic-feedback](https://github.com/mkuczera/react-native-haptic-feedback)             |
| react-native-modal                   | Advanced modal creation                 | [https://github.com/react-native-modal/react-native-modal](https://github.com/react-native-modal/react-native-modal)             |
| react-native-notifier                | Create in App Alerts and Notifications  | [https://github.com/seniv/react-native-notifier](https://github.com/seniv/react-native-notifier)                                 |

### Persistent Root Stores vs Non Persistent Root Stores

Ignite boilerplate comes with a setup that allows you to create stores that are persisted across app launches. However, in our practical usage we have found that it is good to also have a set of stores that are not persisted across app launches. Catapult modifies the ignite boilerplate adding a `RootStore` that is not persisted across app launches and a `PersistentRootStore` that is persisted across app launches.

### Encrypted Storage

Catapult adds a `react-native-encrypted-storage` package that allows you to store sensitive data in encrypted storage on android and ios. This is useful for storing sensitive data such as API keys and passwords. The Oxlac Team use this package to store API Keys and also JWT Tokens for session data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

### Prerequisites

There are some packages that need to be installed before you can run the project.

- npm
- expo-cli
- git

### Installation

It is suggested that you install Catapult globally using npm. You can do this by running the following command:

```sh
npm install -g @oxlac/catapult
```

You can also install Catapult locally by cloning this repository and running the `npm install` command.

## Usage

To create a new project using catapult run the following command:

```sh
catapult launch
```

You will be prompted to enter the app name and bundle identifier and other information.

If you wish to automatically run the project after creation you can use the `--run` flag.

```sh
catapult launch --run
```

For printing debugging information run the following command:

```sh
catapult launch --debug
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Remove Expo Downgrade (temporary fix for an upstream bug)
- [ ] Option to view and add Oxlac Native Expo Modules when creating a new project
- [ ] Options to create base templates for different parts of the application (e.g. Auth, Payments, etc)

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Oxlac LLP - [website](https://oxlac.com) - contact@oxlac.com

Project Link: [https://github.com/oxlac/catapult](https://github.com/oxlac/catapult)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
