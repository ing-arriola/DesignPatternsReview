class Form{
    constructor(){
        this.fields=[]
    }
    addFields(text,type){
        let fields=this.fields
        let field

        switch (type) {
            case 'text':
                
                break;
            case 'email':
                
                break;

            case 'button':
                
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

const aForm=new Form()