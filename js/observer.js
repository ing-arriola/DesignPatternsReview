let observer={
    getOffers: function(callback) {
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
            if (typeof suscribers[i] === 'function') {
                this.suscribers[i](offer)
            }
            
        }

    },
    createOffers: function(object){
        for (i in this) {
            if (this.hasOwnProperty[i]) {
                object[i]=this[i]
                object.suscribers=[]
            }
        }
    } 
}
//Publisher
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