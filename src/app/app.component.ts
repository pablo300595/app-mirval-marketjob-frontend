import { Component } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('startupAnimation', [
      state('init', style({ opacity: '1'})),
      state('end', style({ opacity: '0'})),
      transition('init => end', animate('600ms ease-out')),
      transition('end => init', animate('600ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'app-mirval-workmarket-frontend'
  
  startupAnimationState: string
  animationFinished: boolean

  ngOnInit(): void {
    this.animationFinished = false
    this.startupAnimationState ='init';
    setTimeout(() => {
      this.startupAnimationState = 'end'
    }, 2000)

    setTimeout(() => {
      this.animationFinished = true
    }, 2500)
  }
  
}
