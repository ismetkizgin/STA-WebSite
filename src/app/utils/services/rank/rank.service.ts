import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  constructor(private _apiFetchService: ApiFetchService) {}

  async listAsync() {
    return await this._apiFetchService.requestAsync('GET', 'RANK', null, true);
  }
}
