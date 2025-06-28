import type { NextApiRequest, NextApiResponse } from 'next';

type Estudiante = {
  id: number;
  nombre: string;
  grado: string;
  nivelRiesgo: string;
  seccion: string;
};

const estudiantes: Estudiante[] = [
  { id: 1, nombre: "Pedro Martínez", grado: "5to", nivelRiesgo: "Alto", seccion: "A" },
  { id: 2, nombre: "María López", grado: "3ro", nivelRiesgo: "Bajo", seccion: "B" },
  { id: 3, nombre: "Lucía Fernández", grado: "4to", nivelRiesgo: "Medio", seccion: "A" },
  { id: 4, nombre: "José Ramírez", grado: "5to", nivelRiesgo: "Bajo", seccion: "B" },
  { id: 5, nombre: "Valeria Torres", grado: "2do", nivelRiesgo: "Alto", seccion: "A" },
  { id: 6, nombre: "Andrés Soto", grado: "3ro", nivelRiesgo: "Medio", seccion: "C" },
  { id: 7, nombre: "Camila Rojas", grado: "1ro", nivelRiesgo: "Bajo", seccion: "B" },
  { id: 8, nombre: "Diego Herrera", grado: "4to", nivelRiesgo: "Alto", seccion: "C" },
  { id: 9, nombre: "Sofía Castro", grado: "5to", nivelRiesgo: "Medio", seccion: "A" },
  { id: 10, nombre: "Mateo Vargas", grado: "3ro", nivelRiesgo: "Bajo", seccion: "C" },
  { id: 11, nombre: "Isabella Reyes", grado: "2do", nivelRiesgo: "Medio", seccion: "B" },
  { id: 12, nombre: "Tomás Medina", grado: "1ro", nivelRiesgo: "Alto", seccion: "C" },
  { id: 13, nombre: "Elena Gutiérrez", grado: "4to", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 14, nombre: "Bruno Navarro", grado: "5to", nivelRiesgo: "Medio", seccion: "B" },
  { id: 15, nombre: "Renata Campos", grado: "3ro", nivelRiesgo: "Alto", seccion: "C" },
  { id: 16, nombre: "Gabriel Peña", grado: "2do", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 17, nombre: "Paula Cabrera", grado: "1ro", nivelRiesgo: "Medio", seccion: "B" },
  { id: 18, nombre: "Emiliano Ríos", grado: "4to", nivelRiesgo: "Alto", seccion: "C" },
  { id: 19, nombre: "Julieta Paredes", grado: "5to", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 20, nombre: "Sebastián Meza", grado: "3ro", nivelRiesgo: "Medio", seccion: "B" },
  { id: 21, nombre: "Martina Díaz", grado: "2do", nivelRiesgo: "Alto", seccion: "C" },
  { id: 22, nombre: "Joaquín Silva", grado: "1ro", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 23, nombre: "Agustina Molina", grado: "4to", nivelRiesgo: "Medio", seccion: "B" },
  { id: 24, nombre: "Vicente León", grado: "5to", nivelRiesgo: "Alto", seccion: "C" },
  { id: 25, nombre: "Antonia Rivera", grado: "3ro", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 26, nombre: "Benjamín Núñez", grado: "2do", nivelRiesgo: "Medio", seccion: "B" },
  { id: 27, nombre: "Daniela Cruz", grado: "1ro", nivelRiesgo: "Alto", seccion: "C" },
  { id: 28, nombre: "Samuel Aguirre", grado: "4to", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 29, nombre: "Florencia Ortega", grado: "5to", nivelRiesgo: "Medio", seccion: "B" },
  { id: 30, nombre: "Facundo Salazar", grado: "3ro", nivelRiesgo: "Alto", seccion: "C" },
  { id: 31, nombre: "Josefina Andrade", grado: "2do", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 32, nombre: "Maximiliano Cárdenas", grado: "1ro", nivelRiesgo: "Medio", seccion: "B" },
  { id: 33, nombre: "Amanda Lozano", grado: "4to", nivelRiesgo: "Alto", seccion: "C" },
  { id: 34, nombre: "Cristóbal Miranda", grado: "5to", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 35, nombre: "Regina Solís", grado: "3ro", nivelRiesgo: "Medio", seccion: "B" },
  { id: 36, nombre: "Gael Palma", grado: "2do", nivelRiesgo: "Alto", seccion: "C" },
  { id: 37, nombre: "Josefa Zúñiga", grado: "1ro", nivelRiesgo: "Bajo", seccion: "A" },
  { id: 38, nombre: "Thiago Bravo", grado: "4to", nivelRiesgo: "Medio", seccion: "B" },
  { id: 39, nombre: "Victoria Serrano", grado: "5to", nivelRiesgo: "Alto", seccion: "C" },
  { id: 40, nombre: "Leonardo Carranza", grado: "3ro", nivelRiesgo: "Bajo", seccion: "A" }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json(estudiantes);
}
