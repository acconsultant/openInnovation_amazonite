using {sf} from './external/sf';

service EasyPermissionService @(requires: 'authenticated-user') {

    // =================== LOACAL ENTITIES ==========================
    entity Roles @(restrict: [
        {
            grant: ['*'],
            to   : ['ADMIN']
        }
    ]) {
        key userId : String(100);
        roles : many {
            roleName: String(100);
            roleNameAccess: String(100);
            roleNameTarget: String(100);
        }
    };

    // =================== REMOTE 'FUNCTION IMPORT' PROJECTIONS ==========================

    // =================== REMOTE ENTITIY PROJECTIONS ==========================
    entity User @(restrict: [
        {
            grant: ['READ'],
            to   : ['USER']
        },
        {
            grant: [
                'READ',
            ],
            to   : ['MANAGER']
        },
        {
            grant: ['*'],
            to   : ['ADMIN']
        }
    ]) as projection on sf.User {
        key userId,
            firstName,
            lastName
    };


}
