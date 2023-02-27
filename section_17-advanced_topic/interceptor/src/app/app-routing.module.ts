import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "../services/auth-guard.service";

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "home", component: IndexComponent },
	// { path: "home", component: IndexComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
