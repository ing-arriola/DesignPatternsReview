const buyTicket=(function() {
    //Private
    let event='JSConference2020'
    let price=20
    const getTicket=()=>{
        const paragraph=document.createElement('p')
        paragraph.textContent=`Getting a ticket to ${event}`
        document.getElementById('app').appendChild(paragraph)
    }
    //Public
    return{
        showTicket: function(){
            getTicket()
        }
    }
})()

buyTicket.showTicket()
