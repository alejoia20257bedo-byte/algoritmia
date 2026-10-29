Algoritmo TotalCuenta
    Definir total, propina, split Como Real
    Definir personas Como Entero
    
    Escribir "¿Cuánto es el valor total de tu cuenta?"
    Leer total
    
    Escribir "¿Cuántas personas son en total?"
    Leer personas
    
    Escribir "¿Cuánto es la propina? (en %)"
    Leer propina
    
    propina <- total * (propina / 100)
    total <- total + propina
    split <- total / personas
    
    Escribir "La propina es de: ", propina
    Escribir "El valor total de tu cuenta es de: ", total
    Escribir "Cada una paga: ", split
    
FinAlgoritmo