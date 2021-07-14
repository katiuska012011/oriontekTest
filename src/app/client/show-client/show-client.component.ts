import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  dataClient : any = [];

  
  ngOnInit(): void {
   this.dataClient = JSON.parse(this.localStorageService.getItem("clients") || "[]" );
  }

  clear(){
    this.localStorageService.clear();
    window.location.reload();
  }

  eliminar(i: any){
    var clients = JSON.parse(this.localStorageService.getItem("clients") || "[]" );
    clients.splice(i,1);
    this.localStorageService.setItem("clients",JSON.stringify(clients));
    window.location.reload();
  }

}
