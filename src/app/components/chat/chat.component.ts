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
   }

  sendMessage() {
    console.log(this.mensaje);
    /* this.msg = this.mensaje
    this.mensaje = ""; 
    Esto es para pasar la variable del input de enviar mensaje al input del mensaje mostrado con @input desde el componente ts*/
  }

}
