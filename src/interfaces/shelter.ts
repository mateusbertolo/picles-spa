export interface IShelter {
  shelterName: string
  shelterEmail: string
  shelterPhone: string
  shelterWhatsApp: string
}

export interface IUpdateShelterRequest{
  shelterName: string
  shelterEmail: string
  shelterPhone: string
  shelterWhatsApp: string
}

export interface IUpdateShelterResponse extends
IUpdateShelterRequest{}