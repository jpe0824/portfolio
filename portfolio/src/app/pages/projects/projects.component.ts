import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  project1Images: string[] = [
    '../../../assets/images/pwm1.png',
    '../../../assets/images/pwm2.png',
    '../../../assets/images/pwm3.png',
    '../../../assets/images/iman1.png',
    '../../../assets/images/iman2.png',
  ];
  project2Images: string[] = [
    '../../../assets/images/mbp.png',
    '../../../assets/images/mbp2.png',
    '../../../assets/images/mbp3.png',
  ];
  project3Images: string[] = [
    '../../../assets/images/reunion1.png',
    '../../../assets/images/reunion2.png',
  ];
  project4Images: string[] = ['../../../assets/images/tcker.png'];
  currentImageIndex1 = 0;
  currentImageIndex2 = 0;
  currentImageIndex3 = 0;
  currentImageIndex4 = 0;

  cycleProjectImage(projectNumber: number) {
    if (projectNumber === 1) {
      this.currentImageIndex1 =
        (this.currentImageIndex1 + 1) % this.project1Images.length;
    } else if (projectNumber === 2) {
      this.currentImageIndex2 =
        (this.currentImageIndex2 + 1) % this.project2Images.length;
    } else if (projectNumber === 3) {
      this.currentImageIndex3 =
        (this.currentImageIndex3 + 1) % this.project3Images.length;
    } else if (projectNumber === 4) {
      this.currentImageIndex4 =
        (this.currentImageIndex4 + 1) % this.project4Images.length;
    }
  }
}
