import { TopComponent } from './components/TopComponent.js';
import { CenterComponent } from './components/CenterComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    const topContainer = document.getElementById('top-container');
    const centerContainer = document.getElementById('center-container');

    new TopComponent(topContainer);
    new CenterComponent(centerContainer);
});
