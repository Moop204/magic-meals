import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Meal Plan Generator';
    public meals: Array<object> = [
        {
            "name": "Bolognese spaghetti"
        },
        {
            "name": "Milk"
        },
        {
            "name": "Stir Fry"
        }
    ];
    
}
