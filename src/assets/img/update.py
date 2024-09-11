import os

# Ruta donde se encuentran las imágenes
directorio_imagenes = './'  # Cambia esta ruta a tu directorio

# Prefijo para el nuevo nombre
prefijo_nuevo_nombre = 'cpf5-'

# Número inicial
numero_inicial = 1

# Obtener la lista de archivos en el directorio
archivos = os.listdir(directorio_imagenes)

# Filtrar solo los archivos .JPG
imagenes_jpeg = [archivo for archivo in archivos if archivo.lower().endswith('.jpg')]

# Ordenar las imágenes (opcional, si deseas renombrar en orden)
imagenes_jpeg.sort()

# Renombrar los archivos
for imagen in imagenes_jpeg:
    # Crear el nuevo nombre
    nuevo_nombre = f"{prefijo_nuevo_nombre}{numero_inicial}.jpg"
    
    # Ruta completa del archivo original y del nuevo archivo
    ruta_original = os.path.join(directorio_imagenes, imagen)
    ruta_nueva = os.path.join(directorio_imagenes, nuevo_nombre)
    
    # Renombrar el archivo
    os.rename(ruta_original, ruta_nueva)
    
    # Incrementar el número
    numero_inicial += 1

print("Renombramiento completado.")
