# OlaSurf_proyecto

Para correr el api hay que moverse al directorio de api y correr la api "npm run api".
En otra terminal correr Vue.js , hay que dirigirse al directorio Ola Surf y "npm run dev".


En el lighthouse tengo un 79%.

![Screenshot from 2023-02-17 09-19-08](https://user-images.githubusercontent.com/100800688/219782161-0b5190df-965f-4daa-8b09-1908317e72fa.png)

# Requerimientos cliente

- Declarative rendering {{ }}

![Screenshot from 2023-02-19 19-06-47](https://user-images.githubusercontent.com/100800688/219966637-77757247-68bd-45ff-8bf3-59cb8d2edd7a.png)
![Screenshot from 2023-02-19 19-06-52](https://user-images.githubusercontent.com/100800688/219966643-fa6ba537-654c-4450-8491-62eb7fe319ef.png)
![Screenshot from 2023-02-19 19-07-02](https://user-images.githubusercontent.com/100800688/219966648-7b83044f-94ac-4665-934c-ea4fa507f9e1.png)

- Binding (v-bind)

Lo programe para que cargara la imagen del body.

![Screenshot from 2023-02-19 19-10-25](https://user-images.githubusercontent.com/100800688/219966800-a4ee8545-83f8-4849-89f0-281846cfac06.png)
![Screenshot from 2023-02-19 19-10-31](https://user-images.githubusercontent.com/100800688/219966802-283057b7-bac1-45cd-95b3-e59fa89f0339.png)

- List Rendering (v-for)
 
 Casi siempre lo programaba para pintar tarjetas desde la api, o el carrusel.
 
![Screenshot from 2023-02-19 18-39-10](https://user-images.githubusercontent.com/100800688/219966831-8a720aed-8d70-45b7-85b5-35cbb56b2e55.png)
![Screenshot from 2023-02-19 18-40-49](https://user-images.githubusercontent.com/100800688/219966841-b5f3aff0-7c68-4743-a85a-111ecc103738.png)
![Screenshot from 2023-02-19 19-13-08](https://user-images.githubusercontent.com/100800688/219966921-00476ee2-88d4-40b6-be89-3296eebd1b0b.png)

- 2-way Binding (v-model)

Lo uso para guardar info de  un input y luego pintarlo.

![Screenshot from 2023-02-19 19-03-14](https://user-images.githubusercontent.com/100800688/219966969-3ee98185-6573-4d2c-a86b-4b412768ff67.png)
![Screenshot from 2023-02-19 19-14-44](https://user-images.githubusercontent.com/100800688/219966992-3a0ec22e-50b4-4045-8e9a-f859f71f5820.png)

 -Event “click”
 
 Para enviar los valores del input con metodo post.
 
 ![Screenshot from 2023-02-19 19-16-05](https://user-images.githubusercontent.com/100800688/219967085-a91a0157-801d-453d-bc4a-5988aae162ee.png)
 ![Screenshot from 2023-02-19 19-16-28](https://user-images.githubusercontent.com/100800688/219967087-b029cbaf-495a-497d-b026-afa9cc994a92.png)
 
 - Methods

Método para controlar el tamaño de la ventana.

![Screenshot from 2023-02-19 18-40-18](https://user-images.githubusercontent.com/100800688/219967114-b50297f6-8e43-4689-9e2a-ec9f6fa282c5.png)
![Screenshot from 2023-02-19 18-40-49](https://user-images.githubusercontent.com/100800688/219967123-53d5679c-f96e-40ae-8ef9-fe24e0291a62.png)

## CRUD

- GET ALL

Cards y carrusel

![Screenshot from 2023-02-19 19-22-41](https://user-images.githubusercontent.com/100800688/219967458-a9399597-daf4-4848-afee-96beb779da70.png)
![Screenshot from 2023-02-19 19-16-28](https://user-images.githubusercontent.com/100800688/219967465-6d5f3528-7913-4b34-8f37-e4a50582a956.png)
![Screenshot from 2023-02-19 19-24-04](https://user-images.githubusercontent.com/100800688/219967520-3bfbe3b8-c9ac-4339-8373-6a19731509f9.png)

- GET ONE

![Screen![Screenshot from 2023-02-19 19-25-16](https://user-images.githubusercontent.com/100800688/219967593-6b313049-f240-46fa-a716-24b795174a83.png)
shot from 2023-02-19 19-24-56](https://user-images.githubusercontent.com/100800688/219967588-044b2c68-4ee8-4c5c-8180-9f2accbabd53.png)

![Screenshot from 2023-02-19 19-25-21](https://user-images.githubusercontent.com/100800688/219967596-e51fd0ff-9589-40be-a78c-c3b964e56eae.png)
![Screenshot from 2023-02-19 19-26-51](https://user-images.githubusercontent.com/100800688/219967682-c8529485-207f-4e64-af36-0a4986cb6d18.png)

- POST

PAra una nueca clase a la cesta de compra.

![Screenshot from 2023-02-19 19-28-44](https://user-images.githubusercontent.com/100800688/219967795-002bd294-ffe1-41a2-aae8-5dfa8554e550.png)

![Screenshot from 2023-02-19 19-28-52](https://user-images.githubusercontent.com/100800688/219967797-7c252174-a996-4ae6-8c70-5a36fe86a0d5.png)

![Screenshot from 2023-02-19 19-29-25](https://user-images.githubusercontent.com/100800688/219967805-f4111828-de17-4894-b090-45ab28e1d533.png)

![Screenshot from 2023-02-19 19-29-42](https://user-images.githubusercontent.com/100800688/219967807-ff4e66eb-38ec-4e9b-ad50-de5c0e703e7a.png)

- DELETE

Borrar de la cesta.

![Screenshot from 2023-02-19 19-28-52](https://user-images.githubusercontent.com/100800688/219967821-d564458e-9536-4ca4-b913-be9696afc009.png)
![Screenshot from 2023-02-19 19-31-27](https://user-images.githubusercontent.com/100800688/219967883-db1fc51c-aa59-4032-9282-9b5a6e00421d.png)
![Screenshot from 2023-02-19 19-31-43](https://user-images.githubusercontent.com/100800688/219967885-3891363d-0597-490b-97e8-e741a7c4b01e.png)

- PUT

O modificar la cesta.

![Screenshot from 2023-02-19 19-32-40](https://user-images.githubusercontent.com/100800688/219967953-91f115c3-ae21-4a12-952e-8d194826dbfd.png)
![Screenshot from 2023-02-19 19-33-03](https://user-images.githubusercontent.com/100800688/219967957-2a46211d-dec5-4579-89be-56198449b930.png)

 ## Api
 
 Uso una api remota separada de la parte de cliente.
 
![Screenshot from 2023-02-19 19-03-34](https://user-images.githubusercontent.com/100800688/219968274-0ebb7d9a-3727-43bd-a4d8-66f1c1b580e2.png)
![Screenshot from 2023-02-19 19-40-36](https://user-images.githubusercontent.com/100800688/219968309-799da4d4-6252-4ffe-90cd-843b6889bbec.png)


# Requerimientos interfices web

 * En total tengo un número de 7 paginas: 
  
  - Rutas
  - Alquiler
  - Hospedaje 
  - Clases 
  - Cesta 
  - Sobre nosotros
  - Login
  
  ![Screenshot from 2023-02-19 19-45-23](https://user-images.githubusercontent.com/100800688/219968549-851c4282-8f16-404f-9995-ce338e6bbe51.png)
  ![Screenshot from 2023-02-19 19-44-51](https://user-images.githubusercontent.com/100800688/219968552-d5fdd99d-4486-4fb9-ac18-6eac5251a928.png)
  
  * Componentes
  
  ![Screenshot from 2023-02-19 19-46-39](https://user-images.githubusercontent.com/100800688/219968607-3216d373-24b7-4ee6-9757-e637c5c9e7b1.png)
  
  * Bootstrap
  
  Uso bootstrap
  
  *  Obligatorio
       
       - Cards
       
 ![Screenshot from 2023-02-19 19-49-31](https://user-images.githubusercontent.com/100800688/219968838-ae70e526-e9f9-46e2-82ee-131f45396391.png)
       
![Screenshot from 2023-02-19 19-50-09](https://user-images.githubusercontent.com/100800688/219968842-1ca551db-ab40-4559-8385-cd9bef9ddebd.png)

![Screenshot from 2023-02-19 19-50-34](https://user-images.githubusercontent.com/100800688/219968845-6130a548-68fe-47c7-aa19-2f8661521ccf.png)

      - Navbar
      
  ![Screenshot from 2023-02-19 19-53-07](https://user-images.githubusercontent.com/100800688/219968924-5306045c-aa38-4c5c-a6fc-0352508ed64d.png)

  ![Screenshot from 2023-02-19 19-53-26](https://user-images.githubusercontent.com/100800688/219968929-72051257-a4a6-4c78-afa5-75654a980391.png)

  ![Screenshot from 2023-02-19 19-53-35](https://user-images.githubusercontent.com/100800688/219968938-674226fb-b1e0-481f-ac3e-fd3fa93b970e.png)

      -Carousel
      
![Screenshot from 2023-02-19 19-54-51](https://user-images.githubusercontent.com/100800688/219969546-9bddc937-bbb6-4d3b-9f99-887292c0cfe5.png)


![Screenshot from 2023-02-19 19-55-12](https://user-images.githubusercontent.com/100800688/219969061-06dc5038-f9cc-40f2-8073-0820cf84bf23.png)

![Screenshot from 2023-02-19 19-55-47](https://user-images.githubusercontent.com/100800688/219969069-63df8b35-88a4-4eda-8c9c-729ae23794d4.png)

       - Alerts
 ![Screenshot from 2023-02-19 19-57-01](https://user-images.githubusercontent.com/100800688/219969507-ad703a7f-22b2-4461-986d-c42339c0544b.png)
  
      
       - Buttons
       
 ![Screenshot from 2023-02-19 19-57-55](https://user-images.githubusercontent.com/100800688/219969171-96fe741e-6375-4252-8169-f59f0160bb1d.png)
 
        - Acordion
        
 ![Screenshot from 2023-02-19 19-58-54](https://user-images.githubusercontent.com/100800688/219969403-51fbc313-3e07-4625-8d91-d256c7c0bd36.png)

        
        
* Customización

 Sobre todo lo use en los colores basada en la paleta de coleros que elegi.
 
 ![Screenshot from 2023-02-19 20-01-30](https://user-images.githubusercontent.com/100800688/219969349-92442f69-ff09-46b9-a41c-2fa71d61e9bb.png)


También importe sass a mi proyecto sobre todo para que sea full resposive.


![Screenshot from 2023-02-19 20-07-21](https://user-images.githubusercontent.com/100800688/219969690-9208e3e8-cd45-4b65-966d-1684c2c39e0c.png)

![Screenshot from 2023-02-19 20-07-47](https://user-images.githubusercontent.com/100800688/219969693-b4ede741-32be-4ad4-b57c-afe1849d332b.png)

![Screenshot from 2023-02-19 20-08-02](https://user-images.githubusercontent.com/100800688/219969698-3eb9204b-2d8e-49cb-becf-b58e57bb572a.png)

* Utilies y responsivo

Usaba más que todo spacin ,sizing y position para el tamaño  de los contenedores la posicion de las cartas y el margen que debían tener para que sea resposinvivo.

![Screenshot from 2023-02-19 20-12-26](https://user-images.githubusercontent.com/100800688/219969963-6e42fd73-7270-4de8-a369-6be1806aefff.png)

![Screenshot from 2023-02-19 20-12-33](https://user-images.githubusercontent.com/100800688/219969967-ac8c7294-d099-4912-819f-da742e6a5316.png)

![Screenshot from 2023-02-19 20-12-58](https://user-images.githubusercontent.com/100800688/219969969-6adf18fe-a8a2-4644-a341-94e55f8f8a11.png)

![Screenshot from 2023-02-19 20-13-11](https://user-images.githubusercontent.com/100800688/219969970-0f2795f3-3c4f-4186-aaba-ac6240558f4c.png)

![Screenshot from 2023-02-19 20-13-15](https://user-images.githubusercontent.com/100800688/219969973-59682fbc-37a4-462e-aa57-71fe99c73305.png)

* Imagenes

La fuente de donde descargue todas las imagenes es de pexels, estan casi todas optimizasdas y escala apropiada, sobre todo las del carrusel ,cards y las del body de los componentes.

Para que tengan el tamaño adecuado use el programa GIMP

![Screenshot from 2023-02-19 20-18-09](https://user-images.githubusercontent.com/100800688/219970212-9eb46052-7e33-4447-80c1-a40d7582e166.png)

* UI/UX

Sobre todo en este proyecto donde más esta caracterizado es en la accesibilidad y la facilidad de encontrar lo que necesitas, sin abrumar al cliente pero tampoco siendo muy redundantes.

La parte de diseño es agradable y sencilla, no tan cargadao y el color azul da mas tranquilidad al recordar al mar.

* Extensiones

- Más de 4 paginas, en total 7.
- También empleo una api de imagenes en remoto.

![Screenshot from 2023-02-19 20-25-38](https://user-images.githubusercontent.com/100800688/219970536-867bec8a-ec56-4d1f-aab3-b436455644dd.png)

- En este proyecto la mayoria de items son cargados de manera dinamica.


![Screenshot from 2023-02-19 20-27-41](https://user-images.githubusercontent.com/100800688/219970644-c26302f6-f878-48e5-9db6-17a1f1680b26.png)

![Screenshot from 2023-02-19 20-27-53](https://user-images.githubusercontent.com/100800688/219970646-bcba7540-eaca-4c10-b746-1f41b30937c8.png)

![Screenshot from 2023-02-19 20-28-32](https://user-images.githubusercontent.com/100800688/219970649-53bf657f-cc7f-44fa-a76a-3fcdfb659f08.png)

![Screenshot from 2023-02-19 20-28-22](https://user-images.githubusercontent.com/100800688/219970651-81fbb493-be79-4eda-9a52-ed644bc73d41.png)

- No he empleado Cookies.


 
 
 
 
 
 
 
 
 
 
 




