const devBaseURL = "https://mock.apifox.cn/m1/1300795-0-default";
const proBaseURL = "https://mock.apifox.cn/m1/1300795-0-default";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
