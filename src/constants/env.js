let URL;

if (process.env.NODE_ENV === "production") {
  URL = "http://keetool1.xyz/";
} else {
  URL = "http://keetool1.xyz/";
}

export const BASE_URL = URL;
