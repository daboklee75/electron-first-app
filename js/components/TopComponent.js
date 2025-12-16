export class TopComponent {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="top-header">First App System</div>
        `;
    }
}
