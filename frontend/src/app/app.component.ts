import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Meal Plan Generator';
    public meals: Array<object> = [];
    addMeals(newMeal: string) {
        this.meals.push(
            {
                "mealName": newMeal
            }
        );
    }
    
}
