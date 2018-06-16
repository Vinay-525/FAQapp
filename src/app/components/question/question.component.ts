import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question:Question;
  button:string = "Show ";
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }
  onFire(){
    this.question.hide = !this.question.hide;
    if(this.question.hide){
      this.button = "Show";
    }else{
      this.button = "Hide";
    }
    
  }

  onRemove(question:Question){
    this.dataService.removeQuestion(question);
  }
}
