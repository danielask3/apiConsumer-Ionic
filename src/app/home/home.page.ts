import { Component } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { Curso } from './Curso.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cursos: Curso[] = [];
  constructor(private _cursoService: CursoService,
              public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
   this.listCursos()
  }

  deleteCurso(id: number) {
    this._cursoService.deleteCurso(id).subscribe(
      data => {
        console.log('deleted curso', data);
        this.listCursos();
      }
    )
  }
  listCursos(){
    this._cursoService.getCursos().subscribe(
      data => this.cursos = data
    );

  }
  
  term: string;

}
