import { LoginReady } from './LoginReady.js';
import { LoginForm } from './LoginForm.js';
import { MainDashboard } from './MainDashboard.js';

export class CenterComponent {
    constructor(container) {
        this.container = container;
        this.view = 'ready'; // ready, login, dashboard
        this.render();
    }

    setView(view) {
        this.view = view;
        this.render();
    }

    render() {
        this.container.innerHTML = ''; // Clear current content

        if (this.view === 'ready') {
            new LoginReady(this.container, () => this.setView('login'));
        } else if (this.view === 'login') {
            new LoginForm(this.container, () => this.setView('dashboard'));
        } else if (this.view === 'dashboard') {
            new MainDashboard(this.container);
        }
    }
}
