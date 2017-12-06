import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    users = [
        {
            name: 'Lia Lugo',
            avatar: 'svg-11',
            details: 'I love cheese, ...',
            isAdmin: true,
            isCool: false
        },
        {
            name: 'George Duke',
            avatar: 'svg-12',
            details: 'Zombie ipsum ...',
            isAdmin: false,
            isCool: true
        }

    ];

    selectedUser = this.users[0];

    private openAdminDialog() {
        this.dialog.open(DialogComponent);
    }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog) {
      const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

      iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }
}
