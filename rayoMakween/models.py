from pyexpat import model
from django.db import models
from django.utils import timezone


# Create your models here.
class categoria(models.Model):
    nombre = models.CharField(primary_key=True,max_length=40)

    def __str__(self):
        return self.nombre

class auto(models.Model):
    id_auto = models.AutoField(primary_key=True)
    marca = models.CharField(max_length=40)
    modelo = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=500)
    imagen = models.ImageField(upload_to='fotos',default='fotos/no_imagen.jpg')
    categoria =models.ForeignKey(categoria, on_delete=models.CASCADE)
    publicar= models.BooleanField(default=False)
    comentario= models.TextField(default='--',null=True)
    anno_vehiculo= models.IntegerField(null=True)
    color= models.CharField(null=True,max_length=30)
    fecha_ingreso= models.DateField(default=timezone.now)
    usuario= models.CharField(max_length=45,null=True)

    def __str__(self):
        return  str(self.id_auto)+" "+self.marca+" "+self.modelo+" -- "+str(self.publicar)
