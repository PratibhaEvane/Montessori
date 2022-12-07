import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  url = 'http://localhost:3000/montessoriEnquiry';
  constructor(private http: HttpClient) {}
  // this function is created for post the enquires details on API
  postEnquires(data: any) {
    return this.http.post(this.url, data);
  }
}
