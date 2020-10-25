/* interface IAddress {
  streetAddress: string
} */

export interface IClient {
  id: number;
  firstName: string;
  lastName: string;
  city?: string;
  cellphone: string;
  address?: string
}
