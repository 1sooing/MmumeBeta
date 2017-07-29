export class testModel {
  battery: number;
  email: string;
  serialNumber: string;
  date: string;

  illumination: number;
  temperature: number;
  waterLevel: number;

  illuminationState: number;
  temperatureState: number;
  waterLevelState: number;

  waterStateMessage1: string;
  waterStateMessage2: string;

  temperatureStateMessage1: string;
  temperatureStateMessage2: string;

  illuminationStateMessage1: string;
  illuminationStateMessage2: string;

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
    this.temperatureStateMessage1 = "";
    this.temperatureStateMessage2 = "";
    this.illuminationStateMessage1 = "";
    this.illuminationStateMessage2 = "";
    this.mmumeStateMessage = "";
    this.mmumeState = 1;

    this.illuminationState = 0;
    this.temperatureState = 0;
    this.waterLevelState = 0;

  }
}
