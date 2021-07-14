import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor( private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  clientForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    direccion: new FormControl(''),
    direccion2: new FormControl('')
  });

  onSubmit() {
    var clients = JSON.parse(localStorage.getItem("clients") || "[]");
    clients.push(this.clientForm.value);
    this.localStorageService.setItem("clients", JSON.stringify(clients));
    window.location.reload();
    
}
}
