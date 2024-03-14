import { contacts } from "./database.js";

const {createApp} = Vue;

createApp({
  data(){
    return{
      contacts,
      activeMessage : 0,
      newElement:{
        date: '',
        message: '',
        status: 'sent'
      },

      newMessage:'',
      newDate: '',

      
    }
  },

  methods: {
    addElement(){
      this.newElement = {
        date: '',
        message: this.newMessage,
        status: 'sent'
      }

      this.contacts[this.activeMessage].messages.push(this.newElement);
      this.newMessage=''
      this.newElement = {
        date: '',
        message: '',
        status: 'sent'
      }
    }
  }



  

  
}).mount('#app');
