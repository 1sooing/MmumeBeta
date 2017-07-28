export class testModel {
  battery: number;
  email: string;
  illumination: number;
  serialNumber: string;
  temperature: number;
  waterLevel: number;
  date: string;
  waterStateMessage1: string;
  waterStateMessage2: string;
  mmumeStateMessage: string;
  mmumeState: number;
  constructor(battery, email, illumination, serialNumber, temperature, waterLevel, date) {
    this.battery = battery;
    this.email = email;
    this.illumination = illumination;
    this.serialNumber = serialNumber;
    this.temperature = temperature;
    this.waterLevel = waterLevel;
    this.date = date;
    this.waterStateMessage1 = "";
    this.waterStateMessage2 = "";
    this.mmumeStateMessage = "";
    this.mmumeState = 1;
  }
}
