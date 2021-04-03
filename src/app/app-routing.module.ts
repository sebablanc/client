import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'dr-computers',
    loadChildren: () => import('./pages/dr-computers/dr-computers.module').then( m => m.DrComputersPageModule)
  },
  {
    path: 'dr-kids',
    loadChildren: () => import('./pages/dr-kids/dr-kids.module').then( m => m.DrKidsPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'boletin-informativo',
    loadChildren: () => import('./pages/boletin-informativo/boletin-informativo.module').then( m => m.BoletinInformativoPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./pages/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'premios',
    loadChildren: () => import('./pages/premios/premios.module').then( m => m.PremiosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'descargas',
    loadChildren: () => import('./pages/descargas/descargas.module').then( m => m.DescargasPageModule)
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./pages/inscripciones/inscripciones.module').then( m => m.InscripcionesPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'alumnos-gestion',
    loadChildren: () => import('./pages/alumnos-gestion/alumnos-gestion.module').then( m => m.AlumnosGestionPageModule)
  },
  {
    path: 'alumno-data-gestion',
    loadChildren: () => import('./pages/alumno-data-gestion/alumno-data-gestion.module').then( m => m.AlumnoDataGestionPageModule)
  },
  {
    path: 'cursos-gestion',
    loadChildren: () => import('./pages/cursos-gestion/cursos-gestion.module').then( m => m.CursosGestionPageModule)
  },
  {
    path: 'curso-data-gestion',
    loadChildren: () => import('./pages/curso-data-gestion/curso-data-gestion.module').then( m => m.CursoDataGestionPageModule)
  },
  {
    path: 'comisiones-gestion',
    loadChildren: () => import('./pages/comisiones-gestion/comisiones-gestion.module').then( m => m.ComisionesGestionPageModule)
  },
  {
    path: 'comision-data-gestion',
    loadChildren: () => import('./pages/comision-data-gestion/comision-data-gestion.module').then( m => m.ComisionDataGestionPageModule)
  },
  {
    path: 'inscripciones-gestion',
    loadChildren: () => import('./pages/inscripciones-gestion/inscripciones-gestion.module').then( m => m.InscripcionesGestionPageModule)
  },
  {
    path: 'informe-inscripciones-gestion',
    loadChildren: () => import('./pages/informe-inscripciones-gestion/informe-inscripciones-gestion.module').then( m => m.InformeInscripcionesGestionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
