/**
 * Interface for the Root output from Roles entity
 */
export interface IRolesOutRoot {
  userId: string;
  roles: IRolesOutRole[];
}
/**
 * Inner interface for the IRolesOutRoot - listing the properties for the complex entity structure 'roles'
 */
export interface IRolesOutRole {
  name: string;
  access: string;
  target: string;
}

/**
 * Interface for the Root output from Roles entity
 */
export interface IPermissionsOut {
  userId: string;
  roles: IPermissionsOutRole[];
}
/**
 * Inner interface for the IRolesOutRoot - listing the properties for the complex entity structure 'roles'
 */
export interface IPermissionsOutRole {
  role: string;
  roleDescription: string;
  permissions: IPermissionsOutPermission[];
}

export interface IPermissionsOutPermission {
  name: string;
  category: string;
  type: string;
  permission: string;
  description: string;
}
