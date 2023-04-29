using {sf} from './external/sf';

service EasyPermissionService @(requires: 'authenticated-user') {

    // =================== LOACAL ENTITIES ==========================
    entity Roles @(restrict: [{
        grant: ['*'],
        to   : ['ADMIN']
    }]) {
        key userId : String(100);
            roles  : many {
                name   : String(100);
                access : String(100);
                target : String(100);
            }
    };

    entity Permissions @(restrict: [{
        grant: ['*'],
        to   : ['ADMIN']
    }]) {
        key userId : String(100);
            roles  : many {
                role            : String(100);
                roleDescription : String;
                permissions     : many {
                    name        : String(100);
                    category    : String(100);
                    type        : String(255);
                    permission  : String(255);
                    description : String;
                }
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
            grant: ['READ', ],
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
