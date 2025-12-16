export class MainDashboard {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        const dashboard = document.createElement('div');
        dashboard.className = 'dashboard';
        dashboard.textContent = 'Main Dashboard';
        this.container.appendChild(dashboard);
    }
}
