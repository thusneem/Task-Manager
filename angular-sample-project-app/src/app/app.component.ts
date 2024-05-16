//import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project-app';

  // constructor(private datePipe: DatePipe) {
  //   const dateString = "Mon May 13 2024 12:10:39 GMT-0400 (Eastern Daylight Time)";
  //   const formattedDate = this.parseDate(dateString);
  //   console.log(formattedDate); // Output: 2024-05-13
  // }

  // parseDate(dateString: string): string {
  //   // Use DatePipe to format the date string as "yyyy-MM-dd"
  //   const formattedDate = this.datePipe.transform(dateString, 'yyyy-MM-dd');
  //   return formattedDate || ''; // Return an empty string if formatting fails
  // }
}
