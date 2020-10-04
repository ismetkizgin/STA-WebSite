export class Institution {
  InstitutionName: string;
  InstitutionCity: string;
  InstitutionDistrict: string;
  InstitutionEmail: string;
  InstitutionPhone: string;
}

export class User {
  UserIdentityNo: bigint;
  UserFirstName: string;
  UserLastName: string;
  UserPhone: string;
  UserEmail: string;
  UserAdress: string;
  InstitutionID: number;
  UserStatusName: string;
}
