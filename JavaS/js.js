// Lista de palabras y pistas
const words = [
    { spanish: "animal que dice 'guau'", english: "dog", hint: "Nombre de animal que dice 'guau'" },
    { spanish: "animal que maúlla", english: "cat", hint: "Nombre de animal que maúlla" },
    { spanish: "fruta amarilla y larga", english: "banana", hint: "Fruta amarilla y larga" },
    { spanish: "vehículo con cuatro ruedas", english: "car", hint: "Vehículo con cuatro ruedas" },
    { spanish: "animal grande con trompa", english: "elephant", hint: "Animal grande con trompa" },
    { spanish: "fruta roja pequeña", english: "cherry", hint: "Fruta roja pequeña" },
    { spanish: "marisco con cáscara", english: "crab", hint: "Marisco con cáscara" },
    { spanish: "animal que vive en la selva", english: "jungle", hint: "Animal que vive en la selva" },
    { spanish: "bebida caliente", english: "coffee", hint: "Bebida caliente" },
    { spanish: "cuerpo celestial brillante", english: "star", hint: "Cuerpo celestial brillante" },
    { spanish: "animal que lleva cáscara dura", english: "turtle", hint: "Animal que lleva cáscara dura" },
    { spanish: "mueble para dormir", english: "bed", hint: "Mueble para dormir" },
    { spanish: "fruta tropical", english: "pineapple", hint: "Fruta tropical con una corona" },
    { spanish: "animal que hace 'moo'", english: "cow", hint: "Animal que hace 'moo'" },
    { spanish: "lugar para ver películas", english: "cinema", hint: "Lugar para ver películas" },
    { spanish: "animal marino con tentáculos", english: "octopus", hint: "Animal marino con tentáculos" },
    { spanish: "animal que vive en el bosque", english: "bear", hint: "Animal que vive en el bosque" },
    { spanish: "lugar para nadar", english: "pool", hint: "Lugar para nadar" },
    { spanish: "elemento de escritura", english: "pen", hint: "Elemento de escritura" },
    { spanish: "planta que da frutos rojos", english: "strawberry", hint: "Planta que da frutos rojos" },
    { spanish: "animal rápido", english: "cheetah", hint: "Animal rápido que puede correr muy rápido" },
    { spanish: "tiempo en el cual se duerme", english: "night", hint: "Tiempo en el cual se duerme" },
    { spanish: "instrumento musical con cuerdas", english: "guitar", hint: "Instrumento musical con cuerdas" },
    { spanish: "planta verde para ensaladas", english: "lettuce", hint: "Planta verde para ensaladas" },
    { spanish: "ciudad famosa en Francia", english: "paris", hint: "Ciudad famosa en Francia" },
    { spanish: "animal que corre en el campo", english: "horse", hint: "Animal que corre en el campo" },
    { spanish: "fruta con cáscara dura", english: "nut", hint: "Fruta con cáscara dura" },
    { spanish: "cosa que usamos para ver la televisión", english: "remote", hint: "Cosa que usamos para ver la televisión" },
    { spanish: "lugar para comer en casa", english: "kitchen", hint: "Lugar para comer en casa" },
    { spanish: "animal que vive en el mar y tiene conchas", english: "snail", hint: "Animal que vive en el mar y tiene conchas" },
    { spanish: "película de dibujos animados", english: "cartoon", hint: "Película de dibujos animados" },
    { spanish: "instrumento musical de viento", english: "trumpet", hint: "Instrumento musical de viento" },
    { spanish: "objeto para escribir en papel", english: "marker", hint: "Objeto para escribir en papel" },
    { spanish: "animal que tiene rayas blancas y negras", english: "zebra", hint: "Animal que tiene rayas blancas y negras" },
    { spanish: "bebida refrescante de color oscuro", english: "cola", hint: "Bebida refrescante de color oscuro" },
    { spanish: "animal que vive en el desierto", english: "camel", hint: "Animal que vive en el desierto" },
    { spanish: "planta con flores rosas", english: "rose", hint: "Planta con flores rosas" },
    { spanish: "animal que come zanahorias", english: "rabbit", hint: "Animal que come zanahorias" },
    { spanish: "instrumento para medir el tiempo", english: "watch", hint: "Instrumento para medir el tiempo" },
    { spanish: "lugar para leer libros", english: "library", hint: "Lugar para leer libros" },
    { spanish: "animal marino con una concha dura", english: "clams", hint: "Animal marino con una concha dura" },
    { spanish: "fruta de color verde por fuera y roja por dentro", english: "watermelon", hint: "Fruta de color verde por fuera y roja por dentro" },
    { spanish: "un día de la semana", english: "monday", hint: "Un día de la semana" },
    { spanish: "animal que construye presas", english: "beaver", hint: "Animal que construye presas" },
    { spanish: "calzado para la lluvia", english: "boots", hint: "Calzado para la lluvia" },
    { spanish: "piedra preciosa de color rojo", english: "ruby", hint: "Piedra preciosa de color rojo" },
    { spanish: "instrumento de cocina para batir", english: "whisk", hint: "Instrumento de cocina para batir" },
    { spanish: "animal de granja que pone huevos", english: "hen", hint: "Animal de granja que pone huevos" },
    { spanish: "piedra preciosa de color azul", english: "sapphire", hint: "Piedra preciosa de color azul" },
    { spanish: "un país en América del Sur", english: "brazil", hint: "Un país en América del Sur" },
    { spanish: "un tipo de árbol con hojas largas y finas", english: "willow", hint: "Un tipo de árbol con hojas largas y finas" },
    { spanish: "fruta que se usa para hacer vino", english: "grape", hint: "Fruta que se usa para hacer vino" },
    { spanish: "animal que tiene plumas y canta", english: "bird", hint: "Animal que tiene plumas y canta" },
    { spanish: "un continente", english: "asia", hint: "Un continente" },
    { spanish: "fruta con cáscara y carne blanca", english: "peach", hint: "Fruta con cáscara y carne blanca" },
    { spanish: "animal que vive en el mar y tiene espinas", english: "sea urchin", hint: "Animal que vive en el mar y tiene espinas" },
    { spanish: "vehículo que va por el agua", english: "boat", hint: "Vehículo que va por el agua" },
    { spanish: "fruta pequeña y morada", english: "grape", hint: "Fruta pequeña y morada" },
    { spanish: "un lugar donde se hacen experimentos científicos", english: "laboratory", hint: "Un lugar donde se hacen experimentos científicos" },
    { spanish: "piedra preciosa verde", english: "emerald", hint: "Piedra preciosa verde" },
    { spanish: "instrumento para medir la temperatura", english: "thermometer", hint: "Instrumento para medir la temperatura" },
    { spanish: "animal que vive en el agua y tiene tentáculos", english: "jellyfish", hint: "Animal que vive en el agua y tiene tentáculos" },
    { spanish: "fruta que se puede hacer jugo", english: "orange", hint: "Fruta que se puede hacer jugo" },
    { spanish: "animal que vive en el bosque y es conocido por su cola", english: "fox", hint: "Animal que vive en el bosque y es conocido por su cola" },
    { spanish: "un dispositivo para escuchar música", english: "headphones", hint: "Un dispositivo para escuchar música" },
    { spanish: "planta medicinal con hojas verdes", english: "mint", hint: "Planta medicinal con hojas verdes" },
    { spanish: "un tipo de flor que es roja", english: "poppy", hint: "Un tipo de flor que es roja" },
    { spanish: "lugar donde se guardan libros", english: "library", hint: "Lugar donde se guardan libros" },
    { spanish: "animal que vive en las montañas y tiene cuernos", english: "ram", hint: "Animal que vive en las montañas y tiene cuernos" },
    { spanish: "un utensilio para cocinar que se usa para freír", english: "pan", hint: "Un utensilio para cocinar que se usa para freír" },
    { spanish: "un tipo de queso muy famoso", english: "cheddar", hint: "Un tipo de queso muy famoso" },
    { spanish: "una máquina que usa vapor para moverse", english: "locomotive", hint: "Una máquina que usa vapor para moverse" },
    { spanish: "un vegetal verde que se usa en ensaladas", english: "cucumber", hint: "Un vegetal verde que se usa en ensaladas" },
    { spanish: "un lugar donde se pueden ver muchos animales", english: "zoo", hint: "Un lugar donde se pueden ver muchos animales" },
    { spanish: "un objeto que se usa para escribir en la pizarra", english: "chalk", hint: "Un objeto que se usa para escribir en la pizarra" },
    { spanish: "un tipo de libro de recetas de cocina", english: "cookbook", hint: "Un tipo de libro de recetas de cocina" },
    { spanish: "un tipo de arbusto que tiene espinas", english: "thornbush", hint: "Un tipo de arbusto que tiene espinas" },
    { spanish: "un tipo de deporte que se juega con una pelota", english: "soccer", hint: "Un tipo de deporte que se juega con una pelota" },
    { spanish: "una prenda de vestir para los pies", english: "socks", hint: "Una prenda de vestir para los pies" },
    { spanish: "una bebida que se hace de hojas de té", english: "tea", hint: "Una bebida que se hace de hojas de té" },
    { spanish: "un lugar donde se guardan los vehículos", english: "garage", hint: "Un lugar donde se guardan los vehículos" },
    { spanish: "un objeto que se usa para medir", english: "ruler", hint: "Un objeto que se usa para medir" },
    { spanish: "una especie de pescado que se come crudo", english: "salmon", hint: "Una especie de pescado que se come crudo" },
    { spanish: "un tipo de danza tradicional", english: "ballet", hint: "Un tipo de danza tradicional" },
    { spanish: "una bebida que se hace con cacao", english: "hot chocolate", hint: "Una bebida que se hace con cacao" },
    { spanish: "una pieza de ropa para la cabeza", english: "hat", hint: "Una pieza de ropa para la cabeza" },
    { spanish: "un tipo de instrumento musical de percusión", english: "drums", hint: "Un tipo de instrumento musical de percusión" },
    { spanish: "una parte del cuerpo humano que usamos para ver", english: "eye", hint: "Una parte del cuerpo humano que usamos para ver" },
    { spanish: "una máquina que usamos para lavar la ropa", english: "washing machine", hint: "Una máquina que usamos para lavar la ropa" },
    { spanish: "una prenda de vestir que se lleva en el torso", english: "shirt", hint: "Una prenda de vestir que se lleva en el torso" },
    { spanish: "un lugar donde se puede ir a nadar", english: "swimming pool", hint: "Un lugar donde se puede ir a nadar" },
    { spanish: "un objeto que se usa para enviar cartas", english: "postage stamp", hint: "Un objeto que se usa para enviar cartas" },
    { spanish: "una planta que se usa en la cocina para dar sabor", english: "basil", hint: "Una planta que se usa en la cocina para dar sabor" },
    { spanish: "un animal marino con una concha dura", english: "clam", hint: "Un animal marino con una concha dura" },
    { spanish: "un tipo de pasta que se usa en ensaladas", english: "macaroni", hint: "Un tipo de pasta que se usa en ensaladas" },
    { spanish: "un objeto que se usa para encender fuego", english: "match", hint: "Un objeto que se usa para encender fuego" },
    { spanish: "una prenda de vestir que cubre el cuerpo", english: "suit", hint: "Una prenda de vestir que cubre el cuerpo" },
    { spanish: "un dispositivo electrónico para hacer llamadas", english: "phone", hint: "Un dispositivo electrónico para hacer llamadas" },
    { spanish: "un tipo de pescado que es muy popular en sushi", english: "tuna", hint: "Un tipo de pescado que es muy popular en sushi" },
    { spanish: "un animal que es conocido por su velocidad", english: "cheetah", hint: "Un animal que es conocido por su velocidad" },
    { spanish: "un objeto que se usa para abrir puertas", english: "key", hint: "Un objeto que se usa para abrir puertas" },
    { spanish: "un tipo de árbol que produce manzanas", english: "apple tree", hint: "Un tipo de árbol que produce manzanas" },
    { spanish: "una bebida hecha de uvas", english: "wine", hint: "Una bebida hecha de uvas" },
    { spanish: "un objeto que se usa para iluminar", english: "lamp", hint: "Un objeto que se usa para iluminar" },
    { spanish: "una pieza de ropa para los pies", english: "shoes", hint: "Una pieza de ropa para los pies" },
    { spanish: "una red social popular", english: "facebook", hint: "Una red social popular" },
    { spanish: "un tipo de ave que es muy colorida", english: "parrot", hint: "Un tipo de ave que es muy colorida" },
    { spanish: "un objeto que se usa para cortar papel", english: "scissors", hint: "Un objeto que se usa para cortar papel" },
    { spanish: "un lugar donde se pueden ver animales salvajes", english: "wildlife park", hint: "Un lugar donde se pueden ver animales salvajes" },
    { spanish: "un tipo de chocolate que se come en barritas", english: "candy bar", hint: "Un tipo de chocolate que se come en barritas" },
    { spanish: "un lugar donde se guardan los alimentos", english: "pantry", hint: "Un lugar donde se guardan los alimentos" },
    { spanish: "un objeto que se usa para hacer café", english: "coffee maker", hint: "Un objeto que se usa para hacer café" },
    { spanish: "un lugar donde se practica deportes", english: "gym", hint: "Un lugar donde se practica deportes" },
    { spanish: "un tipo de animal que vive en el océano", english: "dolphin", hint: "Un tipo de animal que vive en el océano" },
    { spanish: "un dispositivo electrónico para reproducir música", english: "speaker", hint: "Un dispositivo electrónico para reproducir música" },
    { spanish: "una planta con flores moradas", english: "lavender", hint: "Una planta con flores moradas" },
    { spanish: "una pieza de ropa que se lleva en la cintura", english: "belt", hint: "Una pieza de ropa que se lleva en la cintura" },
    { spanish: "un lugar donde se pueden comprar alimentos", english: "supermarket", hint: "Un lugar donde se pueden comprar alimentos" },
    { spanish: "un objeto que se usa para escribir en la pizarra", english: "marker", hint: "Un objeto que se usa para escribir en la pizarra" },
    { spanish: "un tipo de pastel con frutas", english: "tart", hint: "Un tipo de pastel con frutas" },
    { spanish: "una planta que tiene flores amarillas", english: "sunflower", hint: "Una planta que tiene flores amarillas" },
    { spanish: "una pieza de ropa que se usa en la cabeza", english: "hat", hint: "Una pieza de ropa que se usa en la cabeza" },
    { spanish: "una parte de la casa donde se guarda la ropa", english: "closet", hint: "Una parte de la casa donde se guarda la ropa" },
    { spanish: "un dispositivo para medir la distancia", english: "measuring tape", hint: "Un dispositivo para medir la distancia" },
    { spanish: "un animal conocido por su gran tamaño y trompa", english: "elephant", hint: "Un animal conocido por su gran tamaño y trompa" },
    { spanish: "un objeto para hacer ejercicios", english: "dumbbell", hint: "Un objeto para hacer ejercicios" },
    { spanish: "una pieza de ropa que se lleva en el cuello", english: "scarf", hint: "Una pieza de ropa que se lleva en el cuello" },
    { spanish: "una bebida fría que se hace con limones", english: "lemonade", hint: "Una bebida fría que se hace con limones" },
    { spanish: "un animal conocido por su habilidad para trepar árboles", english: "monkey", hint: "Un animal conocido por su habilidad para trepar árboles" },
    { spanish: "una herramienta para trabajar madera", english: "saw", hint: "Una herramienta para trabajar madera" },
    { spanish: "un lugar donde se guardan los libros en la biblioteca", english: "shelf", hint: "Un lugar donde se guardan los libros en la biblioteca" },
    { spanish: "un objeto usado para calentar alimentos", english: "microwave", hint: "Un objeto usado para calentar alimentos" },
    { spanish: "un tipo de animal que vive en el desierto y tiene jorobas", english: "camel", hint: "Un tipo de animal que vive en el desierto y tiene jorobas" },
    { spanish: "un objeto que se usa para cortar papel", english: "scissors", hint: "Un objeto que se usa para cortar papel" },
    { spanish: "un animal que lleva un caparazón en su espalda", english: "turtle", hint: "Un animal que lleva un caparazón en su espalda" },
    { spanish: "un tipo de flor que es roja y blanca", english: "carnation", hint: "Un tipo de flor que es roja y blanca" },
    { spanish: "un lugar donde se puede ver una película", english: "theater", hint: "Un lugar donde se puede ver una película" },
    { spanish: "un objeto que se usa para abrigarse en invierno", english: "coat", hint: "Un objeto que se usa para abrigarse en invierno" },
    { spanish: "un dispositivo para cargar el móvil", english: "charger", hint: "Un dispositivo para cargar el móvil" },
    { spanish: "una herramienta para cortar madera", english: "axe", hint: "Una herramienta para cortar madera" },
    { spanish: "un tipo de pastel con manzanas", english: "apple pie", hint: "Un tipo de pastel con manzanas" },
    { spanish: "una pieza de ropa que cubre las piernas", english: "pants", hint: "Una pieza de ropa que cubre las piernas" },
    { spanish: "un lugar donde se puede comprar comida", english: "grocery store", hint: "Un lugar donde se puede comprar comida" },
    { spanish: "un instrumento de cocina para batir", english: "whisk", hint: "Un instrumento de cocina para batir" },
    { spanish: "un animal que tiene una melena", english: "lion", hint: "Un animal que tiene una melena" },
    { spanish: "un dispositivo usado para ver videos", english: "television", hint: "Un dispositivo usado para ver videos" },
    { spanish: "un lugar donde se pueden encontrar diferentes tipos de comida", english: "market", hint: "Un lugar donde se pueden encontrar diferentes tipos de comida" },
    { spanish: "un tipo de comida italiana con queso y tomate", english: "pizza", hint: "Un tipo de comida italiana con queso y tomate" },
    { spanish: "un objeto que se usa para protegerse del sol", english: "umbrella", hint: "Un objeto que se usa para protegerse del sol" },
    { spanish: "un animal que es muy rápido y tiene rayas", english: "zebra", hint: "Un animal que es muy rápido y tiene rayas" },
    { spanish: "un aparato que enfría los alimentos", english: "fryer", hint: "Un aparato que enfría los alimentos" },
    { spanish: "un tipo de planta que crece en el jardín", english: "rose", hint: "Un tipo de planta que crece en el jardín" },
    { spanish: "un tipo de chocolate con relleno de crema", english: "truffle", hint: "Un tipo de chocolate con relleno de crema" },
    { spanish: "un tipo de vehículo sin ruedas", english: "boat", hint: "Un tipo de vehículo sin ruedas" },
    { spanish: "un aparato usado para hacer café", english: "coffee maker", hint: "Un aparato usado para hacer café" },
    { spanish: "un animal que puede volar y tiene plumas", english: "bird", hint: "Un animal que puede volar y tiene plumas" },
    { spanish: "un objeto que se usa para medir la distancia", english: "measuring tape", hint: "Un objeto que se usa para medir la distancia" },
    { spanish: "una herramienta que se usa para clavar clavos", english: "hammer", hint: "Una herramienta que se usa para clavar clavos" },
    { spanish: "una pieza de ropa que cubre el cuerpo entero", english: "suit", hint: "Una pieza de ropa que cubre el cuerpo entero" },
    { spanish: "una prenda que se usa en los pies durante el invierno", english: "boots", hint: "Una prenda que se usa en los pies durante el invierno" },
    { spanish: "un tipo de comida hecha de maíz", english: "tortilla", hint: "Un tipo de comida hecha de maíz" },
    { spanish: "un tipo de transporte que se mueve por el agua", english: "boat", hint: "Un tipo de transporte que se mueve por el agua" },
    { spanish: "una pieza de ropa para el torso", english: "shirt", hint: "Una pieza de ropa para el torso" },
    { spanish: "una prenda de vestir para el invierno", english: "jacket", hint: "Una prenda de vestir para el invierno" },
    { spanish: "un dispositivo para hacer llamadas", english: "phone", hint: "Un dispositivo para hacer llamadas" },
    { spanish: "un tipo de dulce hecho de azúcar", english: "candy", hint: "Un tipo de dulce hecho de azúcar" },
    { spanish: "un lugar donde se pueden comprar medicinas", english: "pharmacy", hint: "Un lugar donde se pueden comprar medicinas" },
    { spanish: "un tipo de libro con historias", english: "novel", hint: "Un tipo de libro con historias" },
    { spanish: "una pieza de ropa para el invierno", english: "sweater", hint: "Una pieza de ropa para el invierno" },
    { spanish: "una prenda que se usa para cubrir la cabeza", english: "hat", hint: "Una prenda que se usa para cubrir la cabeza" },
    { spanish: "un objeto para medir el tiempo", english: "clock", hint: "Un objeto para medir el tiempo" },
    { spanish: "un lugar para ir a nadar", english: "pool", hint: "Un lugar para ir a nadar" },
    { spanish: "un objeto que se usa para escribir en la computadora", english: "keyboard", hint: "Un objeto que se usa para escribir en la computadora" },
    { spanish: "un animal que vive en el bosque y tiene cuernos", english: "deer", hint: "Un animal que vive en el bosque y tiene cuernos" },
    { spanish: "un tipo de comida que se hace con carne y pan", english: "burger", hint: "Un tipo de comida que se hace con carne y pan" },
    { spanish: "una pieza de ropa para los pies", english: "socks", hint: "Una pieza de ropa para los pies" },
    { spanish: "un lugar para estudiar", english: "school", hint: "Un lugar para estudiar" },
    { spanish: "un objeto que se usa para encender fuego", english: "match", hint: "Un objeto que se usa para encender fuego" },
    { spanish: "un lugar donde se pueden comprar zapatos", english: "shoe store", hint: "Un lugar donde se pueden comprar zapatos" },
    { spanish: "un animal conocido por su habilidad para nadar", english: "fish", hint: "Un animal conocido por su habilidad para nadar" },
    { spanish: "un tipo de bebida alcohólica hecha de uvas", english: "wine", hint: "Un tipo de bebida alcohólica hecha de uvas" },
    { spanish: "un lugar donde se puede hacer ejercicio", english: "gym", hint: "Un lugar donde se puede hacer ejercicio" },
    { spanish: "un tipo de comida rápida hecha de carne y pan", english: "burger", hint: "Un tipo de comida rápida hecha de carne y pan" },
    { spanish: "una pieza de ropa que cubre el torso y los brazos", english: "jacket", hint: "Una pieza de ropa que cubre el torso y los brazos" },
    { spanish: "un lugar donde se pueden ver exposiciones de arte", english: "museum", hint: "Un lugar donde se pueden ver exposiciones de arte" },
    { spanish: "un objeto que se usa para comer sopa", english: "spoon", hint: "Un objeto que se usa para comer sopa" },
    { spanish: "una pieza de ropa que cubre la cintura y las piernas", english: "pants", hint: "Una pieza de ropa que cubre la cintura y las piernas" },
    { spanish: "un objeto usado para iluminar una habitación", english: "lamp", hint: "Un objeto usado para iluminar una habitación" },
    { spanish: "una bebida que se hace con café", english: "espresso", hint: "Una bebida que se hace con café" },
    { spanish: "un lugar donde se pueden ver películas", english: "cinema", hint: "Un lugar donde se pueden ver películas" },
    { spanish: "un tipo de juego que se juega en una mesa con fichas", english: "board game", hint: "Un tipo de juego que se juega en una mesa con fichas" },
    { spanish: "un objeto que se usa para abrir botellas", english: "bottle opener", hint: "Un objeto que se usa para abrir botellas" },
    { spanish: "una planta que tiene hojas grandes y es verde", english: "fern", hint: "Una planta que tiene hojas grandes y es verde" },
    { spanish: "una prenda de ropa que cubre el torso y los brazos", english: "sweater", hint: "Una prenda de ropa que cubre el torso y los brazos" },
    { spanish: "un lugar donde se pueden ver animales acuáticos", english: "aquarium", hint: "Un lugar donde se pueden ver animales acuáticos" },
    { spanish: "un tipo de carne muy popular en asados", english: "steak", hint: "Un tipo de carne muy popular en asados" },
    { spanish: "una pieza de ropa que se usa para cubrir los pies en verano", english: "sandals", hint: "Una pieza de ropa que se usa para cubrir los pies en verano" },
    { spanish: "un objeto que se usa para ver en la oscuridad", english: "flashlight", hint: "Un objeto que se usa para ver en la oscuridad" },
    { spanish: "un tipo de pastel que tiene crema", english: "cream pie", hint: "Un tipo de pastel que tiene crema" },
    { spanish: "un animal marino conocido por su tinta", english: "squid", hint: "Un animal marino conocido por su tinta" },
    { spanish: "una pieza de ropa que cubre la cabeza", english: "cap", hint: "Una pieza de ropa que cubre la cabeza" },
    { spanish: "un objeto que se usa para guardar documentos", english: "folder", hint: "Un objeto que se usa para guardar documentos" },
    { spanish: "un lugar donde se puede ver una obra de teatro", english: "theater", hint: "Un lugar donde se puede ver una obra de teatro" },
    { spanish: "un tipo de pastel que se hace con capas de masa", english: "layer cake", hint: "Un tipo de pastel que se hace con capas de masa" },
    { spanish: "un objeto que se usa para secarse las manos", english: "towel", hint: "Un objeto que se usa para secarse las manos" },
    { spanish: "una bebida que se hace con frutas", english: "smoothie", hint: "Una bebida que se hace con frutas" },
    { spanish: "un lugar donde se venden libros", english: "bookstore", hint: "Un lugar donde se venden libros" },
    { spanish: "un tipo de comida italiana con pasta y salsa", english: "lasagna", hint: "Un tipo de comida italiana con pasta y salsa" },
    { spanish: "una prenda de vestir que se lleva en el torso", english: "shirt", hint: "Una prenda de vestir que se lleva en el torso" },
    { spanish: "un objeto que se usa para cortar verduras", english: "knife", hint: "Un objeto que se usa para cortar verduras" },
    { spanish: "una bebida que se hace con arroz", english: "sake", hint: "Una bebida que se hace con arroz" },
    { spanish: "un tipo de vehículo para andar por el mar", english: "yacht", hint: "Un tipo de vehículo para andar por el mar" },
    { spanish: "un objeto para escribir en la pizarra", english: "chalk", hint: "Un objeto para escribir en la pizarra" },
    { spanish: "una pieza de ropa que se usa en el cuello", english: "tie", hint: "Una pieza de ropa que se usa en el cuello" },
    { spanish: "un lugar donde se pueden encontrar diferentes tipos de comida", english: "food court", hint: "Un lugar donde se pueden encontrar diferentes tipos de comida" },
    { spanish: "un animal que es conocido por su larga cola", english: "squirrel", hint: "Un animal que es conocido por su larga cola" },
    { spanish: "un tipo de pastilla para el dolor", english: "painkiller", hint: "Un tipo de pastilla para el dolor" },
    { spanish: "un tipo de zapato que se usa para correr", english: "sneakers", hint: "Un tipo de zapato que se usa para correr" },
    { spanish: "una pieza de ropa para el verano", english: "shorts", hint: "Una pieza de ropa para el verano" },
    { spanish: "un tipo de bebida que se hace con café y leche", english: "latte", hint: "Un tipo de bebida que se hace con café y leche" },
    { spanish: "un lugar donde se pueden comprar revistas y periódicos", english: "newsstand", hint: "Un lugar donde se pueden comprar revistas y periódicos" },
    { spanish: "un tipo de alimento en conserva", english: "canned food", hint: "Un tipo de alimento en conserva" },
    { spanish: "un objeto que se usa para escribir con tinta", english: "pen", hint: "Un objeto que se usa para escribir con tinta" }
];
let currentWord = {};
let options = [];
let rounds = 10;
let score = 0;

