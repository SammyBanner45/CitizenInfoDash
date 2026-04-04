export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Guard: ensure token is loaded
  const token = process.env.HF_TOKEN;
  if (!token) {
    console.error("HF_TOKEN is missing from environment variables!");
    return res.status(500).json({ error: "Server misconfiguration: HF_TOKEN not set." });
  }

  const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  try {
    const hfResponse = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await hfResponse.json();

    // Surface HF errors clearly to the frontend
    if (!hfResponse.ok) {
      console.error("HF API error:", JSON.stringify(result));
      return res.status(hfResponse.status).json({
        error: result?.error?.message || result?.error || "HuggingFace API error",
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Chat handler error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
