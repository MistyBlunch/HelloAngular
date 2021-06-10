import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiboserviceService {

  constructor() { }

  fibo(n: number) {
    if (n == 0 || n == 1) {
      return 1
    }
    return this.fibo(n-1) + this.fibo(n-2)
  }
}
