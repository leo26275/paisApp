import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = "https://restcountries.eu/rest/v2"; 

  constructor( private http: HttpClient ) { }

  get htttParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  buscarPais(termino: string) : Observable<Country[]>{
    const url =  `${ this.apiUrl }/name/${ termino }`
    return this.http.get<Country[]>( url, { params: this.htttParams } );
  }

  buscarCapital(termino: string) : Observable<Country[]>{
    const url =  `${ this.apiUrl }/capital/${ termino }`    
    return this.http.get<Country[]>( url, { params: this.htttParams } );
  }

  getPaisPorAlpha(id: string) : Observable<Country>{
    const url =  `${ this.apiUrl }/alpha/${ id }`
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ) : Observable<Country[]>{

    const url =  `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, { params: this.htttParams } );
  }

}
