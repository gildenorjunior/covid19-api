import { Pais } from './../models/pais.model';
import { Mundo } from './../models/mundo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CovidapiService {

  url = "https://disease.sh/v3/covid-19";

  constructor(private http: HttpClient) { }

  async getInfoMundo() {
    return await this.http.get<Mundo>(`${this.url}/all`).toPromise().then(mundo => {return mundo});
  }

  getInfoPais(pais: string ="brazil") {
    return this.http.get<Pais>(`${this.url}/countries/${pais}`).toPromise().then(pais => {return pais})
  }
}
