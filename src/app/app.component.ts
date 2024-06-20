import { Component, Renderer2 } from '@angular/core';
import { MessageService } from './services/message.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Veterinary Record Application';

  constructor(public messageService: MessageService, private router: Router, private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    this.messageService.message = 'Hello Message Service!';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateBodyClass(event.urlAfterRedirects);
      }
    });
  }

  updateBodyClass(url: string) {
    this.renderer.removeClass(document.body, 'home-page');
    this.renderer.removeClass(document.body, 'default-page');
    
    if (url === '/vets/list') {
      this.renderer.addClass(document.body, 'simple-page');
    } else {
      this.renderer.addClass(document.body, 'default-page');
    }
  }

}
