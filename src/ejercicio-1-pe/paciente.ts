import { Persona } from './persona'

enum bloodType {"A+", "A-", "B+", "B-", "AB+", "AB-", "0-", "0+"}

export class Paciente extends Persona {

  constructor(
    _DNI: string, 
    _name: string, 
    _birthDate: Date,
    _phoneNumber: number,
    _email: string,
    public historialId: number, 
    public blood: bloodType,
    public alergys: string[], 
   ) {
    super(_DNI, _name, _birthDate, _phoneNumber, _email)
   }

  getResumen(): string {
    return `DNI: ${this._DNI}, Name: ${this.name}, BirthDate: ${this.birtDate}, 
            Phone: ${this.phoneNumber}, Email: ${this.email}, HistorialID: ${this.historialId},
            Blood: ${bloodType[this.blood]}, Alergias: ${this.alergys.join(", ")}`;
  }
}