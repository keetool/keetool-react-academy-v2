let URL;

if (process.env.NODE_ENV === "production") {
  URL = location.protocol + "//" + location.hostname + "/";
} else {
  URL = "https://test.keetool1.xyz/";
}

export const BASE_URL = URL;
export const DOMAIN_URL = "https://keetool1.xyz/";
export const DOMAIN_API_URL = DOMAIN_URL + "api/";
export const BASE_API_URL = URL + "client-api/";
