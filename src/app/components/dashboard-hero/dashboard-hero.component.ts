import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.css'],
})
export class DashboardHeroComponent implements OnInit {
  image = faker.image.image(1000, 200, true);
  title = faker.lorem.sentence(Math.floor(Math.random() * 4) + 1).slice(0, -1);
  description = faker.lorem.paragraphs(2);
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

  public generateNewProject() {
    this.image = faker.image.image(1000, 200, true);
    this.title = faker.lorem
      .sentence(Math.floor(Math.random() * 4) + 1)
      .slice(0, -1);
    this.description = faker.lorem.paragraphs(2);
    this.randomCategories = this.getRandomCategories();
    this.isNew = Math.floor(Math.random() * 10) < 3;
  }

  constructor() {}

  ngOnInit(): void {}
}
