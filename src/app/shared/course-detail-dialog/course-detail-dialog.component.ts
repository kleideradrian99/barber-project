import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export interface CourseDetailData {
  title: string;
  description: string;
  duration: string;
  level: string;
  topics: string[];
  topicsDetailed?: any[];
  image?: string;
}

@Component({
  selector: 'app-course-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './course-detail-dialog.component.html',
  styleUrl: './course-detail-dialog.component.css'
})
export class CourseDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CourseDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CourseDetailData
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
