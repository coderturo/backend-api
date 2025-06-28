import type { NextApiRequest, NextApiResponse } from 'next';

type Estudiante = {
  id: number;
  nombre: string;
  grado: string;
  nivelRiesgo: string;
  docenteId: number;
};

const estudiantes: Estudiante[] = [
  { id: 1, nombre: "Pedro Iván Martínez Pérez", grado: "5to A", nivelRiesgo: "Alto", docenteId: 1 },
  { id: 2, nombre: "María Elena López Gómez", grado: "3ro B", nivelRiesgo: "Bajo", docenteId: 1 },
  { id: 3, nombre: "Lucía Beatriz Fernández Ríos", grado: "4to C", nivelRiesgo: "Medio", docenteId: 1 },
  { id: 4, nombre: "José Manuel Ramírez Torres", grado: "5to B", nivelRiesgo: "Bajo", docenteId: 1 },
  { id: 5, nombre: "Valeria Sofía Torres Díaz", grado: "2do A", nivelRiesgo: "Alto", docenteId: 1 },
  { id: 6, nombre: "Andrés Nicolás Soto Huamán", grado: "3ro C", nivelRiesgo: "Medio", docenteId: 1 },
  { id: 7, nombre: "Camila Fernanda Rojas Paredes", grado: "1ro B", nivelRiesgo: "Bajo", docenteId: 1 },
  { id: 8, nombre: "Diego Alejandro Herrera Quispe", grado: "4to B", nivelRiesgo: "Alto", docenteId: 1 },

  { id: 9, nombre: "Sofía Andrea Castro Salazar", grado: "5to C", nivelRiesgo: "Medio", docenteId: 2 },
  { id: 10, nombre: "Mateo Daniel Vargas Medina", grado: "3ro A", nivelRiesgo: "Bajo", docenteId: 2 },
  { id: 11, nombre: "Isabella Valeria Reyes Guzmán", grado: "2do B", nivelRiesgo: "Medio", docenteId: 2 },
  { id: 12, nombre: "Tomás Sebastián Medina Torres", grado: "1ro C", nivelRiesgo: "Alto", docenteId: 2 },
  { id: 13, nombre: "Elena Patricia Gutiérrez León", grado: "4to A", nivelRiesgo: "Bajo", docenteId: 2 },
  { id: 14, nombre: "Bruno Santiago Navarro Flores", grado: "5to A", nivelRiesgo: "Medio", docenteId: 2 },
  { id: 15, nombre: "Renata Carolina Campos Silva", grado: "3ro B", nivelRiesgo: "Alto", docenteId: 2 },
  { id: 16, nombre: "Gabriel Ignacio Peña Luján", grado: "2do C", nivelRiesgo: "Bajo", docenteId: 2 },

  { id: 17, nombre: "Paula Milagros Cabrera Reyes", grado: "1ro A", nivelRiesgo: "Medio", docenteId: 3 },
  { id: 18, nombre: "Emiliano Rodrigo Ríos Cárdenas", grado: "4to C", nivelRiesgo: "Alto", docenteId: 3 },
  { id: 19, nombre: "Julieta Camila Paredes Romero", grado: "5to B", nivelRiesgo: "Bajo", docenteId: 3 },
  { id: 20, nombre: "Sebastián Alonso Meza Castro", grado: "3ro C", nivelRiesgo: "Medio", docenteId: 3 },
  { id: 21, nombre: "Martina Elena Díaz Ramos", grado: "2do A", nivelRiesgo: "Alto", docenteId: 3 },
  { id: 22, nombre: "Joaquín Tomás Silva Ramírez", grado: "1ro B", nivelRiesgo: "Bajo", docenteId: 3 },
  { id: 23, nombre: "Agustina Laura Molina Sánchez", grado: "4to A", nivelRiesgo: "Medio", docenteId: 3 },
  { id: 24, nombre: "Vicente Nicolás León Chávez", grado: "5to C", nivelRiesgo: "Alto", docenteId: 3 },

  { id: 25, nombre: "Antonia Gabriela Rivera Muñoz", grado: "3ro A", nivelRiesgo: "Bajo", docenteId: 4 },
  { id: 26, nombre: "Benjamín Esteban Núñez Cruz", grado: "2do B", nivelRiesgo: "Medio", docenteId: 4 },
  { id: 27, nombre: "Daniela Alejandra Cruz Vargas", grado: "1ro C", nivelRiesgo: "Alto", docenteId: 4 },
  { id: 28, nombre: "Samuel Alonso Aguirre Pérez", grado: "4to B", nivelRiesgo: "Bajo", docenteId: 4 },
  { id: 29, nombre: "Florencia Isabel Ortega Castillo", grado: "5to A", nivelRiesgo: "Medio", docenteId: 4 },
  { id: 30, nombre: "Facundo Emilio Salazar Gutiérrez", grado: "3ro B", nivelRiesgo: "Alto", docenteId: 4 },
  { id: 31, nombre: "Josefina Carmen Andrade Soto", grado: "2do C", nivelRiesgo: "Bajo", docenteId: 4 },
  { id: 32, nombre: "Maximiliano Dante Cárdenas Jiménez", grado: "1ro A", nivelRiesgo: "Medio", docenteId: 4 },

  { id: 33, nombre: "Amanda Cecilia Lozano Bravo", grado: "4to C", nivelRiesgo: "Alto", docenteId: 5 },
  { id: 34, nombre: "Cristóbal Ernesto Miranda Rivera", grado: "5to B", nivelRiesgo: "Bajo", docenteId: 5 },
  { id: 35, nombre: "Regina Lourdes Solís Mendoza", grado: "3ro C", nivelRiesgo: "Medio", docenteId: 5 },
  { id: 36, nombre: "Gael Eduardo Palma Suárez", grado: "2do A", nivelRiesgo: "Alto", docenteId: 5 },
  { id: 37, nombre: "Josefa Natalia Zúñiga Delgado", grado: "1ro B", nivelRiesgo: "Bajo", docenteId: 5 },
  { id: 38, nombre: "Thiago Rafael Bravo Díaz", grado: "4to A", nivelRiesgo: "Medio", docenteId: 5 },
  { id: 39, nombre: "Victoria Mariana Serrano Morales", grado: "5to C", nivelRiesgo: "Alto", docenteId: 5 },
  { id: 40, nombre: "Leonardo Iván Carranza Aguilar", grado: "3ro A", nivelRiesgo: "Bajo", docenteId: 5 }
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
