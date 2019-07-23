'use strict';

describe('Plane Unit Test:', function(){
    var plane;
    var airport;

    beforeEach(function(){
        plane = new Plane();
        airport = jasmine.createSpyObj('airport', ['clearForLanding']);
    });

    it('plane can land', function(){
        expect(plane.land).not.toBeUndefined()
    });

    it('allows a plane to land',function(){
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
});


// describe('Feature Test:', function(){
//     var plane;
//     var airport;
  
//     beforeEach(function(){
//       plane = new Plane();
//       airport = new Airport();
//     });
  
//     it('planes can be instructed to land at an airport', function(){
//       plane.land(airport);
//       expect(airport.planes()).toContain(plane);
//     });
//   });