import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TemplatedrivenformsComponent} from './templatedrivenforms/templatedrivenforms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplatedrivenformsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aufgabe-login';
}
