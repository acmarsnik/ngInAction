import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { ChatmessageComponent } from './chatmessage.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

const getSentCssClass = <T>(fixture: ComponentFixture<T>) => fixture.debugElement.query(By.css('.sent'));

describe('ChatmessageComponent', () => {
  let component: ChatmessageComponent;
  let fixture: ComponentFixture<ChatmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmessageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmessageComponent);
    component = fixture.componentInstance;

    component.message = {text: 'TEST', sender: 'ABC', receiver: null};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sent class if sender is the user', () => {
    expect(false).toBe(true);
  });

  it('should not have a sent class if sender is someone else', () => {
    expect(false).toBe(true);
  });
});
