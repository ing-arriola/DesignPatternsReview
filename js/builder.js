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

class button extends Inputs{
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

console.log(aForm)