from django.shortcuts import render
from .models import categoria,auto
#importar libreria donde se encuentra el user
from django.contrib.auth.models import User
# importart libreria que permita la validadcion
from django.contrib.auth import authenticate,logout,login as login_aut
#importar libreria decoradora que permite evitar el ingreso de usaruios a paginas web
from django.contrib.auth.decorators import login_required, permission_required

# Create your views here.

def index(request):
    categorias= categoria.objects.all()
    autos= auto.objects.filter(publicar=True).order_by('-fecha_ingreso')[:3]
    contexto=  {"autos":autos,"categorias":categorias}
    return render(request,"index.html",contexto)

def trabajos(request):
    autos=auto.objects.filter(publicar=True)
    cant= auto.objects.filter(publicar=True).count()
    categorias=categoria.objects.all()
    contexto={"autos":autos,"categorias":categorias,"cantidad":cant}
    return render(request,"trabajos.html",contexto)

def filtro_categoria(request):
    autos= auto.objects.filter(publicar=True)
    categorias= categoria.objects.all()
    cant= auto.objects.all().count()
    if request.POST:
        Categoria=request.POST.get("cboCategoria")
        obj_cate=categoria.objects.get(nombre=Categoria)
        autos=auto.objects.filter(categoria=obj_cate, publicar=True)
        cant= auto.objects.filter(categoria=obj_cate, publicar=True).count()
    contexto={"autos":autos,"categorias":categorias,"cantidad":cant}
    return render(request,"trabajos.html",contexto)

def filtro_cate(request, id):
    categorias= categoria.objects.all()
    obj_cate=categoria.objects.get(nombre=id)
    autos=auto.objects.filter(categoria=obj_cate, publicar=True)
    cant=auto.objects.filter(categoria=obj_cate, publicar=True).count()
    contexto={"autos":autos,"categorias":categorias,"cantidad":cant}
    return render(request,"trabajos.html",contexto)

def busqueda_nombre(request):
    autos= auto.objects.all()
    categorias= categoria.objects.all()
    cant= auto.objects.all()
    if request.POST:
        nombre=request.POST.get("txtNombre")
        autos=auto.objects.filter(marca=nombre, publicar=True)
        cant= auto.objects.filter(marca=nombre, publicar=True).count()
    contexto={"autos":autos,"categorias":categorias, "cantidad":cant}
    return render(request,"trabajos.html",contexto)

def buscar_nombre_mecanico(request):
    autos= auto.objects.all()
    categorias= categoria.objects.all()
    cant= auto.objects.all().count
    if request.POST:
        meca= request.POST.get("txtMeca")
        autos= auto.objects.filter(usuario=meca, publicar=True)
        cant= auto.objects.filter(usuario=meca, publicar=True).count()
    contexto={"autos":autos, "categorias":categorias, "cantidad":cant}
    return render(request,"trabajos.html",contexto)

def login(request):
    if request.POST:
        usuario= request.POST.get("txtUsuario")
        password= request.POST.get("txtPassword")
        usu= authenticate(request,username=usuario,password=password)
        if usu is not None and usu.is_active:
            login_aut(request,usu)
            return render(request,"index.html")
        else:
            contexto= {"mensaje":"usuario o contraseña incorrecto"}
            return render(request,"login.html",contexto)
    return render(request,"login.html")

def cerrar_sesion(request):
        logout(request)
        return render(request,"index.html")

def crear_cuenta(request):
    if request.POST:
        nombre= request.POST.get("txtNombre")
        apellido= request.POST.get("txtApellido")
        nom_usuario= request.POST.get("txtUsuario")
        email= request.POST.get("txtEmail")
        pass1= request.POST.get("txtPassword")
        pass2= request.POST.get("txtPassword2")
        if pass1!= pass2:
            contexto= {"mensaje":"contraseñas son diferentes"}
            return render(request,"registro.html",contexto)
        try:
            usu=User.objects.get(username=nom_usuario)
            contexto={"mensaje":"Nombre de usuario ya existe"}
            return render(request, "registro.html",contexto)
        except:
            usu= User()
            usu.first_name=nombre
            usu.last_name=apellido
            usu.email=email
            usu.username=nom_usuario
            usu.set_password(pass1)
            usu.save()

            us=authenticate(request,username=nom_usuario,password=pass1)
            login_aut(request,us)

            return render(request, "index.html")
    return render(request,"registro.html")

