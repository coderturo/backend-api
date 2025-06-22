import type { NextApiRequest, NextApiResponse } from 'next'

type Estudiante = {
  nombre: string
  grado: string
  nivelRiesgo: string
}

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
]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Estudiante[]>
) {
  res.status(200).json(estudiantes);
}
