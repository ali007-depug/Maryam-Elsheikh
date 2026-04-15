export const authenticator = async () => {
  try {
    const response = await fetch("/.netlify/functions/ik-auth");
    if (!response.ok) throw new Error(`Auth failed`);
    const data = await response.json();
    return {
      signature: data.signature,
      expire: data.expire,
      token: data.token,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Auth Error:", error.message);
    } else {
      // Handles cases where something weird was thrown (like a string)
      console.error("An unexpected error occurred:", error);
    }
    throw new Error(`Authentication failed`);
  }
};
