import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProyectoPrueba2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProyectoPrueba2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ProyectoPrueba2 app is running!');
  });
  

  /*
    transform(heroes: Heroe[],name: string): Heroe[] {
   /*se devuelve el arreglo original sin filtrar*/
   /*if(!name || !heroes){
    return heroes;
   } 
  /*miniscula*/
  /*name = name.toLowerCase();
   return heroes.filter(Heroe=> Heroe.nombre.toLowerCase().includes(name));
  }
  */
});
