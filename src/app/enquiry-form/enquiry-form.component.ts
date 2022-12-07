import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css'],
})
export class EnquiryFormComponent implements OnInit {
  constructor(private service: EnquiryService) {}

  ngOnInit(): void {}
  enquiryData(data: any) {
    this.service.postEnquires(data).subscribe((enquiry) => {
      console.log(enquiry);
    });
  }
}
