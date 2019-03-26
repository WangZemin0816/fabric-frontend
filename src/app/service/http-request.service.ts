import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EFile} from '../model/efile';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  // url配置文件的地址
  private baseURL = 'http://localhost:8081/';

  public language = 'en_US';

  private httpOptions = {
    withCredentials: true,
    headers: {
      // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': 'localhost:4200/',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    },
  };

  // 初始化时，加载url配置文件
  constructor(public http: HttpClient) {
  }

  // 为了与后端url参数解耦，此处使用target代替url
  public post(relURL: string, data: any): Observable<any> {
    const url = this.getAbsUrl(relURL); // + '?i18n_language=' + this.language;
    console.log('post url :' + url);
    console.log('post data :' + JSON.stringify(data));
    console.log('header:' + JSON.stringify(this.httpOptions));
    return this.http.post<any>(url, data, this.httpOptions);
  }

  // get类型的请求
  public get(relURL: string, data: any): Observable<any> {
    return this.http.get<any>(this.getAbsUrl(relURL), this.httpOptions);
  }

  public upload(relURL: string, formData: FormData) {
    const url = this.getAbsUrl(relURL);
    console.log('upload url :' + url);
    console.log('upload data :' + JSON.stringify(formData));
    return this.http.post<any>(url, formData);
  }

  public getAbsUrl(relURL: string) {
    return this.baseURL + relURL;
  }
}
