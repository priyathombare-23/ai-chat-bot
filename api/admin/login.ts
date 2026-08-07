export default function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const { username, password } = req.body || {};

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return res.status(500).json({
      success: false,
      error: "Admin login is not configured on the server.",
    });
  }

  if (username === adminEmail && password === adminPassword) {
    return res.status(200).json({
      success: true,
      token: "kjsit-admin-session",
    });
  }

  return res.status(401).json({
    success: false,
    error: "Invalid admin credentials.",
  });
}
