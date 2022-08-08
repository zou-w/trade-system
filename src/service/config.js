const devBaseURL = "http://zouwen.top:8088/";
const proBaseURL = "http://zouwen.top:8088/";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
