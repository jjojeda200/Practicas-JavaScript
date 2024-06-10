import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

observable.subscribe({
  next(x) { console.log('Value: ' + x); },
  complete() { console.log('Completed'); }
});

import { interval } from 'rxjs';

const observableII = interval(1000);
const subscription = observableII.subscribe(x => console.log(x));

// Cancelar después de 5 segundos
setTimeout(() => subscription.unsubscribe(), 5000);