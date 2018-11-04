import React from "react";
import {AnimalDesire, AnimalPropositions, Auth} from "../model/db";
import {Breed} from "../model/breed";
import {PetSizeEnum, SexEnum} from "../model/enums";

export default React.createContext({
    authUser: undefined,
    animalPropositionsDb: undefined,
    animalDesireDb: undefined,
    doAuth: ()=>{},
    saveProposition: ()=>{},
    getProposition: ()=>{},
    saveDesire: ()=>{},
});