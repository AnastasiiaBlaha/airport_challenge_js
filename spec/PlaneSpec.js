'use strict';

describe('Plane Unit Test:', function(){
    var plane;
    var airport;

    beforeEach(function(){
        plane = new Plane();
        airport = jasmine.createSpyObj('airport', ['clearForLanding','clearForTakeOff']);
    });

    it('plane can land', function(){
        expect(plane.land).not.toBeUndefined()
    });

    it('allows a plane to land',function(){
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

    it('plane can takeoff from an airport', function(){
        plane.land(airport);
        plane.takeoff();
        expect(airport.clearForTakeOff).toHaveBeenCalled();
    });
});
