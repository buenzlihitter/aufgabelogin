import { Component } from '@angular/core';
    import { FormsModule } from '@angular/forms'; // FormsModule importieren
    import { CommonModule } from '@angular/common'; // CommonModule für *ngIf etc. importieren
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
      selector: 'app-templatedrivenforms',
      standalone: true, // Annahme: Komponente ist standalone
      imports: [
        FormsModule, // FormsModule hinzufügen
        CommonModule, // CommonModule hinzufügen
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
      ],
      templateUrl: './templatedrivenforms.component.html',
      styleUrl: './templatedrivenforms.component.css'
    })
    export class TemplatedrivenformsComponent {
      // Ein Objekt zur Speicherung der Formulardaten
      loginData = {
        email: '',
        password: '' // Fügen Sie hier ggf. weitere Felder hinzu
      };
      hidePassword = true;

      constructor() {
        // Initialisierungen können hier erfolgen, aber die model properties sind oben definiert
      }

      togglePasswordVisibility(event: Event) {
        event.preventDefault();
        this.hidePassword = !this.hidePassword;
      }

      clearField(field: string) {
        if (field === 'email') {
          this.loginData.email = '';
        } else if (field === 'password') {
          this.loginData.password = '';
        }
      }

      onSubmit(form: any) { // 'any' oder besser NgForm importieren und verwenden
        if (form.valid) {
          console.log('Formular gesendet!', this.loginData);
          // Hier Logik zum Verarbeiten der Login-Daten einfügen
        } else {
          console.log('Formular ist ungültig.');

        }
      }
    }
