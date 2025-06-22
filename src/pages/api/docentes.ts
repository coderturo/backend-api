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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Docente[]>
) {
  res.status(200).json(docentes);
}
