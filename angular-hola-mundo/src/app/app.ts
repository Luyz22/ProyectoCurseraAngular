import { Component, signal } from '@angular/core';
import { SaludadorComponent } from './saludador/saludador'; // 👈 Importa el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SaludadorComponent], // 👈 Angular 20 necesita esto
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-hola-mundo');
}
