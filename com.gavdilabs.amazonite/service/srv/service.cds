using {schema} from '../db/schema';
// using { northwind } from './external/northwind';
using {sf} from './external/sf';

service BasicService @(requires: 'authenticated-user') {

    // ======================= ENTITIES ============================

    entity User @(restrict: [
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
    ]) as projection on schema.User;

    entity Test @(restrict: [
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
    ]) as projection on schema.Test;

    entity Roles @(restrict: [
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
    ]) as projection on schema.Roles;

       entity Groups @(restrict: [
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
    ]) as projection on schema.Groups;

    entity Permissions @(restrict: [
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
    ]) as projection on schema.Permissions;

    // ==================== ACTION IMPORTS ==========================


    // =================== FUNCTION IMPORTS ==========================
    function SFUserRoles(userId : String) returns schema.TUSerRoleRaw;

    // ================== EXTERNAL SERVICES ==========================
    // entity NWProduct @(restrict: [
    //     {
    //         grant: ['READ'],
    //         to: ['USER']
    //     },
    //     {
    //         grant: ['READ', 'UPDATE', 'CREATE'],
    //         to: ['MANAGER']
    //     },
    //     {
    //         grant: ['*'],
    //         to: ['ADMIN']
    //     }
    // ]) as projection on northwind.Products;

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
    ]) as projection on sf.User;


}
