import { EliminarComponent } from './components/eliminar/eliminar.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/iterfaces/producto';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'actividad29-build';
  // producto!: Producto[]
  dataSource!: Producto[];
  displayedColumns: string[] = ['Codigo', 'Descripcion', 'Precio', 'Accion'];

  constructor(private productoService: ProductoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productoService.getPoduct().subscribe(res => {
      this.dataSource = res.sort((a, b) => {return a.codigo - b.codigo});
      console.log(this.dataSource);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarComponent, {
      enterAnimationDuration: '800ms',
      exitAnimationDuration: '200ms'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogEliminar(eliminarProducto: Producto): void {
    console.log(eliminarProducto);

    this.dialog.open(EliminarComponent, {
      data: eliminarProducto,
      width: '280px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '100ms'

    })
  }


}
