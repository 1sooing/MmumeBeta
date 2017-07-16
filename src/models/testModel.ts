export class testModel {
  battery: number;
  email: string;
  illumination: number;
  serialNumber: string;
  temperature: number;
  waterLevel: number;
  date: string;
  constructor(battery, email, illumination, serialNumber, temperature, waterLevel, date) {
    this.battery = battery;
    this.email = email;
    this.illumination = illumination;
    this.serialNumber = serialNumber;
    this.temperature = temperature;
    this.waterLevel = waterLevel;
    this.date = date;
  }
}
