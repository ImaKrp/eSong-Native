import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLocalData(dataName) {
  try {
    const storedData = await AsyncStorage.getItem(dataName);
    if (storedData !== null) {
      return JSON.parse(storedData);
    }
  } catch (error) {
  }
}

export async function changeLocalData(dataName, object) {
  try {
    const jsonValue = JSON.stringify(object);
    await AsyncStorage.setItem(dataName, jsonValue);
    alert("success saving data")
  } catch (e) {
    alert("error saving data")
  }
}

export async function deleteLocalData(dataName) {
  try {
    await AsyncStorage.removeItem(dataName);
  } catch (e) {
  }
}
