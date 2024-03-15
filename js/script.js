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
      nameToSearch: ''
      
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
    },

      answerBot(){
        setTimeout(()=>{
          this.newElement = {
            date: '',
            message: 'OK',
            status: 'received'
          }
          this.contacts[this.activeMessage].messages.push(this.newElement);
        },1000)
        
      }

  },

  computed:{

    searchContact(){
      contacts.forEach(contact =>{
        if (contact.name.toLowerCase().includes(this.nameToSearch.toLowerCase())){
          contact.visible = true
        } else{
            contact.visible = false
        }
      })

      return contacts
    },
  
  }



  

  
}).mount('#app');
