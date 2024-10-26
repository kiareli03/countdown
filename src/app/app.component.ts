import { AfterViewInit, Component,ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'timer';
  date: any;
  now: any;
  targetDate: Date = new Date(2024, 10, 23,8);
  difference!: number;
  months: Array<string> = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true}) minutes!: ElementRef;
  @ViewChild('seconds', { static: true}) seconds!: ElementRef;

  private lastDisplayed = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  ngAfterViewInit() {
    this.updateCountdown(); // Atualiza inicialmente
    setInterval(() => this.updateCountdown(), 1000); // Atualiza a cada segundo
  }

  updateCountdown() {
    const now = new Date();
    this.difference = this.targetDate.getTime() - now.getTime();

    if (this.difference < 0) {
      this.displayTime(0, 0, 0, 0);
      return;
    }

    // Calcula os valores atuais de dias, horas, minutos e segundos
    const days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((this.difference % (1000 * 60)) / 1000);

    // Atualiza apenas se o valor mudou
    if (days !== this.lastDisplayed.days) {
      this.days.nativeElement.innerText = days.toString().padStart(2, '0');
      this.lastDisplayed.days = days;
    }
    if (hours !== this.lastDisplayed.hours) {
      this.hours.nativeElement.innerText = hours.toString().padStart(2, '0');
      this.lastDisplayed.hours = hours;
    }
    if (minutes !== this.lastDisplayed.minutes) {
      this.minutes.nativeElement.innerText = minutes.toString().padStart(2, '0');
      this.lastDisplayed.minutes = minutes;
    }
    if (seconds !== this.lastDisplayed.seconds) {
      this.seconds.nativeElement.innerText = seconds.toString().padStart(2, '0');
      this.lastDisplayed.seconds = seconds;
    }
  }

  displayTime(days: number, hours: number, minutes: number, seconds: number) {
    this.days.nativeElement.innerText = days.toString().padStart(2, '0');
    this.hours.nativeElement.innerText = hours.toString().padStart(2, '0');
    this.minutes.nativeElement.innerText = minutes.toString().padStart(2, '0');
    this.seconds.nativeElement.innerText = seconds.toString().padStart(2, '0');
  }
}
