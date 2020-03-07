let observer={
    //The functions of the user now is added to the suscribers list (array)
    //So, the suscribers array members are FUNCTIONS!! :o
    suscribe: function(callback) {
        if (typeof callback === 'function') {
            this.suscribers[this.suscribers.length]=callback
        }
    },
    //Search and delete a specific user
    cancelOffers: function(callback){
        for (let i = 0; i < this.suscribers.length; i++) {
            if (this.suscribers[i]===callback) {
                delete this.suscribers[i]
            }
            
        }
    },
    //Post a offer for every user
    postOffers: function(offer){
        for (let i = 0; i < this.suscribers.length; i++) {
            if (typeof this.suscribers[i] === 'function') {
                this.suscribers[i](offer)
            }       
        }

    },
    //Adds properties from the observer object to the vendors as well knows as observers
    createOffers: function(object){
        for (i in this) {
            if (this.hasOwnProperty(i)) {
                object[i]=this[i]
                object.suscribers=[]
            }
        }
    } 
    
}
//Vendors
const academy = {
    newCourse: function(){
        const course='new JS course'
        this.postOffers(course)
    }
}

const socialNetwork={
    newAd: function(){
        const ad='Buy the newest Xiaomi phone'
        this.postOffers(ad)
    }
}

//Create publishers... here they gets the observers properties
observer.createOffers(academy)
observer.createOffers(socialNetwork)

const peter={
    share: function(offer){
        console.log(`Peter says: Wow! excellent offer ${offer}`)
    }
}

const sam={
    interest: function(offer){
        console.log(`Sam says: i'm interesed on ${offer}`)
    }
}


academy.suscribe(peter.share)
academy.newCourse()
socialNetwork.suscribe(sam.interest)
socialNetwork.newAd()
console.log('Sam deletes his subscription')
socialNetwork.cancelOffers(sam.interest)
academy.newCourse()