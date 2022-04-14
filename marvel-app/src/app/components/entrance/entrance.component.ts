import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character, Result } from 'src/app/models/character';
import {CharactersApiService} from 'src/app/services/caracters.service'

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  allCharacters = {} as Character
  personagens: any;
  ok: boolean;
  form: FormGroup
  constructor(private marvelService: CharactersApiService) {
    this.initForm() 
  }

  ngOnInit(): void {
    this.todos()
  }

  todos() {
    this.marvelService.getAllCharacters().subscribe(response => {
      console.log('Tipos: ', response);
      this.allCharacters = response
      this.personagens = response.data.results
      console.log(this.personagens)
      this.ok = true
    })
  }

  initForm() {
    this.form = new FormGroup({
      nome: new FormControl('')
    })
  }

  enviar () {
    this.ok = false
    this.form.value.nome = this.form.value.nome.replace(/\s/g, "%20")
    this.marvelService.getCarachter(this.form.value.nome).subscribe( response => {
      this.personagens = response.data.results
      this.ok = true
    })
  }
}
