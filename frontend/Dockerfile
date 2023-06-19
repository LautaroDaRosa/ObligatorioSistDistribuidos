# Usar la imagen base de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm ci --only=production

# Copiar los archivos del proyecto al contenedor
COPY . .

# Compilar la aplicación Next.js para producción
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]
