import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];

  constructor(private foodService:FoodService,
              private activateRoute: ActivatedRoute){
    let foodsObservable: Observable<Food[]>;
    activateRoute.params.subscribe( (params) => {
      if(params.searchTerm)
      foodsObservable = this.foodService.buscarAlimento(params.searchTerm);
      else if(params.tag)
      foodsObservable = this.foodService.obtenerComidaPorEtiqueta(params.tag);
      else
      foodsObservable = foodService.obtenerComidas();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
  });

  }

   ngOnInit(): void{

   }
}
