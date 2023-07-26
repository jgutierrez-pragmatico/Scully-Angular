import { ScullyConfig } from '@scullyio/scully';

import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
    projectRoot: "./src",
    projectName: "frontend-angular-scully-contentful",
    outDir: './dist/static',
    routes: {
        '/products/:sys.id': {
            type: 'json',
            productId: {
                url: 'http://localhost:9000/api/entries',
                resultsHandler: (response: any) => console.log(response.items),
                property: 'sys.id'
            }
        }
    }
};