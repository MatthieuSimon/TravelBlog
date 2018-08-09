import { Component } from '@angular/core';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  articles: any = [];

  constructor(public articleService: ArticleService) {
    this.articleService.getArticles().subscribe(data =>{
      this.articles = data;
      console.log(data);
    });
  }

}

