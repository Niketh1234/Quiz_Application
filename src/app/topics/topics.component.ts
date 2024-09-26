import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css',
})
export class TopicsComponent {
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
}
