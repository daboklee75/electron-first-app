export class LoginForm {
    constructor(container, onConfirm) {
        this.container = container;
        this.onConfirm = onConfirm;
        this.render();
    }

    render() {
        const form = document.createElement('div');
        form.className = 'login-form';

        const label = document.createElement('label');
        label.textContent = 'ID를 입력하세요';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'ID';

        const button = document.createElement('button');
        button.className = 'login-btn';
        button.textContent = '확인';

        // Handle confirm
        button.onclick = () => {
            if (input.value.trim().length > 0) {
                this.onConfirm();
            } else {
                alert('ID를 입력해주세요.');
            }
        };

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(button);
        this.container.appendChild(form);
    }
}
