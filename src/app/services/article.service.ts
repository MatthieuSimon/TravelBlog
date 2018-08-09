import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
  private baseUrl: string = "../assets/article.json";

  constructor(private readonly http: HttpClient) {}

  public getArticles() {
    return this.http.get(this.baseUrl);
  }

}
