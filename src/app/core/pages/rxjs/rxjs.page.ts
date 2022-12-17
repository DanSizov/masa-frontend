import { Component } from '@angular/core';
import { Observable, Observer, of, Subscription, tap, map } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.less'],
})
export class RxjsPage {
    constructor() {

        this.simpleSubscription();
        // this.fullSubscription();
        this.subscriptionWithTap();
        this.subscriptionWithMap();
    }

    private simpleSubscription(): void {

        const observable$: Observable<number> = of(1, 2, 3);

        observable$.subscribe((item: number) => console.log(item));
    }

    private fullSubscription(): void {

        const observable$: Observable<number> = of(1, 2, 3);

        const observer: Observer<number> = {
            next(value: number) {
                if (value === 2) {
                    throw new Error("Bad value")
                }
                console.log(value);
            },
            error(err) {
                console.log(err)
            },
            complete() {
                console.log("Observer completed !!!!")
            }
        };

        const subscription: Subscription = observable$.subscribe(observer);
    }

    private subscriptionWithTap(): void {

        const observable$: Observable<number> = of(1, 2, 3);

        observable$.pipe(
            tap((item: number) => {
                console.log(item);
            })
        ).subscribe()
    }

    private subscriptionWithMap(): void {

        const observable$: Observable<number> = of(1, 2, 3)

        observable$.pipe(
            map((item: number) => {
                return item + "cool!"
            }),
            tap((item: string) => {
                console.log(item)
            }),
            map((item: string) => {
                return item.substring(0, 2)
            }),
            tap((item: string) => {
                console.log(item)
                item = item + " tapped"
            }),
            map((item: string) => {
                return "Hooray: " + item;
            })
        ).subscribe((item: string) => console.log(`Final: ${item}`))
    }
}
