using {  managed, sap, cuid } from '@sap/cds/common';

namespace schema;

entity User : cuid, managed {
    firstName: String(255);
    lastName: String(255);
    userName: String(100);
    email: String(255);
}

entity Test : cuid {
    test: String(255);
}

entity Roles : cuid {
    roleName: String(255);
    userName: String(100);
}

entity Groups : cuid {
    groupName: String(255);
    userName: String(100);
}

entity Permissions : cuid {
    permissionName: String(255);
    userName: String(100);
}

type TUSerRoleRaw {
    getUserRolesReport: String;
}