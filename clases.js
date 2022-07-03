const destinosDisponibles = []

class Destino{
    constructor(img,ciudad, cantNoches, incluye, precio){
        this.img=img
        this.ciudad=ciudad
        this.cantNoches=cantNoches
        this.incluye=incluye
        this.precio=precio
    }
}

const destino1=new Destino ( "mendoza.jpg" ,"Mendoza", 7, "Aereos, Hab Doble, Desayuno + Almuerzo, 2 Excursiones", 30000)
const destino2=new Destino("cordoba.jpg" ,"Cordoba",10, "Micro, Hab. Doble, Desayuno + Cena", 25000)
const destino3=new Destino("bariloche.jpg" ,"Bariloche", 5, "Aereos, Hab Doble + Desayuno, 3 Excursiones", 40000)
const destino4=new Destino("jujuy.jpg" ,"Jujuy", 10,"Aereos, Hab. Doble + Desayuno y Cena, 5 Excursiones" ,35000)
const destino5=new Destino("salta.jpg" ,"Salta", 12,"Micro, Hab Doble + Desayuno, 5 Excuriosnes" ,38000)
const destino6=new Destino("santaCruz.jpg" ,"Santa Cruz", 4,"Aereos, Hab Doble + Desayuno y cena, 3 Excursiones" ,60000)

destinosDisponibles.push(destino1, destino2, destino3, destino4, destino5, destino6)
