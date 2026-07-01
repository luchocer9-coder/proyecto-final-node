import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const USERS = [
  { id: 1, email: "admin@techlab.com", password: "admin123" }
];

export const login = (req, res) => {
  try {
    const { email, password } = req.body;

    const user = USERS.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};