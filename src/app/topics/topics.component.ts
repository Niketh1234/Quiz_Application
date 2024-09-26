import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { StartpageComponent } from '../startpage/startpage.component';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule, StartpageComponent],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css',
})
export class TopicsComponent {
  constructor(private urls: QuestionsService) {}

  showTopics: boolean = true;
  showQuiz: boolean = false;
  allTopics = [
    'General Knowledge',
    'Geography',
    'Sports',
    'Mythology',
    'History',
    'Politics',
    'Art',
    'Computers',
    'Science & Nature',
    'Animals',
    'Vehicles',
    'Books',
    'Films',
    'Music',
    'Mathematics',
    'Television',
  ];

  handleTopicClick(topic: string): void {
    this.showQuiz = !this.showQuiz;
    this.urls.category_value = topic;
  }
}
