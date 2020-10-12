import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class MartyrService {

  constructor(private _apiFetchService: ApiFetchService) { }

  async insertAsync(values) {
    return await this._apiFetchService.requestAsync(
      'POST',
      'martyr',
      values,
      true
    );
  }

  async listAsync() {
    return await this._apiFetchService.requestAsync(
      'GET',
      'martyr',
      null,
      true
    );
  }
  async deleteAsync(values) {
    return await this._apiFetchService.requestAsync(
      'DELETE',
      'martyr',
      values,
      true
    );
  }
}
