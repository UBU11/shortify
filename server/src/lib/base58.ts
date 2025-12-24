import basex from "base-x";
import { buffer } from "node:stream/consumers";

const BASE = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const bs58 = basex(BASE);

export const bs58Encoder = (bufferData: Buffer): string => {
  return bs58.encode(bufferData);
};
