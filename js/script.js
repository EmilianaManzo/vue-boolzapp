import { contacts } from "./database.js";

const {createApp} = Vue;

const {DateTime} = luxon;


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
      nameToSearch: '',
      isClicked: false,
      counterMess : 0,
      dateNow :''

    }
  },

  methods: { 
    printData(){
      this.dateNow = DateTime.now()
                    .setLocale('it')
                    .toFormat('dd/MM/yyyy HH:mm:ss')
      return this.dateNow;
    },


    addElement(){
      this.printData();
      this.newElement = {
        date: this.dateNow,
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
          this.printData();
          this.newElement = {
            date: this.dateNow,
            message: 'OK',
            status: 'received'
          }
          this.contacts[this.activeMessage].messages.push(this.newElement);
        },2000)
        
      },

      deleteMess(index){
        
        this.contacts[this.activeMessage].messages.splice(index,1)
        
      },

      idMessage(index){
      // non riesco ad utilizzarlo perchè mi si aprono tutte 
      // this.contacts[this.activeMessage].messages[index] ? this.isClicked = !this.isClicked : ''
      const chevron = document.querySelectorAll('.box');
      chevron[index].classList.toggle('d_none');


      },

      lastMessage(){
        
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
