import { Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { EditplayerComponent } from './editplayer/editplayer.component';

export const routes: Routes = [

    {
        path:"",
        component:PlayerComponent
    },{
        path:"addplayer",
        component:AddplayerComponent
    }
    ,{
        path:"editplayer/:id",
        component:EditplayerComponent
    }
];
