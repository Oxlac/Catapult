/**
 * This class deals with sending in app notifications and alerts
 *
 */
import { Notifier } from "react-native-notifier"
import { CustomAlert } from "app/components/CustomAlert"
import Vibrator from "./Vibrator"

class InAppNotifier {
  static showAlert(
    title: string,
    description: string,
    type: "success" | "error" | "info" | "warn" = "info",
    infinite = false,
  ) {
    if (type === "success") {
      Vibrator.Success()
    } else if (type === "error") {
      Vibrator.Error()
    }
    Notifier.showNotification({
      title,
      description,
      Component: CustomAlert,
      componentProps: {
        alertType: type,
      },
      translucentStatusBar: true,
      duration: infinite ? 0 : 4000,
      swipeEnabled: !infinite,
    })
  }
}

export default InAppNotifier
