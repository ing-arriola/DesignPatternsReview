function siteBuilder(params) {
    this.createElements= function (text,type) {
        let html

        switch (type) {
            case 'input':
                html=new InputHTML(text)
                break;
            case 'img':
                html=new ImgHTML(text)
                break;
            case 'h1':
                html=new HeadingHTML(text)
                break;
            case 'p':
                html= new ParagraphHTML(text)
                break;
        }
        html.type=type

        html.show=function(){
            const element=document.createElement(this.type)
            switch (this.type) {
                case 'input':
                    element.setAttribute('placeholder',this.text)
                    break;
                case 'img':
                    element.setAttribute('src',this.text)
                    break;
                default:
                    element.appendChild(document.createTextNode(this.text))
                    break;
            }
            document.getElementById('app').appendChild(element)
        }
        return html
    }
}

const InputHTML=function(text){
    this.text=text
}

const ImgHTML=function(text){
    this.text=text
}

const HeadingHTML=function(text){
    this.text=text
}

const ParagraphHTML=function(text){
    this.text=text
}

const webSite= new siteBuilder()
const webElements=new Array()

webElements.push(webSite.createElements('Welcome to my website','h1'))
webElements.push(webSite.createElements('Hello this is my website made with factory design pattern in JS','p'))
webElements.push(webSite.createElements('Write any text','input'))
webElements.push(webSite.createElements('Contact us','p'))
webElements.push(webSite.createElements('logo.png','img'))


webElements.forEach(element=>{
    element.show()
})

console.log(webElements)