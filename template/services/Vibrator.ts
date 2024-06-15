/**
 * Implements vibration for both android and ios
 */
import { Platform } from "react-native"
import ReactNativeHapticFeedback from "react-native-haptic-feedback"

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
}

export class Vibrator {
  ButtonClick = () => {
    if (Platform.OS === "ios") {
      ReactNativeHapticFeedback.trigger("selection", options)
    } else {
      ReactNativeHapticFeedback.trigger("effectClick")
    }
  }

  MajorAction = () => {
    ReactNativeHapticFeedback.trigger("impactHeavy", options)
  }

  Selection = () => {
    if (Platform.OS === "ios") {
      ReactNativeHapticFeedback.trigger("selection", options)
    } else {
      ReactNativeHapticFeedback.trigger("effectTick", options)
    }
  }

  Error = () => {
    ReactNativeHapticFeedback.trigger("notificationError", options)
  }

  Success = () => {
    ReactNativeHapticFeedback.trigger("notificationSuccess", options)
  }
}

export default new Vibrator()
