import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  persona: Persona = new Persona('', '', '');
  constructor(private router: Router, public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonaById().subscribe((data) => {
      this.persona = data;
    });
  }

  login() {
    this.router.navigate(['/login']);
  }
}
