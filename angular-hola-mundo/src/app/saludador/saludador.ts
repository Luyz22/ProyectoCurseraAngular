import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  standalone: true, // 👈 Necesario para Angular 20 standalone
  templateUrl: './saludador.html', // 👈 tu archivo real
  styleUrls: ['./saludador.css']   // 👈 tu archivo real
})
export class SaludadorComponent {}
