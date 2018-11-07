import { Component } from '@angular/core';


@Component({
    selector: 'app-contact-list',
    template: `
    <h2>This is my contact list application: {{ message }}</h2>
    <button (click)= "doClick()">Click me</button>
    `

})

export class ContactListComponent {
    message: string = ' Hi there';
    doClick() {
        this.message = 'Button is clicked';
        setTimeout(() => {
            this.message = ' you just wasted 1s';

        }, 1000);

    }
}