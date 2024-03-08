import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  public titulo: string = 'Listado de Alumnos';
  // se pueden omitir el public, el tipo y el punto y coma
  // titulo = 'Listado de Alumnos'

}
