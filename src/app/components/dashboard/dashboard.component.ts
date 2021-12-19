import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import Dashboard from './dashboard.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product: Dashboard[] = [];
  public productList : any;
  searchKey:string="";
  public filterCategory:any;
  constructor(private api : ApiService, private cartService : CartService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getProd();
    
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category==="men's clothing" || a.category==="women's clothing"){
          a.category="fashion";
        }
        Object.assign(a,{quantity:1,total:a.price})
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

  getProd(){
    this.http.get<{message:string; product:[] ; maxProd:number}>('http://localhost:8080/api/product')
    .pipe(
      map(
        (res:any)=>{
      return {
        product: res.product.map((products:any) =>{
          return {
            title : products.title,
            img : products.image,
            description : products.image,
            price : products.price,
            category : products.category
          }
          })
      }
    }))
    .subscribe(res=>{
      console.log(res);
      this.product = res.product;
      console.log(this.product);
    })
  }

  addToCart(item:any){
    this.cartService.addToCart(item);
  }
  
  filterProduct(category:string){
    this.filterCategory = this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
