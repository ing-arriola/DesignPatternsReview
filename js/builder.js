class Form{
    constructor(){
        this.fields=[]
    }
    addFields(type,text){
        let fields=this.fields
        let field

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
    getForm(){
        let form=document.createElement('form'),
        field

        for (let i = 0; i < this.fields.length; i++) {
            let field = this.fields[i];
            console.log(field)
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


const aForm=new Form()

aForm.addFields('text','Insert your name')
aForm.addFields('email','insert your email here')
aForm.addFields('button','Send data')

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('app').appendChild(aForm.getForm( ))
})

console.log(aForm)