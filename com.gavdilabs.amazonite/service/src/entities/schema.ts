export interface IUser {
  ID: string;
  createdAt?: Date;
  createdBy?: string;
  modifiedAt?: Date;
  modifiedBy?: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

export interface ITest {
  ID: string;
  test: string;
}

export interface IRoles {
  ID: string;
  roleName: string;
  userName: string;
}

export interface ITUSerRoleRaw {
  getUserRolesReport: string;
}

export enum Entity {
  User = "schema.User",
  Test = "schema.Test",
  Roles = "schema.Roles",
  TUSerRoleRaw = "schema.TUSerRoleRaw",
}

export enum SanitizedEntity {
  User = "User",
  Test = "Test",
  Roles = "Roles",
  TUSerRoleRaw = "TUSerRoleRaw",
}
