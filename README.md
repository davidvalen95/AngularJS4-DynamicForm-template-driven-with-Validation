# Dynamic Form with template-driven

## Logic
This dynamic form use template driven form And Very simple to use
1. *ngFor the form array
1. provide the style stack with the current form info and parent Form
1. provide the model for show error component inside style stack


## Usage

**inside component.ts**
```javascript
constructor(private title: Title) {
    title.setTitle('Login');

    const usernameForm: BaseForm = new BaseForm('Username', 'Username', 'username', 'text');
    usernameForm.rules = {
      'required': true,
      'minlength': 5,
      'maxlength': 7,
      'pattern': '[\\w]*',
      'patternInfo': 'Only word and number no spaces and symbols'
    };
    usernameForm.value = 'myName';

    const passwordForm: BaseForm = new BaseForm('Password', 'Password', 'password', 'password');
    passwordForm.rules = {
      'required': true,
      'maxlength': 10
    };
    this.baseForms.push(usernameForm, passwordForm);

  }

```

1. app.module.ts
    1. include components in declarations
        1. show-errors.component
        1. style-stack.component
1. Create BaseForm Object from src/app/forms/base-form.ts
1. Supply constructor in login.component.ts with label,placeholder,name, input type, like pages/login/login.component.ts
1. Supply rules if needed
1. push in array
1. in html usage like pages/login/login.component.html

## Rules
* required : true | false
* minlength: number
* maxlength: number
* pattern : regex
* patternInfo: String the info of regex rule

## Default value
* in BaseForm Object set the .value, it will be 2 way binding

## required file
* all inside src/app/forms
* optional the src/style.css for form animation
* bootstrap v4 for this demo
