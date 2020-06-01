import { create } from 'axios';

const instance = create({
    baseURL: 'https://prasch-burger-builder.firebaseio.com/'
});

export default instance;