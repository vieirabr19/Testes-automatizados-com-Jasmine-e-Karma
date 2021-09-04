import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LikeWidgetModule } from './like-widget.module';
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  // it('Should auto generate ID when id input property is missing', () => {
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   expect(component.id).toBeTruthy();
  // });

  it('Should NOT generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} Should trigger emission when called`, done => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      expect(true).toBeTruthy();
      done();
    });
    component.like();
  });

});