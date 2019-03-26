export class Base {

  /*每个数据记录都有一个主键ID,自动生成*/
  id: number;

  /*记录是否被删除*/
  deleted: boolean;

  /*记录创建的时间*/
  createdTime: string;

  /*记录的更新时间*/
  updateTime: string;

  /*记录的描述信息*/
  description: string;

  /*记录的备注信息*/
  remark: string;
}
