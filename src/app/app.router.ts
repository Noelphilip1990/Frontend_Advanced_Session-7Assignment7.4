import  {Routes, RouterModule} from '@angular/router';
import { InfouserComponent } from './infouser/infouser.component';
import { AppComponent } from '././app.component';
const app: Routes =
[
		
		{ path: "info/:role", component: InfouserComponent },
		{ path: '**', component: AppComponent }
]

export const routing = RouterModule.forRoot(app);
