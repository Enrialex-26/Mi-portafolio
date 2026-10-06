import { Component } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly project: Project = {
    title: 'SAGA | Panel administrativo',
    image: '/images/projects/saga-dashboard-600.png',
    description:
      'Aplicación web para gestionar las operaciones de un negocio musical desde un panel administrativo.',
    problem:
      'Centralizar el control de productos, ventas y operaciones comerciales en una sola aplicación.',
    role: 'Desarrollo de la aplicación web y de sus funcionalidades administrativas.',
    technologies: [
      'Python',
      'Flask',
      'SQLite',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    features: [
      'Inicio de sesión y control de sesión',
      'Gestión de usuarios y roles',
      'Gestión de productos e inventario',
      'Registro de ventas y control de stock',
      'Consulta de facturas y reportes',
    ],
  };
}
