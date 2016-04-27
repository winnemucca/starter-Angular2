import { Component } from 'angular2/core';
import { Control, ControlGroup, FormBuilder, Validators } from 'angular2/common';

import { CustomValidator } from '../shared/customValidator';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    styleUrls:['app/home/welcome.component.html']
})

export class WelcomeComponent {
    public pageTitle: string = "Welcome to the start";

    form: ControlGroup;

    constructor(formbuilder:FormBuilder) {
        this.form = formbuilder.group({ 
            
            firstName: ["", Validators.compose([Validators.required])], 
            lastName: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required]
        })
    
    }

    doLogin(event) {
        console.log(this.form.value);
        event.preventDefault();
    }

}