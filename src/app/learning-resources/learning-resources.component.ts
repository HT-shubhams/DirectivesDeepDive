import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';
import { LogsDirective } from '../logs.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirective, LogsDirective],
})
export class LearningResourcesComponent {}
