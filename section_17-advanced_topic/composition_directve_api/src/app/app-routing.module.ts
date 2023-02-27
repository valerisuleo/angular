import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./views/todos/index/index.component";
import { NewComponent } from "./views/todos/new/new.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "todos" },
    { path: "new-todo", component: NewComponent },
    {
        path: "todos/:id",
        loadComponent: () =>
            import("./views/todos/show/show.component").then(
                (m) => m.ShowComponent
            ),
    },
    { path: "todos", component: IndexComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
