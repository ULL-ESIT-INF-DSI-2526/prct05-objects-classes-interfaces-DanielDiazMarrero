const dniRegex = /[0-9]{8}[a-z]/;
const phoneRegex = /[0-9]{9}/;
const emailRegex = /([a-z]|[0-9])*@([a-z]|[0-9])*/

export abstract class Persona {
  protected _DNI: string;
  protected _name: string;
  protected _birthDate: Date;
  protected _phoneNumber: number;
  protected _email: string;

  constructor(DNI: string, name: string, birthDate: Date, phoneNumber: number, email: string) {
    if (DNI.length != 9 && !dniRegex.test(DNI)) {
      throw console.error("DNI no válido");
    } else {
      this._DNI = DNI;
    }

    this._name = name;

    const actualDate = new Date()
    if (birthDate > actualDate) {
      throw new Error("Fecha no válida")
    } else {
      this._birthDate = birthDate;
    }

    const numberString: string = String(phoneNumber)
    if (!phoneRegex.test(numberString)) {
      throw new Error("Número de teléfono no válido")
    } else {
      this._phoneNumber = phoneNumber;
    }

    if (!emailRegex.test(email)) {
      throw new Error("Email no válido")
    } else {
      this._email = email;
    }
  }
  
  get DNI(): string {
    return this._DNI
  }

  set DNI(dni: string) {
    this._DNI = dni
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get birtDate(): Date {
    return this._birthDate
  }

  set birthDate(date: Date) {
    this._birthDate = date
  }

  get phoneNumber(): number {
    return this._phoneNumber
  }

  set phoneNumber(num: number) {
    this._phoneNumber = num
  }

  get email(): string {
    return this._email
  }

  set email(email: string) {
    this._email = email
  }

  abstract getResumen(): string;
}