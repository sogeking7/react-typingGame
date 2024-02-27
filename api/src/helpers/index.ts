import crypto from "crypto";

const SECRET = "Hello World!";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};

export const getRandom = (min: number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}