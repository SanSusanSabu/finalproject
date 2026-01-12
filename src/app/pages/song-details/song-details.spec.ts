import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailsComponent} from './song-details';

describe('Productdetails', () => {
  let component: SongDetailsComponent;
  let fixture: ComponentFixture<SongDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
