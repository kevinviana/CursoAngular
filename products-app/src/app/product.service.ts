import { EventEmitter, Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    { id: 1, name: "Laptop", department_id: 4, price: 40, description: 'Laptop Desc.' },
    { id: 2, name: "Shirt", department_id: 1, price: 10, description: 'Shirt Desc.' },
    { id: 3, name: "Pants", department_id: 1, price: 50, description: 'Pants Desc.' },
    { id: 4, name: "Mouse", department_id: 4, price: 40, description: 'Mouse Desc.' }
  ];

  private products: Product[] = [];
  private nextId: number;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();  

    constructor(private departmentService: DepartmentService) {
  for (let p of this.dataFromServer) {
    this.products.push(
      {
        id: p.id,
        name: p.name,
        department: this.departmentService.getDepartmentById(p.department_id),
        price: p.price, 
        description: p.description
      }
    );
    this.nextId = p.id + 1;
  }
}

getProducts(): Product[] {
  return this.products;
}

addProduct(p: Product) {
  let prod: Product = { id: this.nextId, ...p };
  this.products.push(prod);
  console.log(this.products)
  this.onNewProduct.emit(prod);
}
}
