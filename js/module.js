const buyTicket=(function() {
    //Private
    let event='JSConference2020'
    let price=20
    //Public
    return{
        showTicket: function(){
            console.log(event)
        }
    }
})()

buyTicket.showTicket()

console.log(event)