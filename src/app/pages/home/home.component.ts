import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result: string;
  url: string;

  constructor(private clipboardService: ClipboardService, private toastService: HotToastService) { }

  b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16))
    }))
  }

  ngOnInit(): void {
  }

  getUrl() {
    this.result = window.location.origin + '/redirect/' + encodeURIComponent(this.b64EncodeUnicode(this.url));
  }

  copyResultUrl() {
    if (this.url == null) {
      this.toastService.error('Please enter your URL', { position: 'bottom-center' })
      return;
    }
    if (!this.validURL(this.url)) {
      this.toastService.error('URL is invalid!', { position: 'bottom-center' });
      return;
    }
    this.getUrl();
    this.clipboardService.copyFromContent(this.result)
    this.toastService.success('Copied to clipboard', { position: 'bottom-center' })

  }

  validURL(str) {
    var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }

}
