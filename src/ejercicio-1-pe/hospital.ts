import { Medico} from './medico'
import { Paciente } from './paciente'
import { Persona } from './persona'

type cita = [Paciente, Medico, Date]

export class Hospital {
  public medics: Medico[] = [];
  public pacients: Paciente[] = [];
  public dates: cita[] = []
  
  constructor() {}

  addMedic(medic: Medico) {
    this.medics.push(medic)
  }

  addPacient(paciente: Paciente) {
    this.pacients.push(paciente)
  }

  addDate(date: cita) {
    // Si no está el paciente o el médico dados de alta no se puede añadir la cita
    if (this.pacients.includes(date[0]) && this.medics.includes(date[1])) {
      this.dates.push(date)
    } else {
      throw new Error("Cita no válida")
    }
  }

  getMedics(): Medico[] {
    return this.medics
  }

  getPacients(): Paciente[] {
    return this.pacients
  }

  getDates(): cita[] {
    return this.dates
  }

  searchMedic(name: string): Medico[] {
      return this.medics.filter(c =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
  }

  searchSpecialty(name: string): Medico[] {
      return this.medics.filter(c =>
        c.specialty.toLowerCase().includes(name.toLowerCase())
      );
  }

}