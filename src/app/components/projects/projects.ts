import { Component, inject, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
  private readonly firestoreService = inject(FirestoreService);

  protected project: Project = {
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

  protected loadError = '';

  async ngOnInit(): Promise<void> {
    try {
      const projects = await this.firestoreService.getCollection<Project>('projects');
      if (projects.length > 0) {
        this.project = projects[0];
      }
    } catch (error) {
      console.error('No se pudieron cargar los proyectos de Firestore.', error);
      this.loadError = 'No fue posible cargar los proyectos guardados en Firestore.';
    }
  }
}
