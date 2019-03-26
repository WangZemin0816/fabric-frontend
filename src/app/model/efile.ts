import {Base} from './base';

export class EFile extends Base{
  /* 图片地址 */
  url: string;

  /* 图片地址的类型,false表示相对地址,true表示绝对地址*/
  urlType: boolean;

  /* 图片名称 */
  name: string;
}
