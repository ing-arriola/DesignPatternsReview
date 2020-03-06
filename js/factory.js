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
                html= newParagraphHTML(text)
                break;
        }
        return html
    }
}

const HeadingHTML=function(text){
    this.text=text
}

const webSite= new siteBuilder()
const webElements=new Array()

webElements.push(webSite.createElements('Welcome to my website','h1'))

console.log(webElements)