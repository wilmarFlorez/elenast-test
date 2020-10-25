interface IAddress {
  streetAddress: string
}

export interface ICreateClient {
  firstName: string,
  lastName: string,
  cellphone: string,
  address: IAddress
}
