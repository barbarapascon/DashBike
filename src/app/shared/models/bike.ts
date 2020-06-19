export interface Bike {
    id: string,
    bikes: string,
    modelo: string,
    fabricante: string,
    velMax: string,
    autonomia: string,
    peso: string,
    pesoMax: string,
    nivelAux: string,
    coordinates: {
       coordinates: {
    latitude: string,
    longitude: string
    }},
    speed: string,
    batteryLevel: string,
    locked: boolean
  }