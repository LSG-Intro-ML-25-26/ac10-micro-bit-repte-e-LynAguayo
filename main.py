# botó A: estacio meteorologica
# botó B: moure la gota
# pin0: sortir al menu

mode = 0  

# REPTE 6: ESTACIÓ METEOROLÒGICA
def estacio_meteorologica():
    global mode
    basic.clear_screen()
    
    while mode == 1:
        temp = input.temperature()
        
        # mostrar grafic (max 50 graus)
        led.plot_bar_graph(temp, 50)
        
        basic.pause(1000)

# REPTE 7: MOURE LA GOTA
def moure_gota():
    global mode
    basic.clear_screen()
    
    # posició inicial
    x = 2
    y = 2
    
    while mode == 2:
        # encendre LED
        led.plot(x, y)
        basic.pause(50)
        
        # apagar LED
        led.unplot(x, y)
        
        # llegir acceleracio
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        
        # moure esquerra/dreta (eix X)
        if accX <= -150 and x > 0:
            x = x - 1
        elif accX >= 150 and x < 4:
            x = x + 1
        
        # moure amunt/avall (eix Y)
        if accY <= -150 and y > 0:
            y = y - 1
        elif accY >= 150 and y < 4:
            y = y + 1
