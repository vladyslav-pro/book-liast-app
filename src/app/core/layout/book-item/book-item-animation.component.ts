import {trigger, transition, style, animate, keyframes} from '@angular/animations';

export const deleteItem= trigger('deleteItem', [
  transition(':leave', [
    animate(1000, keyframes([
      style({ opacity: 0, height: 0 }),
    ]))
  ])
]);
