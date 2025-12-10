//  botó A: estacio meteorologica
//  botó B: moure la gota
//  pin0: sortir al menu
let mode = 0
//  Repte 6: Estacio meteorologica
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

//  Repte 7: Moure la gota
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

//  Menu
function mostrar_menu() {
    basic.clearScreen()
    basic.showString("MENU")
    basic.pause(500)
    basic.showString("A:TEMP")
    basic.pause(500)
    basic.showString("B:GOTA")
    basic.pause(500)
    basic.showString("P0:EXIT")
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (mode == 0) {
        mode = 1
        estacio_meteorologica()
        mostrar_menu()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (mode == 0) {
        mode = 2
        moure_gota()
        mostrar_menu()
    }
    
})
//  Pin0 per sortir
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    
    if (mode != 0) {
        mode = 0
        mostrar_menu()
    }
    
})
mostrar_menu()
