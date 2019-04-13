import { Component } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';
import { User } from './model/user';
import { Contact } from './model/contact';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    isEditing: boolean = false
    contacts: Contact[] = []
    currentContact: Contact = new Contact

    saveContact(contact: Contact) {
        this.contacts.push(Object.assign({}, contact))
    }

    deleteContact(contact: Contact) {
        let i = this.contacts.indexOf(contact)
        this.contacts.splice(i, 1)
    }

    editContact(contact: Contact) {
        this.isEditing = true
        this.currentContact = contact
    }

    finishEditing(){
        this.currentContact = new Contact
        this.isEditing = false
    }
}
