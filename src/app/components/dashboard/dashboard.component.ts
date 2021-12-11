import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public productList : any;
  searchKey:string="";
  public filterCategory:any;
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
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
