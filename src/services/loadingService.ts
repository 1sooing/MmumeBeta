import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {
  public loading:any;
  constructor(
    public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box">안녕하세요</div>
      </div>`
    });
  }
  load() {
    this.loading.present();
  }
  dismiss() {
    this.loading.dismiss();
  }
}
