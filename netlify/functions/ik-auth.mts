import ImageKit from "imagekit";

// Initialize ImageKit
const imagekit = new ImageKit({
  publicKey: process.env.VITE_IK_PUBLIC_KEY!,
  privateKey: process.env.VITE_IK_PRIVATE_KEY!,
  urlEndpoint: process.env.VITE_IK_URL_ENDPOINT!,
});

export const handler = async (event: any) => {
  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const authenticationParameters = imagekit.getAuthenticationParameters();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authenticationParameters),
    };
  } catch (error) {
    console.error("Auth error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to authenticate" }),
    };
  }
};