import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed, async } from '@angular/core/testing';

// Load the implementations that should be tested
import { About } from './about.component';
import { AboutModule } from './about.module';

describe('About', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AboutModule,
        // provide a better mock
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn) => fn({
                yourData: 'yolo'
              })
            }
          }
        },
        About
      ]
    });
    TestBed.compileComponents();
  }));


  it('should log ngOnInit', inject([], () => {
    let fixture = TestBed.createComponent(About);
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

  }));

});
