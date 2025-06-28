import type { NextApiRequest, NextApiResponse } from 'next';

type Docente = {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
};

const docentes: Docente[] = [
  { id: 1, nombre: "Luis Pérez", correo: "luisp@ejemplo.com", rol: "Coordinador" },
  { id: 2, nombre: "Ana Gómez", correo: "anag@ejemplo.com", rol: "Tutor" },
  { id: 3, nombre: "Carlos Ramírez", correo: "carlosr@ejemplo.com", rol: "Docente" },
  { id: 4, nombre: "Elena Torres", correo: "elenat@ejemplo.com", rol: "Tutor" },
  { id: 5, nombre: "José Rivas", correo: "joser@ejemplo.com", rol: "Docente" },
  { id: 6, nombre: "María Quispe", correo: "mariaq@ejemplo.com", rol: "Coordinadora" },
  { id: 7, nombre: "Fernando Ruiz", correo: "fernandor@ejemplo.com", rol: "Docente" },
  { id: 8, nombre: "Laura Vega", correo: "laurav@ejemplo.com", rol: "Tutor" },
  { id: 9, nombre: "Ricardo Chávez", correo: "ricardoc@ejemplo.com", rol: "Docente" },
  { id: 10, nombre: "Paula Medina", correo: "paulam@ejemplo.com", rol: "Docente" },
  { id: 11, nombre: "Andrés Salazar", correo: "andress@ejemplo.com", rol: "Tutor" },
  { id: 12, nombre: "Julia Herrera", correo: "juliah@ejemplo.com", rol: "Docente" },
  { id: 13, nombre: "Víctor Moreno", correo: "victorm@ejemplo.com", rol: "Coordinador" }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json(docentes);
}
