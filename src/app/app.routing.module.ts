import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { StoreComponent } from "./components/store/store.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:item',
    component: StoreComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
