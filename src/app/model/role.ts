import {Resource} from './resource';

export class Role {
  /*角色对应的名字*/
  name: string;

  /*角色标识 程序中判断使用,如"manager"*/
  roleKey: string;

  /*角色是否可用*/
  available: boolean; // 是否可用,如果不可用将不会添加给用户

  /*角色对应的权限列表*/
  resources: Array<Resource>;
}
