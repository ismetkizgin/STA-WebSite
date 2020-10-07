import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _apiFetchService: ApiFetchService) { }

  async listAsync() {
    return await this._apiFetchService.requestAsync('GET', 'user', null, true);
  }

  async deleteAsync(values) {
    return await this._apiFetchService.requestAsync(
      'DELETE',
      'user',
      values,
      true
    );
  }

  async findAsync(userID) {
    return await this._apiFetchService.requestAsync(
      'GET',
      `user/${userID}`,
      null,
      true
    );
  }

  async insertAsync(values) {
    return await this._apiFetchService.requestAsync(
      'POST',
      'user',
      values,
      true
    );
  }

  async updateAsync(values) {
    return await this._apiFetchService.requestAsync(
      'PUT',
      'user',
      values,
      true
    );
  }

  async institutionPersonnelList(institutionID) {
    return await this._apiFetchService.requestAsync(
      'GET',
      `user/institution/${institutionID}`,
      null,
      true
    );
  }
}
