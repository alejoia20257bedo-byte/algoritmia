# Programming Logic & Technical Test Portfolio

Welcome to my collection of programming logic exercises, test cases, and problem-solving notes. This repository contains structured algorithms, conditional logic tests, and pricing calculations designed to practice fundamental programming concepts.

## Table of Contents

1. [Inventory Status (Semáforo / Traffic Light)](#1-inventory-status-semáforo--traffic-light)

2. [Leap Year Validator (Año Bisiesto)](#2-leap-year-validator-año-bisiesto)

3. [Age Requirement & Validation](#3-age-requirement--validation)

4. [Parking Fee Calculator & Technical Test](#4-parking-fee-calculator--technical-test)

---

## 1. Inventory Status (Semáforo / Traffic Light)

A conditional logic system used to evaluate inventory stock levels and return a status indicator.

### Logic Table

| Units ($x$) | Status Result | Description | 
| ----- | ----- | ----- | 
| $< 0$ | Error | Invalid stock quantity | 
| $0$ | Rojo (Red) | Agotado (Out of stock) | 
| $1 - 10$ | Amarillo (Yellow) | Pedir (Reorder recommended) | 
| $> 10$ | Verde (Green) | Todo bien (Stock is optimal) | 

### Implementation Guide

* **Input:** Receive inventory units as numeric input.
* **Conditions:** Apply nested `if-else` or conditional statements to evaluate ranges and output the corresponding color status.

---

## 2. Leap Year Validator (Año Bisiesto)

An algorithm to determine whether a given year is a leap year based on standard calendar rules.

### Rules

A year is a leap year if:
1. It is divisible by $4$ (`year % 4 == 0`), **AND**
2. It is **not** divisible by $100$ (`year % 100 != 0`), **OR**
3. It is divisible by $400$ (`year % 400 == 0`).

### Example (`Year = 2026`)

* Divisible by $4$? Yes ($\rightarrow$ proceed)
* Divisible by $100$? No ($\rightarrow$ leap year condition met)
* **Result:** 2026 is **not** a leap year.

---

## 3. Age Requirement & Validation

### A. Minimum Age Rule (e.g., Event Access)
* **Rule:** Must be $\ge 14$ years old and have permission (`s`/`n`).

| Age | Permission (`s`/`n`) | Result | 
| ----- | ----- | ----- | 
| 14 | s | $\checkmark$ (Approved) | 
| 17 | s | $\times$ (Denied - Example note check) | 
| 30 | n | $\times$ (Denied) | 
| 14 | s | $\checkmark$ (Approved) | 

### B. Age Range Validation
* **Valid Range:** $0 \le \text{edad} \le 120$

| Age Input | Validation Check | Result | 
| ----- | ----- | ----- | 
| $-1$ | $< 0$ | Invalid ($\checkmark$ error flag) | 
| $0$ | Within range | Valid ($\times$ no error) | 
| $120$ | Within range | Valid ($\times$ no error) | 
| $121$ | $> 120$ | Invalid ($\checkmark$ error flag) | 

---

## 4. Parking Fee Calculator & Technical Test

Calculates parking fees based on vehicle type, duration in minutes/hours, store invoice status (`FACT`), and maximum daily caps.

### Technical Test Cases & Expected Outcomes (Casos Borde)

| # | Tipo (Vehicle) | Min (Minutes) | Fact (Invoice) | H (Hours) | Esperado (Expected Output) |
|---|---|---|---|---|---|
| **1** | Carro | 15 | No | - | $0$ |
| **2** | Carro | 16 | No | 1 | $4.000$ |
| **3** | Carro | 60 | No | 1 | $4.000$ |
| **4** | Carro | 61 | No | 2 | $8.000$ |
| **5** | Moto | 61 | Sí | 2 | $2.000$ |
| **6** | Carro | 600 | No | 10 | $30.000$ (tope / max cap) | Error 
| **7** | Carro | 600 | Sí | 10 | $15.000$ | Error 
| **8** | 3 | 30 | No | - | Tipo no válido |
| **9** | Carro | -5 | No | - | Minutos negativos |

### Summary of Business Rules
* **Car Rate:** $\$4.000$ per hour.
* **Moto Rate:** $\$2.000$ per hour.
* **Invoice Discount (`FACT = Sí`):** Applies a $50\%$ discount on the calculated total.
* **Daily Cap:** Maximum fee limit is applied for prolonged parking (e.g., max limit of $\$30.000$ or $\$70.000$ depending on daily rules).
* **Validation Errors:** Negative minutes or unrecognized vehicle types trigger error messages.

---

## Author

Developed as part of the **Riwi** coding curriculum and logic exercises.