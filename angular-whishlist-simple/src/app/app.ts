import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinoViaje } from "./destino-viaje/destino-viaje";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DestinoViaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-whishlist-simple');
}
