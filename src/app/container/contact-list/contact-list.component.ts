import { Component } from '@angular/core';


@Component({
    selector: 'app-contact-list',
    template: `
    <h2>This is my contact list application: {{ message }}</h2>
    `

})

export class ContactListComponent {
    message: string = ' Hi there';
}