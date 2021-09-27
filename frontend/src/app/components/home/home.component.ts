import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  barcodeValue: string = '';
  productList: Product[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onScan(value: string){
    this.barcodeValue = value;
    this.productList.push(this.createProduct(this.barcodeValue));
  }

  createProduct(barcodeValue: string): Product {
    
    let product: Product = new Product();
    product.ID = this.productList.length + 1;
    product.Barcode = barcodeValue;
    product.Name = 'Product ' + product.ID;

    return product;
  }

}
