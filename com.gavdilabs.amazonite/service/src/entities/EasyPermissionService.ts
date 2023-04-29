export interface IRoles {
  userId: string;
  roles: unknown[];
}

export interface IPermissions {
  userId: string;
  permissions: unknown[];
}

export interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
}

export enum Entity {
  Roles = "EasyPermissionService.Roles",
  Permissions = "EasyPermissionService.Permissions",
  User = "EasyPermissionService.User",
}

export enum SanitizedEntity {
  Roles = "Roles",
  Permissions = "Permissions",
  User = "User",
}
