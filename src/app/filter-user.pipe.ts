import { Pipe, PipeTransform } from '@angular/core';
import { User } from './services/user/user.service';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], selectedUser: User = {name: "Null"}): User[] {
    return users.filter(user => user.name != selectedUser.name);
  }

}
