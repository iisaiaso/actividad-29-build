import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/iterfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<EliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data :Producto,
    private productoService:ProductoService
  ) {}
  deleteProduct(deleteProducto:Producto){
    Swal.fire({
      icon: 'success',
      title: 'Borrado de producto exitoso',
      text: `Se Borrado correctamente al producto ${deleteProducto.descripcion}`,
      showConfirmButton: true
    })
     this.productoService.deleteProduct(deleteProducto)
     this.dialogRef.close
  }
}
