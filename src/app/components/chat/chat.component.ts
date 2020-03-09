import { Component, Input } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje: string = "";
  @Input() msg: string = "";


  constructor(public chatSrv: ChatService) {
      this.chatSrv.cargarMensajes()
        .subscribe();
      /*(mensajes:any[])=>{
          console.log(mensajes);
        }//poner esto dentro del subcribe para que uestre los mensajes en el template serviria pero seria poco eficiente*/
   }

  sendMessage() {
    console.log(this.mensaje);
    this.msg = this.mensaje
    this.mensaje = ""; 
    /* Esto es para pasar la variable del input de enviar mensaje al input del mensaje mostrado con @input desde el componente ts*/
  }

}