def contacto(request):
    return render(request,"contacto.html")

def ficha_auto(request, id):
    Auto= auto.objects.get(id_auto=id)
    contexto= {"auto":Auto}
    return render(request,"ficha.html",contexto)

@login_required(login_url='/login/')
@permission_required('rayoMakween.add_auto',login_url='/login/')
def registro(request):
    nom_user= request.user.username #para tomar el nombre de usuario de la tabla usuario
    registros=categoria.objects.all()
    autos= auto.objects.filter(usuario=nom_user)
    contexto={"categorias":registros, "autos":autos}
    if request.POST:
        marca= request.POST.get("txtMarca")
        modelo= request.POST.get("txtModelo")
        color= request.POST.get("txtcolor")
        anno= request.POST.get("numberanno")
        desc= request.POST.get("txtDescripcion")
        fecha= request.POST.get("txtfecha")
        cate= request.POST.get("cboCategoria")
        ima= request.FILES.get("txtImg")

        obj_cate=categoria.objects.get(nombre=cate)

        aut =auto()
        aut.marca=marca
        aut.modelo=modelo
        aut.descripcion=desc
        if ima is not None:
            aut.imagen=ima
        aut.color=color
        aut.anno_vehiculo= anno
        aut.fecha_ingreso=fecha
        aut.categoria=obj_cate
        aut.usuario=nom_user
        mensaje= "Auto ingresado"
        aut.save()
        autos= auto.objects.filter(usuario=nom_user)
        contexto={"categorias":registros,"mensaje":mensaje,"autos":autos}
    return render(request,"form_registro.html",contexto)

@login_required(login_url='/login/')
@permission_required('rayoMakween.delete_auto',login_url='/login/')
def Eliminar_auto(request,id):
    nom_user= request.user.username
    aut= auto.objects.get(id_auto=id)
    aut.delete()
    mensaje= "Vehiculo eliminado"
    registros= categoria.objects.all()
    autos= auto.objects.filter(usuario= nom_user)
    contexto= {"categorias":registros,"mensaje":mensaje,"autos":autos}
    return render(request,"form_registro.html",contexto)

@login_required(login_url='/login/')
@permission_required('rayoMakween.change_auto',login_url='/login/')
def Modificar_auto(request,id):
    aut= auto.objects.get(id_auto=id)
    registros= categoria.objects.all()
    contexto= {"categorias":registros,"autos":aut}
    return render(request,"modificar.html",contexto)

@login_required(login_url='/login/')
@permission_required('rayoMakween.change_auto',login_url='/login/')
def modificacion(request):
    mensaje=""
    nom_user= request.user.username
    if request.POST:
        id= request.POST.get("txtId")
        marca= request.POST.get("txtMarca")
        modelo= request.POST.get("txtModelo")
        color= request.POST.get("txtcolor")
        anno= request.POST.get("numberanno")
        desc= request.POST.get("txtDescripcion")
        fecha= request.POST.get("txtfecha")
        cate= request.POST.get("cboCategoria")
        ima= request.FILES.get("txtImg")

        obj_cate=categoria.objects.get(nombre=cate)
        try:
            aut=auto.objects.get(id_auto=id)
            aut.marca= marca
            aut.modelo= modelo
            aut.descripcion= desc
            aut.color= color
            aut.anno_vehiculo= anno
            aut.fecha_ingreso=fecha
            aut.categoria=obj_cate

            if ima is not None:
                aut.imagen= ima
            aut.comentario= '--'
            aut.save()
            mensaje= "modificado el auto "+marca+" "+modelo+" correctamente"
        except:
            mensaje= "no modifico el auto "+marca+" "+modelo
    
    registros= categoria.objects.all()
    autos= auto.objects.filter(usuario=nom_user)
    contexto= {"categorias":registros,"mensaje":mensaje,"autos":autos}
    return render(request,"form_registro.html",contexto)