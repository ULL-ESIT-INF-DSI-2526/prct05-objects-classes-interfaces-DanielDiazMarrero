import { Persona } from './persona'

enum turno {"Mañana", "Tarde", "Noche"}

export class Medico extends Persona {

  constructor(
    _DNI: string, 
    _name: string, 
    _birthDate: Date,
    _phoneNumber: number,
    _email: string,
    public mediId: number, 
    public specialty: string, 
    public turn: turno
   ) {
    super(_DNI, _name, _birthDate, _phoneNumber, _email)
   }

  getResumen(): string {
    return `DNI: ${this._DNI}, Name: ${this.name}, BirthDate: ${this.birtDate}, 
            Phone: ${this.phoneNumber}, Email: ${this.email}, MedicID: ${this.mediId},
            Specialty: ${this.specialty}, Turn: ${turno[this.turn]}`;
  }
}