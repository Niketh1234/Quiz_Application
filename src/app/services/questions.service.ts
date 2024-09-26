import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  url_category: string = 'https://opentdb.com/api.php?amount=10&category=';
  url_difficulty: string = '&difficulty=medium&type=multiple';
  category_value: string = '';
  api_urls: { [key: string]: string } = {
    'General Knowledge': `${this.url_category}9${this.url_difficulty}`,
    Geography: `${this.url_category}22${this.url_difficulty}`,
    Sports: `${this.url_category}21${this.url_difficulty}`,
    Mythology: `${this.url_category}20${this.url_difficulty}`,
    History: `${this.url_category}23${this.url_difficulty}`,
    Politics: `${this.url_category}24${this.url_difficulty}`,
    Art: `${this.url_category}25${this.url_difficulty}`,
    Computers: `${this.url_category}18${this.url_difficulty}`,
    'Science & Nature': `${this.url_category}17${this.url_difficulty}`,
    Animals: `${this.url_category}27${this.url_difficulty}`,
    Vehicles: `${this.url_category}28${this.url_difficulty}`,
    Books: `${this.url_category}10${this.url_difficulty}`,
    Films: `${this.url_category}11${this.url_difficulty}`,
    Music: `${this.url_category}12${this.url_difficulty}`,
    Mathematics: `${this.url_category}19${this.url_difficulty}`,
    Television: `${this.url_category}14${this.url_difficulty}`,
  };
  constructor() {}
}
