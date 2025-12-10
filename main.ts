//  botó A: estacio meteorologica
//  botó B: moure la gota
//  pin0: sortir al menu
let mode = 0
//  REPTE 6: ESTACIÓ METEOROLÒGICA
function estacio_meteorologica() {
    let temp: number;
    
    basic.clearScreen()
    while (mode == 1) {
        temp = input.temperature()
        //  mostrar grafic (max 50 graus)
        led.plotBarGraph(temp, 50)
        basic.pause(1000)
    }
}

