import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css',
})
export class StartpageComponent {
  /* Randomizing the Array */
  getRandomizedArray(strings: string[], newString: string): string[] {
    const result = [...strings];
    const randomIndex = Math.floor(Math.random() * (result.length + 1));
    result.splice(randomIndex, 0, newString);
    return result;
  }
  changeOptions() {
    this.options = this.getRandomizedArray(
      this.questionsList[this.currentQuestion].incorrect_answers,
      this.questionsList[this.currentQuestion].correct_answer
    );
  }

  /* Variables and a function declared for conditional rendering */
  showQuizButton: boolean = true;
  showQuiz: boolean = false;
  selectedOption: boolean = false;
  quizResult: boolean = false;
  toggleQuizQuestions() {
    this.showQuiz = !this.showQuiz;
    this.showQuizButton = !this.showQuizButton;
  }

  /* constructor to initialize httpClient object */
  constructor(private http: HttpClient, private apis: QuestionsService) {}

  /* Loading of new questions on loading of the page */
  questionsList: any[] = [];
  currentQuestion: number = 0;
  options: string[] = [];
  ngOnInit(): void {
    this.loadQuestions();
  }
  loadQuestions() {
    this.http
      .get(this.apis.api_urls[this.apis.category_value])
      .subscribe((response: any) => {
        this.questionsList = response.results.map((question: any) => {
          question.question = this.decodeHtmlEntities(question.question);
          question.incorrect_answers = question.incorrect_answers.map(
            (answer: string) => this.decodeHtmlEntities(answer)
          );
          question.correct_answer = this.decodeHtmlEntities(
            question.correct_answer
          );
          return question;
        });
        this.options = this.getRandomizedArray(
          this.questionsList[this.currentQuestion].incorrect_answers,
          this.questionsList[this.currentQuestion].correct_answer
        );
      });
  }

  decodeHtmlEntities(text: string): string {
    const entities: { [key: string]: string } = {
      '&quot;': '"',
      '&#039;': "'",
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
    };
    return text.replace(
      /&quot;|&#039;|&amp;|&lt;|&gt;/g,
      (match) => entities[match]
    );
  }

  /* Variables and functions declared for the management of quiz  */
  score: number = 0;
  selectedValues: boolean[] = [false, false, false, false];
  nextQuestion() {
    for (let i = 0; i < this.selectedValues.length; i++) {
      if (this.selectedValues[i] == true) break;
      if (
        i == this.selectedValues.length - 1 &&
        this.selectedValues[i] == false
      )
        return;
    }
    if (this.currentQuestion == this.questionsList.length - 1) {
      this.quizResult = !this.quizResult;
      this.showQuiz = !this.showQuiz;
    }
    this.currentQuestion++;
    this.changeOptions();
    this.selectedValues = this.selectedValues.map((_, i) => i !== i);
  }
  handleOptionClick(index: number) {
    this.selectedValues = this.selectedValues.map((_, i) => i === index);
    for (let i = 0; i < 4; i++) {
      if (
        index == i &&
        this.questionsList[this.currentQuestion].correct_answer ==
          this.options[index]
      ) {
        this.score++;
      }
    }
  }

  handleReTakeQuizButton() {
    location.reload();
  }
}
