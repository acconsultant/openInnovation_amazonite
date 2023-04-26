import { Service } from "typedi";
import ODataService from "../core/services/ODataService";

// SF service connection class
// Used as example.
//
// Extends the core library's ODataService abstraction.
@Service({id: "sf"})
export default class SF extends ODataService {

    constructor() {
        super("sf");
    }

}

