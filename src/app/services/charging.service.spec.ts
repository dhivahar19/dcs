import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ChargingService } from './charging.service';
import { of } from 'rxjs';

describe('ChargingService', () => {
  let service: ChargingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ChargingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have getCdrData function', () => {
    expect(service.getCdrData).toBeTruthy();
  });    
  it('should return expected results from getCdrData function', waitForAsync(() => {
    const expectedResults =  [{
      "sessionId": "7404cd96-11a9-11ee-be56-0242ac120002",
      "vehicleId": "B85C4J",
      "startTime": "10/05/2023 04:23:32",
      "endTime": "10/05/2023 06:23:32",
      "totalCost": 15
    },
    {
      "sessionId": "7404d020-11a9-11ee-be56-0242ac120002",
      "vehicleId": "0Y3TPC",
      "startTime": "20/01/2023 23:17:28",
      "endTime": "20/01/2023 23:50:28",
      "totalCost": 10
    }];
    spyOn(service, 'getCdrData').and.returnValue(of(expectedResults));
    service.getCdrData().subscribe((results) => {
      expect(results).toEqual(expectedResults);
    })
  }));  
});
