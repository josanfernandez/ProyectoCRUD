import { leerTeclado } from './entradaTeclado'

export const menu1 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Nombre Deposito')
    console.log('2.- Litros que tiene el deposito')
    console.log('3.- Ver Deposito')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}