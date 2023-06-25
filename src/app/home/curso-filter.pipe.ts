import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursoFilter'
})
export class CursoFilterPipe implements PipeTransform {

  transform(value: any, term: string): any {
    
    if(!value) return null;
    if(!term) return value;

    term = term.toLowerCase(); 

    return value.filter(function(curso: any) {

      return JSON.stringify(curso).toLowerCase().includes(term);
    });
    
  }


}
