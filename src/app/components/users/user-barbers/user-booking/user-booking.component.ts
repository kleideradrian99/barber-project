import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-user-booking',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss']
})
export class UserBookingComponent {
  // datos recibidos (service, professionals, etc.)
  public bookingData: any;

  // estado de selección
  public selectedProfessional: string | null = null;
  public selectedDate: string | null = null;
  public selectedHour: string | null = null;

  // datos cargados desde "API"
  public availableDates: string[] = [];
  public availableHours: string[] = [];

  // loaders
  public loadingDates = false;
  public loadingHours = false;

  // paso actual: 1=profesional, 2=fecha, 3=hora
  public step = 1;

  // refs públicos para plantilla (opcional)
  constructor(
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) private bsData: any,
    @Optional() @Inject(MAT_DIALOG_DATA) private dlgData: any,
    @Optional() public bsRef: MatBottomSheetRef<UserBookingComponent> | null,
    @Optional() public dialogRef: MatDialogRef<UserBookingComponent> | null
  ) {
    this.bookingData = this.bsData ?? this.dlgData ?? {};
  }

  // cerrar devolviendo resultado opcional
  public close(result?: any) {
    if (this.bsRef) this.bsRef.dismiss(result);
    if (this.dialogRef) this.dialogRef.close(result);
  }

  // seleccionar profesional (inicia carga de fechas)
  public selectProfessional(prof: string) {
    if (this.selectedProfessional === prof) return;
    this.selectedProfessional = prof;
    this.selectedDate = null;
    this.selectedHour = null;
    this.availableDates = [];
    this.availableHours = [];
    this.step = 2;
    this.loadDatesForProfessional(prof);
    // centrar opción seleccionada en slider
    this.scrollOptionIntoView('professionals', prof);
  }


  // seleccionar fecha (inicia carga de horas)
  public selectDate(date: string) {
    if (this.selectedDate === date) return;
    this.selectedDate = date;
    this.selectedHour = null;
    this.availableHours = [];
    this.step = 3;
    if (this.selectedProfessional) {
      this.loadHoursForProfessionalAndDate(this.selectedProfessional, date);
    }
    this.scrollOptionIntoView('dates', date);
  }

  public selectHour(hour: string) {
    this.selectedHour = hour;
    this.scrollOptionIntoView('hours', hour);
  }

  // volver al paso anterior
  public back() {
    if (this.step === 3) {
      this.step = 2;
      this.selectedHour = null;
    } else if (this.step === 2) {
      this.step = 1;
      this.selectedDate = null;
      this.availableDates = [];
    } else {
      this.close();
    }
  }

  // acción final: reservar
  public reserve() {
    if (!this.selectedProfessional || !this.selectedDate || !this.selectedHour) {
      // podría mostrar snackbar o validación UI; aquí cerramos con null
      return;
    }

    const payload = {
      barberId: this.bookingData?.barberId,
      service: this.bookingData?.service,
      professional: this.selectedProfessional,
      date: this.selectedDate,
      hour: this.selectedHour
    };

    // Reemplaza por llamada real a tu API -> luego close(result)
    console.log('Reservando ->', payload);
    this.close({ success: true, booking: payload });
  }

  // ===== Simulaciones de "API" (sustituir con llamadas reales) =====
  private async loadDatesForProfessional(prof: string) {
    this.loadingDates = true;
    try {
      const dates = await this.fetchDates(prof);
      this.availableDates = dates;
    } finally {
      this.loadingDates = false;
    }
  }

  private async loadHoursForProfessionalAndDate(prof: string, date: string) {
    this.loadingHours = true;
    try {
      const hours = await this.fetchHours(prof, date);
      this.availableHours = hours;
    } finally {
      this.loadingHours = false;
    }
  }

  // ejemplo: devuelve próximos 5 días (formato 'Lun 14') — sustituir por tu API
  private fetchDates(prof: string): Promise<string[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
        // simulamos que cada profesional tiene disponibilidad ligeramente distinta
        const offset = (prof.charCodeAt(0) % 3);
        const result = days.slice(offset, offset + 5).map((d, i) => `${d} ${14 + i}`);
        resolve(result);
      }, 700);
    });
  }

  // ejemplo: horas por día (sustituir por tu API)
  private fetchHours(prof: string, date: string): Promise<string[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        // simulamos horas diferentes según profes y fecha
        const base = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'];
        const seed = (prof.charCodeAt(0) + date.length) % base.length;
        const hours = base.slice(seed).concat(base.slice(0, seed));
        resolve(hours.slice(0, 6));
      }, 700);
    });
  }

  private scrollOptionIntoView(group: 'professionals' | 'dates' | 'hours', value: string) {
    // container con data-group
    const container = document.querySelector<HTMLElement>(`.options.slider[data-group="${group}"]`);
    if (!container) return;
    // buscar el botón con data-option exacto
    const btn = container.querySelector<HTMLElement>(`[data-option="${CSS.escape(value)}"]`) as HTMLElement | null;
    // fallback: si no encuentra por exact match (por espacios o caracteres), intenta includes
    const found = btn ?? Array.from(container.querySelectorAll<HTMLElement>('[data-option]'))
      .find(el => el.getAttribute('data-option')?.toString() === value || el.getAttribute('data-option')?.toString()?.includes(value));

    const el = found as HTMLElement | undefined;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      // scroll to center first child to give user context
      const first = container.children[0] as HTMLElement | undefined;
      first?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }



}