// Selecciona una palabra aleatoria y configura las opciones
function selectWord() {
    if (rounds <= 0) {
        document.getElementById("message").innerText = "Juego terminado. Tu puntuación es: " + score;
        document.getElementById("options").innerHTML = "";
        return;
    }

    // Selecciona una palabra aleatoria
    currentWord = words[Math.floor(Math.random() * words.length)];

    // Prepara opciones de respuesta
    options = words.map(word => word.english).filter(option => option !== currentWord.english);
    // Selecciona aleatoriamente 3 opciones incorrectas más
    const incorrectOptions = shuffleArray(options).slice(0, 3);
    // Añade la opción correcta
    incorrectOptions.push(currentWord.english);
    options = shuffleArray(incorrectOptions); // Baraja opciones

    // Actualiza la interfaz del juego
    document.getElementById("hint").innerText = "Pista: " + currentWord.hint;
    document.getElementById("wordDisplay").innerText = Array(currentWord.english.length).fill("_").join(" ");
    document.getElementById("message").innerText = "";
    document.getElementById("options").innerHTML = generateOptionButtons();
    document.getElementById("rounds").innerText = "Rondas restantes: " + rounds;
    document.getElementById("score").innerText = "Puntuación: " + score;
}

function generateOptionButtons() {
    return options.map(option => {
        // Encuentra la traducción en español correspondiente
        const word = words.find(w => w.english === option);
        return `
            <div>
                <button onclick="guessOption('${option}')">${option}</button>
                <span id="translation-${option}" style="display:none; margin-left: 10px;">(${word.spanish})</span>
            </div>
        `;
    }).join("");
}

function guessOption(selectedOption) {
    let messageText;
    let messageColor;
    const isCorrect = selectedOption === currentWord.english;

    if (isCorrect) {
        document.getElementById("wordDisplay").innerText = currentWord.english;
        messageText = "¡Felicidades! Has elegido la respuesta correcta.";
        messageColor = "green";
        score++;
    } else {
        messageText = "Incorrecto. Inténtalo de nuevo.";
        messageColor = "red";
    }

    // Actualiza el mensaje con color
    document.getElementById("message").innerText = messageText;
    document.getElementById("message").style.color = messageColor;

    // Desactiva todos los botones después de la selección
    document.querySelectorAll("#options button").forEach(button => {
        button.disabled = true;
        if (button.textContent === currentWord.english) {
            button.style.backgroundColor = "lightgreen";
        } else {
            button.style.backgroundColor = "lightcoral";
        }
    });

    rounds--;
    setTimeout(selectWord, 2000);  
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.onload = selectWord;