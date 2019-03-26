export class Resource {

  /* 资源名称 */
  name: string;

  /*  资源类型 */
  sourceKey: string;

  /* 资源类型,font-awesome:目录;1:菜单;2:按钮*/
  type: number;

  /* 资源url */
  sourceUrl: string;

  /* 资源层级 */
  level: number;

  /*排序*/
  sort: number;

  /*资源对应的图标*/
  icon: string;

  /*是否隐藏，0显示 1隐藏*/
  isHid: boolean;

  /*资源的父资源*/
  parent: Resource;
}
