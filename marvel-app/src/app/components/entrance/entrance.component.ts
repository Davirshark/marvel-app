import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  naoTem: boolean;
  constructor(private marvelService: CharactersApiService) {
    this.initForm() 
  }

  ngOnInit(): void {
    this.todos()
  }

  todos() {
    this.marvelService.getAllCharacters().subscribe(response => {
      console.log('Achados ', response);
      this.allCharacters = response
      this.personagens = response.data.results
      console.log(this.personagens)
      this.ok = true
      this.naoTem = false
      this.form.reset()
    })
  }

  initForm() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required)
    })
  }

  enviar () {
    this.ok = false
    let primeira = this.form.value.nome.replace(/\s/g, "%20x")
    this.marvelService.getCarachter(primeira).subscribe( response => {
      this.personagens = response.data.results
      console.log(this.personagens)
      console.log(primeira)
      this.ok = true
      this.naoTem = false
      if (this.personagens.length == 0){
        console.log("nao tem")
        let segunda = this.form.value.nome.trim()
        this.marvelService.getCarachter(segunda).subscribe( response => {
          this.personagens = response.data.results
          console.log(this.personagens)
          console.log(segunda)
          this.ok = true
          this.naoTem = false
          if (this.personagens.length == 0){
            console.log("nao tem")
            this.naoTem = true
          }
        })
      }
    })
  }
}
