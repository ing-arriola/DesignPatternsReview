/*This pattern allow us to create differents kinds of objects and is similar to the 
Factory Desing pattern. At the begining we donn't know what the user needs but 
as far as the user give us data the DP could build the differents objects specified by
the user*/
class Form{
    constructor(){
        this.fields=[]
    }
    //Builds the field calling to the specific class guven by the user then the builded field is added
    //To the an array of fields that will be rendered on the HTML 
    addFields(type,text){
        let fields=this.fields
        let field
        //Depending on the field selected by the user the variable field get an input text,email or button
        switch (type) {
            case 'text':
                field=new InputText(text)
                break;
            case 'email':
                field=new InputEmail(text)
                break;
            case 'button':
                field=new Button(text)
                break;
            default:
                throw new Error('Type not valid '+type)
                break;
        }
        fields.push(field)
    }
    //Here the form is builded with the elements selected by the user
    getForm(){
        let form=document.createElement('form')
        for (let i = 0; i < this.fields.length; i++) {
            let field = this.fields[i];
            form.appendChild(field.builElement())
            form.appendChild(document.createElement('br'))
            
        }
        return form

    }
}

class Inputs{
    constructor(text){
        this.text=text
    }
}
//Returns an input text with the placeholder given by the user
class InputText extends Inputs{
    constructor(text){
        super(text)
    }
    builElement(){
        const inputElement=document.createElement('input')
        inputElement.setAttribute('type','text')
        inputElement.setAttribute('placeholder',this.text)
        return inputElement
    }
}

//Returns an email field with the placeholder given by the user
class InputEmail extends Inputs{
    constructor(text){
        super(text)
    }
    builElement(){
        const emailElement=document.createElement('email')
        emailElement.setAttribute('type','email')
        emailElement.setAttribute('placeholder',this.text)
        return emailElement
    }
}
//Returns a button to submit the form with the text given by the user
class Button extends Inputs{
    constructor(text){
        super(text)
    }
    builElement(){
        const buttonElement=document.createElement('button')
        buttonElement.setAttribute('type','submit')
        buttonElement.textContent=this.text
        return buttonElement
    }
}

//Create a new form
const aForm=new Form()
//Some fields are added to the form
aForm.addFields('text','Insert your name')
aForm.addFields('email','insert your email here')
aForm.addFields('button','Send data')
//The form is rendered on the HTML when the DOM is loaded by calling to the getForm method
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('app').appendChild(aForm.getForm( ))
})