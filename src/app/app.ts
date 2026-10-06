import { Component } from '@angular/core';
import { RevealOnScroll } from './directives/reveal-on-scroll.directive';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  imports: [About, Contact, Education, Experience, Footer, Hero, Navbar, Projects, RevealOnScroll, Skills],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
