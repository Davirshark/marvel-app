import { Component, OnInit } from '@angular/core';
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
  constructor(private marvelService: CharactersApiService) { }

  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe(response => {
      console.log('Tipos: ', response);
      this.allCharacters = response
      this.personagens = response.data.results
      console.log(this.personagens)
      this.ok = true
    })
  }

}
