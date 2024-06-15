import EncryptedStorage from "react-native-encrypted-storage"

export async function getEncryptedString(key: string): Promise<string | null> {
  return EncryptedStorage.getItem(key)
}

export async function setEncryptedString(key: string, value: string) {
  try {
    await EncryptedStorage.setItem(key, value)
    return null
  } catch {
    return null
  }
}

export async function removeEncryptedString(key: string) {
  try {
    await EncryptedStorage.removeItem(key)
    return null
  } catch {
    return null
  }
}
