/* Para insipirarte para la implementacion del 
ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta 
que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su 
constructor. En ZombieConductor
no son exactamente los mismos parametros que en el 
objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov /*, parametro/s extra de ZombieConductor*/ , direccion) {
    /* Completar constructor a partir de Enemigo */
    //Enemigo.call(/* ... */);
    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
    /* No olvidar agregar la/s propiedad/es unicas 
    de ZombieConductor necesarias */
    this.direccion = direccion;
}


/* Completar creacion del ZombieConductor */

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;


/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function() {
    //con el parametro direccion se define en que sentido zombieConductor recorre la pantalla
    if (this.direccion == 'v') {
        this.y += this.velocidad;
        //verificar que no se va fuera del canvas
        if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
            this.velocidad *= -1;
        }
    }
    if (this.direccion == 'h') {
        this.x += this.velocidad;
        //verificar que no se va fuera del canvas
        if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
            this.velocidad *= -1;
        }
    };
}
ZombieConductor.prototype.atacar = function(jugador) {
    Jugador.perderVidas(Jugador.vidas);
}