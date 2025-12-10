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
