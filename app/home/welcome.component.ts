import { Component } from 'angular2/core';
import { Control, ControlGroup, FormBuilder, Validators } from 'angular2/common';

import { CustomValidator } from '../shared/customValidator';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    styleUrls:['app/home/welcome.component.css']
})

export class WelcomeComponent {
    public pageTitle: string = "Welcome to the start";

    firstName: Control;
    lastName: Control;
    email: Control;
    password: Control;

    form: ControlGroup;

    constructor(private formbuilder: FormBuilder) {
        this.firstName = new Control('', Validators.compose([Validators.required, Validators.minLength(4)]));
        this.lastName = new Control('', Validators.required);
        this.email = new Control('', Validators.required);
        this.password = new Control('', Validators.required);

        this.form = formbuilder.group({

            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        });
        
    }

    // constructor(formbuilder:FormBuilder) {
    //     // first argument is the default value, second argument is the validator,  third would be aysnchronous validator
    //     this.form = formbuilder.group({ 
            
    //         firstName: ["", Validators.compose([Validators.required])], 
    //         lastName: ["", Validators.required],
    //         email: ["", Validators.required],
    //         password: ["", Validators.required]
    //     })
    
    // }

    doLogin(event) {
        console.log(this.form.value);
        event.preventDefault();
    }

}