import {sendNotification} from "./telegram.js";
import {scrapeTemperature} from "./scrapeTemperature.js";

export const start = async () => {
  const {to_notify, message} = await scrapeTemperature()

  if (to_notify) {
    await sendNotification(message)
  }
}