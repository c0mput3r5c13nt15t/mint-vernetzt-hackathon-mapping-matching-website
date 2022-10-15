import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  image = faker.image.image(192, 192, true);
  title = faker.lorem.sentence(Math.floor(Math.random() * 4) + 1).slice(0, -1);
  categaries = [
    'Projekt',
    'Veranstaltung',
    'MINT',
    'Hackathon',
    'Workshop',
    'Get Together',
    'Grundschule',
    'Gymnasium',
    'Realschule',
  ];
  randomCategories = this.getRandomCategories();
  getRandomCategories() {
    let randomCategories = [];
    for (let i = 0; i < Math.floor(Math.random() * 4); i++) {
      let randomIndex = Math.floor(Math.random() * this.categaries.length);
      randomCategories.push(this.categaries[randomIndex]);
    }
    return randomCategories;
  }
  isNew = Math.floor(Math.random() * 10) < 3;

  constructor() {}

  ngOnInit(): void {}
}
