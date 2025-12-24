import basex from "base-x";

const BASE = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const bs58 = basex(BASE);

const bs58Encoder = (bufferData: Buffer): string => {
  return bs58.encode(bufferData);
};

const bs58Decoder = (encodedData: string): Buffer => {
  const dataByte = bs58.decode(encodedData);
  return Buffer.from(dataByte);
};

export { bs58Encoder, bs58Decoder };
