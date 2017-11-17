#Dynamic Form with template-driven

## Logic
This dynamic form use template driven form And Very simple to use
1. *ngFor array of form objects
1. will call template for the input suplied by each form object from ngfor
1. inside step 2 will use app- selector of component to display error


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
**then in the component.htmll**

```html
<div class="row">
  <div class="offset-3 col-6">
    <form #loginForm="ngForm" novalidate (submit)="formSubmit(loginForm)">
      <span *ngFor="let baseForm of this.baseForms">
        <app-style-stack [parentForm]="loginForm" [baseForm]="baseForm"></app-style-stack>
      </span>
      <button [disabled]="!loginForm.valid"  class="btn btn-success" type="submit">Login</button>
    </form>

  </div>
</div>

```

## Form Validation Rules
* required : boolean
* minlength: number
* maxlength: number
* pattern : string regex
* patternInfo: String the info of regex rule to be displayed to user if pattern not satisfied

## Default value
* in BaseForm Object set the .value, it will be 2 way binding

## required file
* all inside src/app/forms
* optional the src/style.css for form animation for this demo
* bootstrap v4 for this demo
