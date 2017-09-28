import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SampleService} from '../../services/sample.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Angulartics2Mixpanel} from 'angulartics2';
import {Router} from '@angular/router';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-order-sample',
  templateUrl: './order-sample.component.html',
  styleUrls: ['./order-sample.component.scss']
})
export class OrderSampleComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private sampleService: SampleService,
              private flashMessagesService: FlashMessagesService,
              private mixpanel: Angulartics2Mixpanel,
              private router: Router,
              private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      'organization': ['', [Validators.required, Validators.minLength(4)]],
      'phoneNumber': ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    });
  }

  submitForm(value: any) {
    this.loadingService.setLoading(true);
    this.sampleService.createSampleRequest(value).subscribe(res => {
      this.flashMessagesService.show(res.message, {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
      this.mixpanel.eventTrack('Requested order sample', value);
      this.loadingService.setLoading(false);

    }, err => {
      this.flashMessagesService.show(err, {cssClass: 'alert-danger', timeout: 6000});
      this.loadingService.setLoading(false);
    });
  }

}
