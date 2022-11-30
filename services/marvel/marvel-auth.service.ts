import md5 from "md5";

export const generateAuthenticationString = () => {
  const ts = new Date().getTime();

  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;

  const hash = md5(`${ts}${privateKey}${publicKey}`);

  return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
};
