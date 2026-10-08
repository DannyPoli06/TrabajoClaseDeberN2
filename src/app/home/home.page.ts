import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  contador2 = 0;
  contador3 = 0;
  contador5 = 0;
  contador7 = 0;
  contador10 = 0;

  // Lista de primos como texto plano para no usar *ngIf ni CommonModule
  primosTexto = '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47';
  mostrarPrimosEstado = false;

  constructor() {}

  // Múltiplo de 2
  aumentarDos() { this.contador2 += 2; }
  disminuirDos() { this.contador2 -= 2; }
  reiniciarDos() { this.contador2 = 0; }

  // Múltiplo de 3
  aumentarTres() { this.contador3 += 3; }
  disminuirTres() { this.contador3 -= 3; }
  reiniciarTres() { this.contador3 = 0; }

  // Múltiplo de 5
  aumentarCinco() { this.contador5 += 5; }
  disminuirCinco() { this.contador5 -= 5; }
  reiniciarCinco() { this.contador5 = 0; }

  // Múltiplo de 7
  aumentarSiete() { this.contador7 += 7; }
  disminuirSiete() { this.contador7 -= 7; }
  reiniciarSiete() { this.contador7 = 0; }

  // Múltiplo de 10
  aumentarDiez() { this.contador10 += 10; }
  disminuirDiez() { this.contador10 -= 10; }
  reiniciarDiez() { this.contador10 = 0; }

  // Alternar vista de primos
  togglePrimos() {
    this.mostrarPrimosEstado = !this.mostrarPrimosEstado;
  }
}
