import { Component } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
})
export class ListComponent {
    heroes: Array<string> = [
        'Spiderman',
        'Ironman',
        'Black widow',
        'Hulk',
        'Antman',
    ];
    deleted: string = 'none';
    removeFirst(): void {
        this.deleted = this.heroes.shift() ?? this.deleted;
    }
    removeLast(): void {
        this.deleted = this.heroes.pop() ?? this.deleted;
    }
}
