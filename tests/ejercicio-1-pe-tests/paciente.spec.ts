import { Paciente } from '../../src/ejercicio-1-pe/paciente'
import { describe, test, expect } from 'vitest'

enum bloodType {"A+", "A-", "B+", "B-", "AB+", "AB-", "0-", "0+"}

describe("Pruebas de la clase Paciente", () => {
  test("Se crea correctamente el objeto", () => {
    const nacimiento = new Date(12, 12, 2000)
    const pepe = new Paciente("45898656D", "PEPE", nacimiento, 666555444, "pepe@pepe", 1, 0, ["Polvo", "Perros"]);

    const result: string = pepe.getResumen()

    expect(result).toBe(`DNI: 45898656D, Name: PEPE, BirthDate: ${nacimiento}, 
            Phone: 666555444, Email: pepe@pepe, HistorialID: 1,
            Blood: ${[bloodType[0]]}, Alergias: Polvo, Perros`)
  })

  test("Se crea incorrectamente el objeto, por fecha", () => {
    const nacimiento = new Date('2030-2-2')
    expect(() => new Paciente("45898656D", "PEPE", nacimiento, 666555444, "pepe@pepe", 1, 0, ["Polvo", "Perros"])).toThrowError("Fecha no válida");
  })

  test("Se crea incorrectamente el objeto, por DNI", () => {
    const nacimiento = new Date(12, 12, 2000)
    expect(() => new Paciente("45898", "PEPE", nacimiento, 666555444, "pepe@pepe", 1, 0, ["Polvo", "Perros"])).toThrowError("DNI no válido");
  })

  test("Se crea incorrectamente el objeto, por email", () => {
    const nacimiento = new Date(12, 12, 2000)
    expect(() => new Paciente("45898656D", "PEPE", nacimiento, 666555444, "pepe", 1, 0, ["Polvo", "Perros"])).toThrowError("Email no válido");
  })

  test("Se crea incorrectamente el objeto, por telefono", () => {
    const nacimiento = new Date(12, 12, 2000)
    expect(() => new Paciente("45898656D", "PEPE", nacimiento, 66655544, "pepe@pepe", 1, 0, ["Polvo", "Perros"])).toThrowError("Número de teléfono no válido");
  })
})