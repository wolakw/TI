kwadratowe = function (a,b,c) {
    this.A = a;
    this.B = b;
    this.C = c;
    this.delta = null;
    this.x1 = null;
    this.x2 = null;
}

kwadratowe.prototype.liczDelta = function () {
    this.delta = (this.B * this.B) - 4 * this.A * this.C;
    return this.delta;
}

kwadratowe.prototype.miejscaZerowe = function () {
    let d = this.liczDelta();

    if (d > 0) {
        this.x1 = ((this.B * -1) - Math.sqrt(d)) / (2 * this.A);
        this.x1 = ((this.B * -1) + Math.sqrt(d)) / (2 * this.A);
    } else if (d == 0) {
        this.x1 = (this.B * -1) / (2 * this.A);
        this.x2 = null;
    } else {
        this.x1 = null;
        this.x2 = null;
    }
}

kwadratowe.prototype.getX1 = function () {
    return this.x1;
}

kwadratowe.prototype.getX2 = function () {
    return this.x2;
}

kwadratowe.prototype.getDelta = function () {
    return this.delta;
}

kwadratowe.prototype.waliduj = function () {
    if (this.A == null || isNaN(+this.A) || +this.A == 0)
        return false;
    if (this.B == null || isNaN(+this.B))
        return false;
    if (this.C == null || isNaN(+this.C))
        return false;

    return true;
}

kwadratowe.prototype.licz = function () {
    if (this.waliduj()) {
        this.miejscaZerowe();
    } else {
        alert('Nie podano prawidlowych danych');
    }
}

