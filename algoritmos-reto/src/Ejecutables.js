class Ejecutable extends Cuenta {
    constructor(titular, cantidad) {
        super (titular,cantidad)
        this.cantidad = cantidad;
        
        return {
            get cantidad () {
            return cantidad;
            },
            set cantidad (cantidad) {
                cantidad = cantidad;
            }
        };
    }
    
}