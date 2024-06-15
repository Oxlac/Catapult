import React, { FC } from "react"
import { View } from "react-native"
import { Text } from "./Text"
import { Ionicons } from "@expo/vector-icons"

const alertIcons = {
  success: "checkmark-circle",
  error: "alert-circle",
  info: "information-circle",
  warn: "warning",
}

interface CustomAlertProps {
  title: string
  description: string
  alertType: "success" | "error" | "info" | "warn"
}

export const CustomAlert: FC<CustomAlertProps> = ({ title, description, alertType }) => {
  const bgColorClass = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warn: "bg-yellow-500",
  }[alertType]
  const iconName = alertIcons[alertType]
  return (
    // change the bg color based on the alert type
    <View
      className={` rounded-[10px] ${bgColorClass} p-[15px] flex-row space-x-[10] item-center w-11/12 self-center`}
    >
      <Ionicons name={iconName} size={24} color="white" />
      <View>
        <Text className="text-darkTheme-text" preset="bold">
          {title}
        </Text>
        <Text preset="default" className="text-[12px]">
          {description}
        </Text>
      </View>
    </View>
  )
}
