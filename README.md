Title: Vue-boolzapp
===
# Consegna
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

## Svolgimento 
### Milestone 1
1. caricare contacts
2. stampiamo dimanicamente i contatti/chat tramite un ciclo v-for 

### Milestone 2
1. creo un ciclo v-for nella sezione html che mostra chat aperta 
2. estraggo element in contacts che ha l'indice del contatto cliccato facente parte dell'array messages .
3. in base allo status aggiunge o meno la classe sent
4. stampo in pagina element.message ed element.date


### Milestone 3
1. creo un elemento con valore stringa vuota 
2. creo una funzione addElement che pusha all'interno del singolo contatto attivo un oggetto che contiene data, messaggio e status
3. all'interno dell'input di testo inserisco un v-model.trim a cui associo l'elemento con stringa vuota 
4. associo l'elemento del v-model al messaggio del nuovo elemento 
5. al keyup.enter del campo input richiamo la funzione
6. creo una una funzione answerBot che contiene un setTimeout che con un delay di 1 secondo invia la risposta del bot


### Milestone 4
1. ci stiamo lavorando 
