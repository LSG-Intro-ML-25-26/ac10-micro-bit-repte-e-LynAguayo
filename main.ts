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

//  REPTE 7: MOURE LA GOTA
function moure_gota() {
    let accX: number;
    let accY: number;
    
    basic.clearScreen()
    //  posició inicial
    let x = 2
    let y = 2
    while (mode == 2) {
        //  encendre LED
        led.plot(x, y)
        basic.pause(50)
        //  apagar LED
        led.unplot(x, y)
        //  llegir acceleracio
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        //  moure esquerra/dreta (eix X)
        if (accX <= -150 && x > 0) {
            x = x - 1
        } else if (accX >= 150 && x < 4) {
            x = x + 1
        }
        
        //  moure amunt/avall (eix Y)
        if (accY <= -150 && y > 0) {
            y = y - 1
        } else if (accY >= 150 && y < 4) {
            y = y + 1
        }
        
    }
}

