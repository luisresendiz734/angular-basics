import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
})
export class HeroComponent {
    name: string = 'Daifuku';
    age: number = 24;

    get nameCapitalized() {
        return this.name.toUpperCase();
    }

    getInfo(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName(): void {
        this.name = 'Garoo';
    }

    changeAge(): void {
        this.age = 20;
    }
}
