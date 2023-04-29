/**
 * Interface for the
 */
export interface IRolesOutRoot {
    userId: string;
    roles: IRolesOutRole[];
}
/**
 * Inner interface for the IRolesOutRoot - listing the properties for the complex entity structure 'roles'
 */
export interface IRolesOutRole {
    roleName: string;
    roleNameAccess: string;
    roleNameTarget: string;
}
