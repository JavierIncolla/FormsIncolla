import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularioInscripcion: FormGroup = new FormGroup({
    nombre: new FormControl('Ingrese su nombre', [Validators.required, Validators.minLength(3)]),  
    apellido: new FormControl('Ingrese su apellido', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('Ingrese su email', [Validators.required, Validators.email]),
    edad: new FormControl('0', [Validators.required, Validators.pattern(/^\d+$/)]),
    ciudad: new FormControl('Ingrese su ciudad', [Validators.required, Validators.minLength(3)]),
  });

  constructor() {}

  submit() {
    
  }

  // title = 'fomularioReactivo';
}
