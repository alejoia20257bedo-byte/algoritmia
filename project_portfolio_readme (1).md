# JavaScript & Frontend Portfolio

Welcome to my project portfolio! This document highlights some of the key coding challenges, database structures, and UI architecture exercises I've built.

---

## 1. Parking Database & Summary

This section showcases vehicle tracking stored in browser `localStorage` and aggregated into summary metrics.

### Stored Data Structure (`parkingDatabase`)
```json
[
  {"owner": "yarley", "vehicule": "car", "minutes": 30, "invoice": "not", "total": 4000},
  {"owner": "alejo", "vehicule": "car", "minutes": 30, "invoice": "not", "total": 4000},
  {"owner": "abiga", "vehicule": "car", "minutes": 80, "invoice": "yes", "total": 8000},
  {"owner": "mauro", "vehicule": "car", "minutes": 10, "invoice": "yes", "total": 0},
  {"owner": "maria", "vehicule": "car", "minutes": 45, "invoice": "yes", "total": 4000},
  {"owner": "fredy", "vehicule": "motorbike", "minutes": 24, "invoice": "not", "total": 2000}
]
```

### Aggregated Console Summary Output
```javascript
{
  cars: 4,
  totalCars: [4000, 4000, 8000, 4000],
  motorbike: 2,
  totalMotorbikes: [0, 2000],
  total: 22000
}
```

---

## 2. Pyramid Generator Code & Outputs

This script dynamically generates centered text-based pyramids based on a configurable height.

### JavaScript Code
```javascript
function createPyramid(height) {
    for (let i = 0; i < height; i++) {
        let space = height - i - 1;
        let stars = 2 * i + 1;
        let row = " ".repeat(space) + "*".repeat(stars);
        console.log(row);
    }
}

console.log("Height 4 Pyramid:");
createPyramid(4);

console.log("\nHeight 6 Pyramid:");
createPyramid(6);
```

### Console Outputs

**Height 4 Pyramid:**
```text
   *
  ***
 *****
*******
```

**Height 6 Pyramid:**
```text
     *
    ***
   *****
  *******
 *********
***********
```

---

## 3. Árbol de Componentes: Perfil de Instagram

Estructura jerárquica de componentes para una página de perfil de red social real (Instagram), identificando los elementos repetitivos (ciclos).

```text
                        [ Página (Perfil de Instagram) ]
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
[ Encabezado (Header) ]      [ Contenido Principal ]        [ Barra de Navegación ]
        │                              │                              │
    ┌───┴───┐             ┌────────────┴────────────┐            (Inicio, Búsqueda,
    │       │             │                         │             Reels, Perfil)
[Logo/ID] [Menú]   [ Sección de Perfil ]   [ Grilla de Publicaciones ]
                          │                         │
                   (Foto, Biografía,          [ Tarjeta de Publicación ] × (Se repite = ciclo)
                    Estadísticas)                   │
                                       ┌────────────┴────────────┐
                                       │                         │
                                   [ Imagen ]            [ Iconos de Interacción ]
                                                         (Me gusta / Comentarios)
```

### Cajas que se repiten (Ciclos):
* **Tarjeta de Publicación (`× n · se repite = ciclo`)**: Componente dinámico que se duplica en cuadrícula para renderizar cada una de las publicaciones de la galería del usuario.