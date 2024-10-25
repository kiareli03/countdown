import { Component,ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'timer';
  date: any;
  now: any;
  targetDate: Date = new Date(2024, 10, 23, 8);
  targetTime: number = this.targetDate.getTime();
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

  getFormattedTime(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Para garantir que sempre tenha 2 dígitos
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Converte de 24h para 12h, ajustando o 0 para 12
    return `${formattedHours}:${minutes} ${ampm}`;
  }

  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}, ${this.getFormattedTime(this.targetDate)}`;

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true}) minutes!: ElementRef;
  @ViewChild('seconds', { static: true}) seconds!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now; //data futura(data do evento) menos data atual
      this.difference = this.difference / (1000 * 60 * 60 * 24); // convertendo milisegundos para dias 

    !isNaN(this.days.nativeElement.innerText)
      ? (this.days.nativeElement.innerText = Math.floor(this.difference))
      : (this.days.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.targetDate.getHours();
    this.minutes.nativeElement.innerText = 59 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 59 - this.date.getSeconds();
  }
}

  


