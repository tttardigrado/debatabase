const storeKey = "saved";

export class SavedStore {
    saved: number[];
       
    constructor() {
        this.saved = JSON.parse(localStorage.getItem(storeKey) || "[]");
    }

    isSaved(val: number) {
        return this.saved.indexOf(val) > -1;
    }

    append(val: number) {
        const index = this.saved.indexOf(val);
        if (index === -1) {
            this.saved.push(val);
        }
    }

    delete(val: number) {
        const index = this.saved.indexOf(val);
        if (index > -1) {
            this.saved.splice(index, 1);
        }
    }

    destruct() {
        localStorage.setItem(storeKey, JSON.stringify(this.saved));
    }
}