import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpDataRequestService } from 'src/app/http-data-request.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ht: HttpDataRequestService) {

  }

  ngOnInit(): void {
    this.ht.getdata().subscribe((data) => this.show(data));
  }

  products: any;
  show(data: any) {
    this.products = data;
    console.log(this.products);
  }
  
  total_pay = 0;
  sendProduct(i: number) {
    if (this.products[i].qunt_avl >= 1) {
      this.products[i].add++;
      this.products[i].qunt_avl--;
      this.products[i].cost = this.products[i].add * this.products[i].price;
      this.total_pay = 0;
      for (let i = 0; i < this.products.length; i++) {
        this.total_pay += this.products[i].cost;
      }
 this.ht.sendFoot(this.products[i])
    }
  }
}
