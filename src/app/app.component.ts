import { Component } from '@angular/core';
import icons from './icons.json';
import chunk from 'lodash/chunk';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css', './app.component.css'],
})
export class AppComponent {
  total = icons.length;
  icons: string[][];

  constructor(private _snackBar: MatSnackBar) {
    this.icons = chunk(icons as string[], 40);
  }

  copyText(icon: string) {
    return `<mat-icon>${icon}</mat-icon>`;
  }
  handleCopied(icon: string) {
    this._snackBar.open('Copied to clipboard: ' + icon, 'OK', {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
