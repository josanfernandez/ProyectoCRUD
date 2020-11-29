import {Schema, model } from 'mongoose'

export class Deposito{
    private _nombre: string
    private _cantidad: number
    private _litros: number
    private _lleno:boolean


    constructor(_nombre: string, _cantidad : number, _litros : number, _lleno : boolean
        ){
        this._nombre = _nombre
        this._cantidad = _cantidad
        this._litros = _litros
        this._lleno= _lleno


    }
    get nombre(){
        return this._nombre
    }

    get cantidad(){
        return this._cantidad
    }

    get litos(){
        return this._litros
    }

    get lleno(){
        return this._lleno
    }

    imprimirDeposito(){
        return `El vehiculo se llama ${this._nombre} con una capacidad de ${this._cantidad} `
    }
}