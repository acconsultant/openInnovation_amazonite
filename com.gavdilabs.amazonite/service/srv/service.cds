using {sf} from './external/sf';

service EasyPermissionService @(requires: 'authenticated-user') {


    // =================== FUNCTION IMPORT LINKS ==========================
    function SFFunctionUserRolesRaw(userId : String) returns String;

    annotate SFFunctionUserRolesRaw with @(requires: [
        'MANAGER',
        'ADMIN'
    ]);

    // =================== ENTITIY LINKS ==========================
    entity SFUser @(restrict: [
        {
            grant: ['READ'],
            to   : ['USER']
        },
        {
            grant: [
                'READ',
                'UPDATE',
                'CREATE'
            ],
            to   : ['MANAGER']
        },
        {
            grant: ['*'],
            to   : ['ADMIN']
        }
    ]) as projection on sf.User {
        userId,
        firstName,
        lastName
    };


}
