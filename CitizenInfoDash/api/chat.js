export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  try {
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Chat error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
