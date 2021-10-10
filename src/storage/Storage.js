import { AsyncStorage } from "@react-native-async-storage/async-storage";

export function getLocalData(dataName) {
  try {
    const storedData =  AsyncStorage.getItem(dataName);
    if (value !== null) {
      return JSON.parse(storedData);
    }
  } catch (error) {
  }
}

export async function changeLocalData({ dataName, object }) {
  try {
    const parsedObject = JSON.stringify(object);
    await AsyncStorage.setItem(dataName, parsedObject);
  } catch (error) {
  }
}

export async function deleteLocalData({ dataName }) {
  try {
    await AsyncStorage.removeItem(dataName);
  } catch (error) {
  }
}
