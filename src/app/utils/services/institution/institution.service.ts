import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  constructor(private _apiFetchService: ApiFetchService) {}

  async insertAsync(values) {
    return await this._apiFetchService.requestAsync(
      'POST',
      'institution',
      values,
      true
    );
  }

  async updateAsync(values) {
    return await this._apiFetchService.requestAsync(
      'PUT',
      'institution',
      values,
      true
    );
  }

  async findAsync(institutionID) {
    return await this._apiFetchService.requestAsync(
      'GET',
      `institution/${institutionID}`,
      null,
      true
    );
  }
}
