  
import { menu1 } from './vistas/menu'
import { leerTeclado } from './vistas/entradaTeclado'
import {Deposito} from './model/deposito'


console.log('hola')

const main = async() => {
    let deposito: Array<Deposito> = new Array()
    let n: number 
    let nombre: string, cantidad : number, litros : number, lleno : boolean
    do {
        n = await menu1()
        switch(n){
            case 1:
                console.log('Este será el nombre del deposito')
                let nombre:string
                nombre = await leerTeclado('Introduzca Nombre de Deposito')

                break


            case 2:
                console.log('Cantidadd de Litros que tendrá el deposito')
                let cantidad:number
                cantidad = parseInt (await leerTeclado('Introduzca cantidad'))

                break


            case 3: 
            if (deposito.length==0){
                console.log('No existen deposito creados')
            } else {
                console.log('Usted está imprimiendo los vehiculos')
                deposito.forEach(Deposito => {
                    console.log(`${Deposito.imprimirDeposito()}`)
                });
            }
            break

        }
    } while (n!=0);
}

main()