import {trigger, state, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
])


export const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
          optional: true,
      }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
          optional: true,
      }),
  ]),
];

export const routerTransition3 = trigger('routerTransition3',[
  transition('* => right', right),
  transition('* => left', left),
  transition('* => right1', right),
  transition('* => left1', left)
]);


export const routerTransition2 = trigger('routerTransition2',
[
    transition(
        "void => prev", // ---> Entering --->
        [
            // In order to maintain a zIndex of 2 throughout the ENTIRE
            // animation (but not after the animation), we have to define it
            // in both the initial and target styles. Unfortunately, this
            // means that we ALSO have to define target values for the rest
            // of the styles, which we wouldn't normally have to.
            style({
                left: -100,
                opacity: 0.0,
                zIndex: 2
            }),
            animate(
                "200ms ease-in-out",
                style({
                    left: 0,
                    opacity: 1.0,
                    zIndex: 2
                })
            )
        ]
    ),
    transition(
        "prev => void", // ---> Leaving --->
        [
            animate(
                "200ms ease-in-out",
                style({
                    left: 100,
                    opacity: 0.0
                })
            )
        ]
    ),
    transition(
        "* => next", // <--- Entering <---
        [
            // In order to maintain a zIndex of 2 throughout the ENTIRE
            // animation (but not after the animation), we have to define it
            // in both the initial and target styles. Unfortunately, this
            // means that we ALSO have to define target values for the rest
            // of the styles, which we wouldn't normally have to.
            style({
                left: 100,
                opacity: 0.0,
                zIndex: 2
            }),
            animate(
                "200ms ease-in-out",
                style({
                    left: 0,
                    opacity: 1.0,
                    zIndex: 2
                })
            )
        ]
    ),
    transition(
        "next => *", // <--- Leaving <---
        [
            animate(
                "200ms ease-in-out",
                style({
                    left: -100,
                    opacity: 0.0
                })
            )
        ]
    )
])