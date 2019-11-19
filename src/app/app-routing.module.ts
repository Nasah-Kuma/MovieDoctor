import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MainLayoutComponent} from './movies/main-layout/main-layout.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';

const routes: Routes = [
    //basic routes of application

    {
        path: '',
        component : MainLayoutComponent,
        children : [
            {
                path: '', component: MovieItemComponent
        }
        ]
    },

    {path:'movieDetails', component: MainLayoutComponent,
    children:[
        {
            path:'', component: MovieDetailsComponent
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{

}