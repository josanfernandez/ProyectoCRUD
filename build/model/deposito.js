"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deposito = void 0;
class Deposito {
    constructor(_nombre, _cantidad, _litros, _lleno) {
        this._nombre = _nombre;
        this._cantidad = _cantidad;
        this._litros = _litros;
        this._lleno = _lleno;
    }
    get nombre() {
        return this._nombre;
    }
    get cantidad() {
        return this._cantidad;
    }
    get litos() {
        return this._litros;
    }
    get lleno() {
        return this._lleno;
    }
    imprimirDeposito() {
        return `El vehiculo se llama ${this._nombre} con una capacidad de ${this._cantidad} `;
    }
}
exports.Deposito = Deposito;
