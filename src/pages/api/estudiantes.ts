import type { NextApiRequest, NextApiResponse } from 'next';

type Estudiante = {
  nombre: string;
  grado: string;
  nivelRiesgo: string;
};

const estudiantes: Estudiante[] = [
  {
    nombre: "Pedro Martínez",
    grado: "5to",
    nivelRiesgo: "Alto"
  },
  {
    nombre: "María López",
    grado: "3ro",
    nivelRiesgo: "Bajo"
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

  res.status(200).json(estudiantes);
}
