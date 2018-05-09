import { Injectable } from '@angular/core';
import { Collectable } from "./collectable.model"; 

export class CollectableService {
    
    private collectables = [
        {description:'Item One', type:'One'},
        {description:'Item Two', type:'Two'},
        {description:'Item Three', type:'Three'},
        {description:'Item Four', type:'Four'}
    ];

    private collection: Collectable[] = [];

    getCollectables() {
        return this.collectables;
    }

    getCollection() {
        return this.collection;
    }

    addToCollection(item: Collectable) {
        if (this.collection.indexOf(item) !== -1) {
            return;
        }
        this.collection.push(item);
    }

    removeFromCollection(item: Collectable) {
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}
