import axios from "axios";
import {strict as assert} from 'assert';

assert(process.env.TELEGRAM_BOT_KEY, 'TELEGRAM_BOT_KEY env is required, define it in .env file')
assert(process.env.TELEGRAM_CHAT_ID, 'TELEGRAM_CHAT_ID env is required, define it in .env file')

export const sendNotification = async (message = 'Ping 🏓') => {
  const {body} = await axios.get(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_KEY}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`)

  return body
}