import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // opciones = ['Home' ,'Curriculum' ,'Portafolio' ,'Contacto' ,'Sobre Mi', ];
  // redirecciones = ['/home' ,'/curriculum' ,'/portafolio' ,'/contacto' ,'/sobremi', ];

  constructor() { }

  ngOnInit(): void {
  }

}
