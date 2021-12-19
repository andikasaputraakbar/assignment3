import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailComponent } from './components/dashboard/product-detail/product-detail.component';
import { ProductComponent } from './components/dashboard/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:DashboardComponent},
  {path:'cart', component:ShoppingCartComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'profile', component:ProfileComponent},
  {path:'prodet', component:ProductDetailComponent},
  {path:'product', component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
