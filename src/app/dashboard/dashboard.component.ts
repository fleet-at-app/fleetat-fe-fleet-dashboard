import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <p>Welcome to the fleet dashboard!</p>
  `,
  styles: `
    :host {
      display: block;
      padding: 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
