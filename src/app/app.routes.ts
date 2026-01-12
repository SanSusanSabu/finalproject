import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Card } from './component/card/card';
import { SongDetailsComponent } from './pages/song-details/song-details';



export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {   path:'product/:id',
        component:SongDetailsComponent,

    },
];



