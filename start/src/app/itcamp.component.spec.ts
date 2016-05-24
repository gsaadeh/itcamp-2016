import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ItcampAppComponent } from '../app/itcamp.component';

beforeEachProviders(() => [ItcampAppComponent]);

describe('App: Itcamp', () => {
  it('should create the app',
      inject([ItcampAppComponent], (app: ItcampAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
