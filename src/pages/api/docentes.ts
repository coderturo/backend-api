import type { NextApiRequest, NextApiResponse } from 'next';

type Docente = {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
  password: string;
};

const docentes: Docente[] = [
  { id: 1, nombre: "Luis Enrique Pérez Castro", correo: "luisp@ejemplo.com", rol: "Coordinador", password: "123456" },
  { id: 2, nombre: "Ana Beatriz Gómez Rojas", correo: "anag@ejemplo.com", rol: "Tutor", password: "abcdef" },
  { id: 3, nombre: "Carlos Eduardo Ramírez Quispe", correo: "carlosr@ejemplo.com", rol: "Docente", password: "qwerty" },
  { id: 4, nombre: "Elena Patricia Torres Díaz", correo: "elenat@ejemplo.com", rol: "Tutor", password: "torres123" },
  { id: 5, nombre: "José Antonio Rivas Salazar", correo: "joser@ejemplo.com", rol: "Docente", password: "rivas321" },
  { id: 6, nombre: "María Fernanda Quispe Soto", correo: "mariaq@ejemplo.com", rol: "Coordinadora", password: "quispe456" },
  { id: 7, nombre: "Fernando Javier Ruiz Luján", correo: "fernandor@ejemplo.com", rol: "Docente", password: "fer789" },
  { id: 8, nombre: "Laura Andrea Vega Romero", correo: "laurav@ejemplo.com", rol: "Tutor", password: "laura456" },
  { id: 9, nombre: "Ricardo Daniel Chávez Huamán", correo: "ricardoc@ejemplo.com", rol: "Docente", password: "123abc" },
  { id: 10, nombre: "Paula Milagros Medina Campos", correo: "paulam@ejemplo.com", rol: "Docente", password: "medina123" },
  { id: 11, nombre: "Andrés Manuel Salazar Vera", correo: "andress@ejemplo.com", rol: "Tutor", password: "salazar321" },
  { id: 12, nombre: "Julia Carolina Herrera Torres", correo: "juliah@ejemplo.com", rol: "Docente", password: "juliah789" },
  { id: 13, nombre: "Víctor Hugo Moreno Castillo", correo: "victorm@ejemplo.com", rol: "Coordinador", password: "victor007" }
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
