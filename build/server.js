"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = require("./vistas/menu");
const entradaTeclado_1 = require("./vistas/entradaTeclado");
console.log('hola');
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let deposito = new Array();
    let n;
    let nombre, cantidad, litros, lleno;
    do {
        n = yield menu_1.menu1();
        switch (n) {
            case 1:
                console.log('Este será el nombre del deposito');
                let nombre;
                nombre = yield entradaTeclado_1.leerTeclado('Introduzca Nombre de Deposito');
                break;
            case 2:
                console.log('Cantidadd de Litros que tendrá el deposito');
                let cantidad;
                cantidad = parseInt(yield entradaTeclado_1.leerTeclado('Introduzca cantidad'));
                break;
            case 3:
                if (deposito.length == 0) {
                    console.log('No existen deposito creados');
                }
                else {
                    console.log('Usted está imprimiendo los vehiculos');
                    deposito.forEach(Deposito => {
                        console.log(`${Deposito.imprimirDeposito()}`);
                    });
                }
                break;
        }
    } while (n != 0);
});
main();
