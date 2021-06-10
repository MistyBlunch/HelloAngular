import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  nombre = "Andre"
  nombrebonito = "Grace"

  edades = {
    yo: 20,
    ella: 20.1
  }

  valores: number[] = []

  acciones = [
    {
      nombre: "saludar",
      accion: () => {alert("Hola")}
    },
    {
      nombre: "despedir",
      accion: () => {alert("Adios")}
    },
    {
      nombre: "generar elementos",
      accion: () => {
        this.valores = []
        for (let i = 0; i <= this.edades.yo; i++) {
          this.valores.push(i)
        }
      }
    }
  ]

  pholder = "nombre"

  constructor() { }

  ngOnInit() {
    this.acciones[2].accion()
  }
}
