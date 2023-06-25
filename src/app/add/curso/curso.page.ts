import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/home/Curso.model';
import { CursoService } from 'src/app/services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  curso: Curso = new Curso();

  constructor(private _cursoService: CursoService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');

    if(isIdPresent) {
      const id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
      this._cursoService.getCurso(id).subscribe(
        data => this.curso = data
      )
    }
  }

  saveCurso() {
    this._cursoService.saveCurso(this.curso).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/home");
      }
    )
  }

  deleteCurso(id: number) {
    this._cursoService.deleteCurso(id).subscribe(
      data => {
        console.log('deleted curso', data);
        this._router.navigateByUrl('/home');
      }
    )
  }

}
