import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplatedrivenformsComponent, ReactiveformsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aufgabe-login';
}
