import { Hospital } from '../../src/ejercicio-1-pe/hospital'
import { Paciente } from '../../src/ejercicio-1-pe/paciente'
import { Medico} from '../../src/ejercicio-1-pe/medico'
import { describe, test, expect } from 'vitest'

describe("Pruebas de la clase hospital", () => {
  test("Prueba de objeto", () => {
    const Quiron = new Hospital()

    const nacimiento = new Date(12, 12, 2000)
    const pepe = new Medico("45898656D", "PEPE", nacimiento, 666555444, "pepe@pepe", 1, "Cardiovascular", 0);
    const pedro = new Paciente("45898656D", "PEDRO", nacimiento, 666555444, "pepe@pepe", 1, 0, ["Polvo", "Perros"]);

    Quiron.addMedic(pepe);
    Quiron.addPacient(pedro);

    type cita = [Paciente, Medico, Date]
    enum turno {"Mañana", "Tarde", "Noche"}
    enum bloodType {"A+", "A-", "B+", "B-", "AB+", "AB-", "0-", "0+"}


    const fechaCita = new Date('2026-3-3')
    const citaPedro: cita = [pedro, pepe, fechaCita]
    Quiron.addDate(citaPedro)

    expect(Quiron.getMedics()[0].getResumen()).toBe(`DNI: 45898656D, Name: PEPE, BirthDate: ${nacimiento}, 
            Phone: 666555444, Email: pepe@pepe, MedicID: 1,
            Specialty: Cardiovascular, Turn: ${turno[0]}`)  

    expect(Quiron.getPacients()[0].getResumen()).toBe(`DNI: 45898656D, Name: PEDRO, BirthDate: ${nacimiento}, 
            Phone: 666555444, Email: pepe@pepe, HistorialID: 1,
            Blood: ${[bloodType[0]]}, Alergias: Polvo, Perros`)

    expect(Quiron.getDates()[0]).toStrictEqual([pedro, pepe, fechaCita])

    const medics = Quiron.searchMedic("PE")
    expect(medics[0]).toBe(pepe)

    expect(Quiron.searchSpecialty("Cardiovacular")[0]).toBe(pepe)
  })
})