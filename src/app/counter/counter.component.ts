import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>{{ title }}</h3>
        <button (click)="accumulate(-base)">- {{ base }}</button>
        <span>{{ number }}</span>
        <button (click)="accumulate(base)">+ {{ base }}</button>
        <p>Current base: {{ base }}</p>
    `,
})
export class CounterComponent {
    title: string = 'Counter app';
    number: number = 0;
    base: number = 5;

    accumulate(value: number): void {
        this.number += value;
    }
}
