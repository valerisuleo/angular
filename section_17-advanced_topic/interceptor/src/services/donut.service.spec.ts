import { TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DonutService } from './donut.service';
import { HttpErrorResponse } from '@angular/common/http';

const DONUTS = [
    { id: 1, style: "Old Fashioned", flavour: "Chocolate" },
    { id: 2, style: "Cake", flavour: "Coconut" },
    { id: 3, style: "Yeast", flavour: "Frosted" },
    { id: 4, style: "Glazed", flavour: "Plain" },
    { id: 5, style: "Cruller", flavour: "Plain" },
    { id: 6, style: "French Cruller", flavour: "Strawberry" },
    { id: 7, style: "Jelly", flavour: "Raspberry" },
    { id: 8, style: "Cream", flavour: "Boston Creme" },
    { id: 9, style: "Fritter", flavour: "Apple" }
];

fdescribe('IndexComponent', () => {
    let service: DonutService;
    let httpTestCtrl: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                DonutService
            ]
        });
        service = TestBed.get(DonutService);
        httpTestCtrl = TestBed.get(HttpTestingController);
    });

    it('should fetch all donuts', () => {
        service.getCollection()
            .subscribe((donuts: any[]) => {
                expect(donuts).toBeTruthy();
                expect(donuts.length).toBe(9);
                const donut = donuts.find(item => item.id === 5);
                expect(donut.style).toBe('Cruller');
            });
        const req = httpTestCtrl.expectOne('https://ga-doughnuts.herokuapp.com/doughnuts');
        expect(req.request.method).toEqual('GET');

        req.flush(DONUTS);
    });

    it('should find donut by id', () => {
        service.getItem(3)
            .subscribe((donut: any) => {
                expect(donut).toBeTruthy();
                expect(donut.id).toBe(3);
            })
        const req = httpTestCtrl.expectOne('https://ga-doughnuts.herokuapp.com/doughnuts/3');

        expect(req.request.method).toEqual('GET');

        req.flush(DONUTS[2]);
    });

    it('should update a donut', () => {
        const resourceUpdated = { flavour: 'asso' };
        service.update(7, resourceUpdated)
            .subscribe((donut: any) => {
                expect(donut.id).toBe(7)
            });
        const req = httpTestCtrl.expectOne('https://ga-doughnuts.herokuapp.com/doughnuts/7');
        expect(req.request.method).toEqual('PUT');
        expect(req.request.body.flavour).toEqual('asso');

        const originalResource = DONUTS[6];

        req.flush({
            ...originalResource,
            ...resourceUpdated
        });
    });

    it('should throw an error if update req fails', () => {
        const resourceUpdated = { flavour: 'asso' };

        service.update(9, resourceUpdated)
        .subscribe((donut) => {
            fail('we could not save it');
        }, (error: HttpErrorResponse) => {
            expect(error.status).toBe(500);
        })
        const req = httpTestCtrl.expectOne('https://ga-doughnuts.herokuapp.com/doughnuts/9');
        expect(req.request.method).toEqual('PUT');
        req.flush('Update donut failed', {status: 500, statusText: 'Internal server error'});

    });


});