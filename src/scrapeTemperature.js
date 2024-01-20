import axios from "axios";
import * as cheerio from "cheerio";
import {strict as assert} from 'assert';

assert(process.env.TEMPERATURE_THRESHOLD, 'TEMPERATURE_THRESHOLD env is required, define it in .env file')
const TEMPERATURE_THRESHOLD = parseInt(process.env.TEMPERATURE_THRESHOLD)

export const scrapeTemperature = async () => {
  const {data} = await axios.get(`https://www.ilmeteo.net/meteo_Roma-Europa-Italia-Roma--1-31010.html`)

  const $ = cheerio.load(data);
  const temperature_text = $('.dato-temperatura').text().trim();

  const temperature = parseInt(temperature_text.replace(/\D/g, ''));

  const to_notify = temperature < TEMPERATURE_THRESHOLD
  const message = `Temperature in Rome is ${temperature}°C`;

  return {to_notify, message}
}