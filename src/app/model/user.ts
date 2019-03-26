import {Person} from './person';
import {Role} from './role';

export class User extends Person {

  /*用户登录所用的账户名*/
  account: string;

  /*用户登录所用的密码*/
  password: string;

  /*用户是否被锁定的标记*/
  locked: string;

  /*用户所对应的角色列表*/
  roles: Array<Role>;
}
