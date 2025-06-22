import type { NextApiRequest, NextApiResponse } from 'next';

type Docente = {
  nombre: string;
  correo: string;
  rol: string;
  foto: string;
};

const docentes: Docente[] = [
  {
    nombre: "Luis Pérez",
    correo: "luisp@ejemplo.com",
    rol: "Coordinador",
    foto: "https://miweb.com/foto1.jpg"
  },
  {
    nombre: "Ana Gómez",
    correo: "anag@ejemplo.com",
    rol: "Tutor",
    foto: "https://miweb.com/foto2.jpg"
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight (CORS) request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Normal response
  res.status(200).json(docentes);
}
