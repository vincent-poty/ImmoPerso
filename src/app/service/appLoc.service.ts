import { Injectable } from "@angular/core";
import { AppLoc } from "../models/appLoc.model";

@Injectable({
    providedIn: 'root'
})

export class AppLocService {
    appLocs: AppLoc[] = [
        {
            id : 1,
            Name: "Forum D15",
            description: "Studio avec coin à dormir",
            imageUrl: "C:/Users/Potyv/Documents/informatique angular/ImmoPersoAngularimmoperso/Images/avenue-du-forum.jpg",
            prixLoyer : 450.00,
            prixCharges : 125,
            surface : 40,
            nombreChambre : 0,
            createDate : new Date(),
            location : "Laeken",
        },
        {
            id : 2,
            Name: "Expo Q9",
            description: "Appartement une chambre",
            imageUrl: "C:\Users\Potyv\Documents\informatique angular\ImmoPersoAngular\immoperso\Images\IMG_1020.JPG",
            prixLoyer : 600,
            prixCharges : 150,
            surface : 50,
            nombreChambre : 1,
            createDate : new Date(),
            location : "Laeken",
        }
        
    ];


    getAllAppLocs(): AppLoc[] {
        return this.appLocs;
    }
}