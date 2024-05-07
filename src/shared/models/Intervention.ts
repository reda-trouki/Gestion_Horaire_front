import { Enseignant } from "./Enseignant";
import { InterventionID } from "./InterventionID";
import { Module } from "./Module";

export interface Intervention {
    id: InterventionID;
    VHcourInterv: number;
    VHtdInterv: number;
    VHtpInterv: number;
    NBevalInterv: number;
    enseignant: Enseignant;
    module: Module;
}