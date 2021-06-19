from django.contrib import admin
from django.urls import path, include
from .views import buscar_nombre_mecanico, busqueda_nombre, ficha_auto, modificacion,index, Modificar_auto,Eliminar_auto, crear_cuenta, trabajos, login, cerrar_sesion, filtro_categoria, filtro_cate, contacto, registro, ficha_auto

urlpatterns = [
    path('', index, name='IND'),
    path('trabajos/',trabajos,name='TRAB'),
    path('login/',login,name='LOG'),
    path('registro/',crear_cuenta,name='REG'),
    path('contacto/',contacto,name='CONT'),
    path('from/registro/',registro,name='FREG'),
    path('ficha/<id>/',ficha_auto,name="FICAU"),
    path('filtro_categoria/',filtro_categoria,name='FILTROC'),
    path('filtro_cate/<id>/',filtro_cate,name="FILTROCA"),
    path('cerrar_sesion/',cerrar_sesion,name="CERRARS"),
    path('eliminar_auto/<id>/',Eliminar_auto,name="ELIA"),
    path('modificar_auto/<id>/',Modificar_auto,name="MODIA"),
    path('modificacion/',modificacion,name="MODIFI"),
    path('buscar_nombre/',busqueda_nombre,name='BUSCARNO'),
    path('buscar_usuario_mecanico',buscar_nombre_mecanico,name='BUSCARME'),
]
