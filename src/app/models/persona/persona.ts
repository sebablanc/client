import { Localidad } from "../localidad/localidad";

export class Persona {

    private id: number;
    private nroCuenta: string;
    private nombre: string;
    private apellido: string;
    private direccion: string;
    private telefono: string;
    private celular: string;
    private email: string;
    private otroMedio: string;
    private localidad: Localidad;
    private dni: number;
    private fechaNacimiento: Date;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(){}

    get getId(): number{
        return this.id;
    }

    set setId(id: number){
        this.id = id;
    }

    get getNroCuenta(): string{
        return this.nroCuenta;
    }

    set setNroCuenta(nroCuenta: string){
        this.nroCuenta = nroCuenta;
    }

    get getNombre(): string{
        return this.nombre;
    }

    set setNombre(nombre: string){
        this.nombre = nombre;
    }

    get getApellido(): string{
        return this.apellido;
    }

    set setApellido(apellido: string){
        this.apellido = apellido;
    }

    get getDireccion(): string{
        return this.direccion;
    }

    set setDireccion(direccion: string){
        this.direccion = direccion;
    }

    get getTelefono(): string{
        return this.telefono;
    }

    set setTelefono(telefono: string){
        this.telefono = telefono;
    }

    get getCelular(): string{
        return this.celular;
    }

    set setCelular(celular: string){
        this.celular = celular;
    }

    get getEmail(): string{
        return this.email;
    }

    set setEmail(email: string){
        this.email = email;
    }

    get getOtroMedio(): string{
        return this.otroMedio;
    }

    set setOtroMedio(otroMedio: string){
        this.otroMedio = otroMedio;
    }

    get getLocalidad(): Localidad{
        return this.localidad;
    }

    set setLocalidad(localidad: Localidad){
        this.localidad = localidad;
    }

    get getDNI(): number{
        return this.dni;
    }

    set setDNI(dni: number){
        this.dni = dni;
    }

    get obtenerFechaNacimiento(){
        return this.fechaNacimiento;
    }

    set cambiarFechaNacimiento(fechaNacimiento: Date){
        this.fechaNacimiento = fechaNacimiento;
    }

    get obtenerFechaCreacion(){
        return this.createdAt;
    }

    set cambiarFechaCreacion(createdAt: Date){
        this.createdAt = createdAt;
    }

    get obtenerFechaModificacion(){
        return this.updatedAt;
    }

    set cambiarFechaModificacion(updatedAt: Date){
        this.updatedAt = updatedAt;
    }
}