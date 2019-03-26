import {Base} from './base';

export class Person extends Base {

  /*男，1：女*/
  sex: number;

  /*用户姓名*/
  name: string;

  /*用户生日*/
  birthday: string;

  /*用户邮箱地址*/
  email: string;

  /*用户创建的ip地址*/
  ipCreated: string;

  /*最近一次的登录时间*/
  timeLastActived: string;
}

