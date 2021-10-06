import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from './users.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  contacts$: any;
  users: any;
  usersData$: any;

  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.users = ['Ram', 'Kothand', 'Sita'];
    this.contacts$ = of(this.users);
    console.log(this.contacts$);

    this.usersService.getUsers().subscribe((data) => {
      this.usersData$ = data;
      console.log(this.usersData$);
    });
  }
}
