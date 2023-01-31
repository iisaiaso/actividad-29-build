import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
     MaterialModule,
     ReactiveFormsModule
  ],
  exports:[
    AgregarComponent,
    EliminarComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
