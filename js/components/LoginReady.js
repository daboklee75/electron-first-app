export class LoginReady {
    constructor(container, onLoginClick) {
        this.container = container;
        this.onLoginClick = onLoginClick;
        this.render();
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.className = 'login-ready-box';

        const button = document.createElement('button');
        button.className = 'login-btn';
        button.textContent = '로그인해주세요';
        button.onclick = this.onLoginClick;

        wrapper.appendChild(button);
        this.container.appendChild(wrapper);
    }
}
