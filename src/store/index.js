import { createStore } from 'redux';
import blogPostReducer from './blogpost/search/BlogPostReducer.js';

const store = createStore(blogPostReducer);

export default store;
