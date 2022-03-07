
function Item (title, veg, price, desc, image, category) {
    this.title = title;
    this.veg = veg;
    this.price = price;
    this.desc = desc;
    this.image = image;
    this.category = category;
}

// Builder class for each item

class ItemBuilder {

    constructor() {
        this.title = '';
        this.veg = false;
        this.price = 0;
        this.desc = "";
        this.image = "";
        this.category = "";
        this.count = 0;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setisVeg(veg) {
        this.veg = veg;
        return this;
    }


    setPrice(price) {
        this.price = price;
        return this;
    }

    setDesc(desc) {
        this.desc = desc;
        return this;
    }

    setImage(image) {
        this.image = image;
        return this;
    }

    setCategory(category) {
        this.category = category;
        return this;
    }
    setCount(cnt){
        this.count = cnt;
        return this;
    }

    build() {
        return new Item(this.title, this.veg, this.price, this.desc, this.image, this.category, this.count);
    }
}

export { ItemBuilder };