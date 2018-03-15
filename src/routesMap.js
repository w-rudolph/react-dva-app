
import PATHS from './constants/routerPath';

export default [
    {
        page: './pages/IndexPage',
        model: './models/example',
        path: PATHS.INDEX_PAGE,
        exact: true
    },
    {
        page: './pages/TestPage',
        model: './models/test',
        path: PATHS.TEST_PAGE
    },
    {
        page: './pages/NotFoundPage',
        path: PATHS.NOT_FOUND_PAGE
    }
];