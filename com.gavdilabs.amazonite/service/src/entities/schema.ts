export interface IUserRoleRaw {
  getUserRolesReport: string;
}

export enum Entity {
  User = "schema.User",
  Roles = "schema.Roles",
  TUSerRoleRaw = "schema.TUSerRoleRaw",
}

export enum SanitizedEntity {
  User = "User",
  Roles = "Roles",
  TUSerRoleRaw = "TUSerRoleRaw",
}
