export interface IRoles {
  userId: string;
  roles: unknown[];
}

export interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
}

export enum Entity {
  Roles = "EasyPermissionService.Roles",
  User = "EasyPermissionService.User",
}

export enum SanitizedEntity {
  Roles = "Roles",
  User = "User",
}
