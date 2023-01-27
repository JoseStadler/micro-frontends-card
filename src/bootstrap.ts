import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CardModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(CardModule)
  .catch((err) => console.error(err));
