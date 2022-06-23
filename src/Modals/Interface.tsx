 export interface ButtonInterface {
    children : string,
    onClick : Function,
    requestPath:string,
    className:string
 }
 export interface InputInterface {
    type:string,
    name:string,
    placeholder:string,
    required:boolean,
    handleChange:Function,
 }

 export interface InputLabelInterface {
    label:string
 }