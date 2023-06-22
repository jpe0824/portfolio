import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  isResumeActive: boolean = false;
  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit(): void {
    // this.router.navigate(['/']);
  }

  goTo(target: string): void {
    if (target === 'targetResume') {
      this.isResumeActive = true;
      return;
    }

    this.router.navigate(['/']);
    this.isResumeActive = false;
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  }
}
