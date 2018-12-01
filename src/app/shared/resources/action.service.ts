import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: Http, private tokenService: Angular2TokenService) { }

  list() {
    return this.tokenService.get('actions').map(response => response.json());
  }

  get(id) {
    return this.tokenService.get('actions/' + id).map(response => response.json());
  }

  create(params) {
    return this.tokenService.post('actions/add', params).map(response => response.json());
  }

  update(id, params) {
    return this.tokenService.put('actions/update/' + id, params).map(response => response.json());
  }

  destroy(id) {
    return this.tokenService.delete('actions/delete/' + id).map(response => response.json());
  }
}