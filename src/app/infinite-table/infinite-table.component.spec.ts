import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteTableComponent } from './infinite-table.component';

describe('InfiniteTableComponent', () => {
  let component: InfiniteTableComponent;
  let fixture: ComponentFixture<InfiniteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
