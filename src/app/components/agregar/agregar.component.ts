import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formProduct!: FormGroup
  constructor(public dialogRef: MatDialogRef<AgregarComponent>, private productoService: ProductoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formProduct = this.fb.group({
      codigo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]]
    })
    console.log(this.formProduct.value);
    
  }
  onNoClick(): void {

    this.dialogRef.close();
  }

  onSaveProdut() {
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: `Se ha registrado correctamente al producto ${this.formProduct.value.descripcion}`,
      showConfirmButton: false,
      timer:1800
    })
    this.productoService.addProdcut(this.formProduct.value)
    this.dialogRef.close();
  }

}
