import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, switchMap, tap } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { Rent } from "./rent";


 @Injectable({ 
   providedIn: 'root'
})

export class AppLocService {
    /* getAllAppLocs(): Rent[] {
      throw new Error('Method not implemented.');
    } */
       
    private Rent: Rent = new Rent();

    constructor(private http: HttpClient) { }

    setCurrrentRent(rent: Rent) {
        this.Rent = rent;
    }

    getCurrentRent(): Rent {
        return this.Rent;
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    private RentsUrl = 'http://localhost:3002/api/locations';

    getRents(): Observable<Rent[]> {
        return this.http.get<Rent[]>(this.RentsUrl)
            .pipe(catchError(this.handleError<Rent[]>('getRents', [])))
    }

    addRent(Rent: Rent): Observable<Rent> {
        return this.http.post<Rent>(this.RentsUrl, Rent, this.httpOptions).pipe(
            catchError(this.handleError<Rent>('addRent'))
        );
    }

    deleteRent(id: any): Observable<Rent> {
        const url = `${this.RentsUrl}/${id}`;
        return this.http.delete<Rent>(url, this.httpOptions).pipe(
            tap(_ => console.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Rent>('deleteHero')));
    }

    updateRent(Rent: Rent): Observable<any> {
        const url = `${this.RentsUrl}/${Rent._id}`;
        return this.http.put<Rent>(url, Rent, this.httpOptions).pipe(
            tap(_ => console.log(`updated Rent id=${Rent._id}`)),
            catchError(this.handleError<Rent>('update Rent'))
        );
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}

    // appLocs: AppLoc[] = [
    //     {
    //         id : 1,
    //         Name: "Forum D15",
    //         description: "Studio avec coin à dormir",
    //         imageUrl: "https://www.cjoint.com/doc/22_02/LBAldgjHK5A_avenue-du-forum.jpg",
    //         prixLoyer : 450.00,
    //         prixCharges : 125,
    //         surface : 40,
    //         nombreChambre : 0,
    //         createDate : new Date(),
    //         location : "Laeken",
    //     },
    //     {
    //         id : 2,
    //         Name: "Expo Q9",
    //         description: "Appartement une chambre",
    //         imageUrl: "assets/IMG_1020.JPG",
    //         prixLoyer : 625,
    //         prixCharges : 150,
    //         surface : 50,
    //         nombreChambre : 1,
    //         createDate : new Date(),
    //         location : "Laeken",
    //     }
        
    // ];

    

