import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _apiFetchService: ApiFetchService) { }

  async listAsync() {
    return await this._apiFetchService.requestAsync(
      'GET',
      'user',
      null,
      true
    )
  }

  async deleteAsync(values) {
    return await this._apiFetchService.requestAsync(
      'DELETE',
      'user',
      values,
      true
    )
  }

}
