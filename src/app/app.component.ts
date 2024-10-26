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
  targetDate: Date = new Date(2024, 9, 26, 8);
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

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true}) minutes!: ElementRef;
  @ViewChild('seconds', { static: true}) seconds!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
    }, 1000);
  }

  tickTock() {
    const now = new Date();
    console.log(now)
    this.difference = this.targetDate.getTime() - now.getTime(); // diferença em milissegundos
  
   // Se a diferença é negativa, significa que o tempo alvo já passou
   if (this.difference < 0) {
    this.days.nativeElement.innerText = '0';
    this.hours.nativeElement.innerText = '0';
    this.minutes.nativeElement.innerText = '0';
    this.seconds.nativeElement.innerText = '0';
    return;
  }

   // Calculando dias, horas, minutos e segundos
   const days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
   const hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((this.difference % (1000 * 60)) / 1000);

  
  // Atualizando os elementos do DOM
  this.days.nativeElement.innerText = days.toString().padStart(2, '0');
  this.hours.nativeElement.innerText = hours.toString().padStart(2, '0'); // Para sempre mostrar 2 dígitos
  this.minutes.nativeElement.innerText = minutes.toString().padStart(2, '0'); // Para sempre mostrar 2 dígitos
  this.seconds.nativeElement.innerText = seconds.toString().padStart(2, '0'); // Para sempre mostrar 2 dígitos

  }
}
