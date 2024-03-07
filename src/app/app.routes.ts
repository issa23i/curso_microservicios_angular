import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'alumnos', 
        loadComponent: () => import('./components/alumnos/alumnos.component')
        .then((c) => c.AlumnosComponent)
    },
    {
        path: 'cursos', 
        loadComponent: () => import('./components/cursos/cursos.component')
        .then((c) => c.CursosComponent)
    },
    {
        path: 'examenes', 
        loadComponent: () => import('./components/examenes/examenes.component')
        .then((c) => c.ExamenesComponent)
    }
];
