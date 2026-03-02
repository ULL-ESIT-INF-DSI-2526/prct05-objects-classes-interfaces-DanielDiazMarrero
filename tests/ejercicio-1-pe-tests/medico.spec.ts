import { Medico} from '../../src/ejercicio-1-pe/medico'
import { describe, test, expect } from 'vitest'

enum turno {"Mañana", "Tarde", "Noche"}

describe("Pruebas de la clase Medico", () => {
  test("Se crea correctamente el objeto", () => {
    const nacimiento = new Date(12, 12, 2000)
    const pepe = new Medico("45898656D", "PEPE", nacimiento, 666555444, "pepe@pepe", 1, "Cardiovascular", 0);

    const result: string = pepe.getResumen()

    expect(result).toBe(`DNI: 45898656D, Name: PEPE, BirthDate: ${nacimiento}, 
            Phone: 666555444, Email: pepe@pepe, MedicID: 1,
            Specialty: Cardiovascular, Turn: ${turno[0]}`)
  })

  test("Se crea incorrectamente el objeto, por fecha", () => {
    const nacimiento = new Date('2030-2-2')
    expect(() => new Medico("45898656D", "PEPE", nacimiento, 666555444, "pepe@pepe", 1, "Cardiovascular", 0)).toThrowError("Fecha no válida");
  })

  test("Se crea incorrectamente el objeto, por DNI", () => {
    const nacimiento = new Date(12, 12, 2000)
    expect(() => new Medico("45898", "PEPE", nacimiento, 666555444, "pepe@pepe", 1, "Cardiovascular", 0)).toThrowError("DNI no válido");
  })

  test("Se crea incorrectamente el objeto, por email", () => {
    const nacimiento = new Date(12, 12, 2000)
    expect(() => new Medico("45898656D", "PEPE", nacimiento, 666555444, "pepe", 1, "Cardiovascular", 0)).toThrowError("Email no válido");
  })

  test("Se crea incorrectamente el objeto, por telefono", () => {
    const nacimiento = new Date(12, 12, 2000)
    expect(() => new Medico("45898656D", "PEPE", nacimiento, 66655544, "pepe@pepe", 1, "Cardiovascular", 0)).toThrowError("Número de teléfono no válido");
  })
})