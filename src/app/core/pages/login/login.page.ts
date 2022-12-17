import { IUserInfo } from './../../../entities';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { IUser } from 'src/app/entities';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.less']
})
export class LoginPage {

    public user: IUser;

    constructor(
        private userService: UserService
    ) {
        this.user = {} as any;
        this.initialize();
    }

    public onLoginClick(): void {
        this.userService.login(this.user)
            .subscribe(() => {
                console.log("Logged in")

                this.userService.getUserById(2)
                    .subscribe((result: IUserInfo) => console.log(result))
            })
    }

    public onClearClick(): void {

        this.initialize();
    }

    private initialize(): void {
        this.user = {
            username: "login",
            password: "password"
        }
    }
}
