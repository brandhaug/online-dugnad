import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SampleService} from '../../services/sample.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Angulartics2Mixpanel} from 'angulartics2';
import {Router} from '@angular/router';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-system-request',
  templateUrl: './system-request.component.html',
  styleUrls: ['./system-request.component.scss']
})
export class SystemRequestComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private sampleService: SampleService,
              private flashMessagesService: FlashMessagesService,
              private mixpanel: Angulartics2Mixpanel,
              private router: Router,
              private loadingService: LoadingService) { }


  ngOnInit() {
    this.myForm = this.fb.group({
      'organization': ['', [Validators.required, Validators.minLength(4)]],
      'email': ['', [Validators.required, Validators.minLength(5), Validators.pattern('\\S+@\\S+\\.\\S+')]],
      'phoneNumber': ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    });
  }

  submitForm(value: any) {
    this.loadingService.setLoading(true);
    value.system = true;

    this.sampleService.createSampleRequest(value).subscribe(res => {
      this.flashMessagesService.show(res.message, {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
      this.mixpanel.eventTrack('Requested system request', value);
      this.loadingService.setLoading(false);
    }, err => {
      this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      this.loadingService.setLoading(false);
    });
  }

}
