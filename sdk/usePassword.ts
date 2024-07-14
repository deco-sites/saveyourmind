const enc = new TextEncoder();

const buffToBase64 = (buff: Uint8Array): string =>
  btoa(String.fromCharCode(...buff));

const base64ToBuf = (b64: string): Uint8Array =>
  Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

const getPasswordKey = async (password: string): Promise<CryptoKey> =>
  await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"],
  );

const deriveKey = async (
  passwordKey: CryptoKey,
  salt: Uint8Array,
): Promise<ArrayBuffer> =>
  await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 250000,
      hash: "SHA-256",
    },
    passwordKey,
    256,
  );

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const passwordKey = await getPasswordKey(password);
  const hash = await deriveKey(passwordKey, salt);
  const hashArray = new Uint8Array(hash);
  const saltBase64 = buffToBase64(salt);
  const hashBase64 = buffToBase64(hashArray);

  return `${saltBase64}:${hashBase64}`;
}

export async function verifyPassword(
  storedHash: string,
  password: string,
): Promise<boolean> {
  const [saltBase64, hashBase64] = storedHash.split(":");
  const salt = base64ToBuf(saltBase64);
  const storedHashArray = base64ToBuf(hashBase64);
  const passwordKey = await getPasswordKey(password);
  const derivedHash = await deriveKey(passwordKey, salt);
  const derivedHashArray = new Uint8Array(derivedHash);

  return derivedHashArray.every((byte, i) => byte === storedHashArray[i]);
}
