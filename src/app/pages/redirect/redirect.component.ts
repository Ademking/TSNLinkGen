import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  intervalId = 0;
  seconds = 11;
  message = 'Loading...';
  decodedUrl: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.countDown();
    this.decodedUrl =  decodeURIComponent(this.b64DecodeUnicode(this.route.snapshot.paramMap.get('id')));
  }

  b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }

  countDown() {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Redirecting...';
        clearInterval(this.intervalId);
        this.openUrl();
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `You will be automatically redirected in ${this.seconds}`;
      }
    }, 1000);
  }

  openGroup(){
    window.open("https://www.facebook.com/groups/TunisiaSharingNetwork", "_self");
  }


  openUrl(){
    window.open(this.decodedUrl, "_self");
  }
}
