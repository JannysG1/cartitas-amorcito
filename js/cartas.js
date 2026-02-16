// Base de datos de cartas
// Tipos: 'especial' (con fecha específica) o 'emocional' (cualquier momento, 1 por día)
const cartas = [
    // ========== CARTAS ESPECIALES (solo se desbloquean en fechas específicas) ==========
    {
        id: 1,
        tipo: 'especial',
        titulo: "Nuestro Primer Aniversario 💕",
        fecha: "28 de noviembre",
        fechaDesbloqueo: { mes: 11, dia: 28 }, // Noviembre 28
        mensaje: `
            <p>Hoy celebramos un año… y todavía me cuesta creer lo rápido y lo bonito que ha pasado el tiempo contigo, de todo lo bonito y natural que es amarte tanto.</p>
            <p>A veces cierro los ojos y vuelvo a nuestra primera escapada juntos. Recuerdo la emoción, los nervios, las miradas cómplices… y ese momento tan especial en el que me pediste que fuera tu novia. No fue solo una pregunta, fue el inicio de algo que cambió mi vida para siempre. Desde ese día supe que lo nuestro no era casualidad, era destino.
Guardo cada recuerdo como un pequeño tesoro. Cada detalle, cada regalo, cada palabra que me has dicho vive conmigo. No hay nada que venga de ti que pase desapercibido; todo lo atesoro porque viene del hombre que amo.
Gracias por tu paciencia, por tu cariño, por cuidarme, por hacerme sentir segura y amada. Gracias por cada risa, por cada abrazo que calma, por cada “todo va a estar bien”. Te agradezco con todo mi ser por elegirme cada día.
Eres el hombre de mi vida. No solo por lo que haces, sino por quién eres. Por la forma en que miras el futuro, por la manera en que me incluyes en tus planes, por cómo haces que el mundo se sienta más ligero cuando estoy contigo.
Este es nuestro primer aniversario… el primero de muchos. Porque no quiero celebrar solo un año, quiero celebrar décadas, viajes, metas cumplidas, sueños compartidos y miles de recuerdos más. Quiero seguir construyendo un universo contigo.
Si tuviera que volver a esa escapada, volvería a decir que sí.
Una y mil veces más.</p>
            <p>Gracias por este año maravilloso lleno de mucho amor, risas, y recuerdos inolvidables. ¡Aquí está a muchos años más juntos!</p>
            <p>Te amo hoy, mañana y siempre mi sapito 💕 No existen números que hagan dimención a todo lo que te quiero. Siempre tuya 💖.</p>
        `
    },
    {
        id: 2,
        tipo: 'especial',
        titulo: "6 Meses Juntos, de toda la vida que nos queda 💖",
        fecha: "28 de mayo",
        fechaDesbloqueo: { mes: 5, dia: 28 }, // Mayo 28
        mensaje: `
            <p>¡Felices 6 meses, mi amor! 💖</p>
            <p>Hoy cumplimos seis meses, medio año desde que decidimos caminar juntos. Suena corto cuando lo digo así, pero contigo cada día ha tenido tanto significado que parece mucho más.
Recuerdo cómo empezó todo y nos dimos una pequeña oportunidad, las primeras conversaciones profundas, las primeras risas, esa emoción que sentía cada vez que iba a verte. Poco a poco dejaste de ser una persona normal… para convertirte en mi persona favorita.
En estos seis meses hemos creado recuerdos que guardo como si fueran oro. Cada salida, cada abrazo largo, cada mensaje inesperado, cada regalo que me has dado… todo lo tengo presente. No son solo cosas, son momentos que construyen nuestra historia.

Gracias por tu paciencia, por tu ternura, por la forma en que me cuidas sin que yo tenga que pedirlo. Gracias por hacerme sentir elegida, querida y segura. Contigo aprendí que el amor no es solo emoción, es constancia, es presencia, es elegir quedarse.

Si en seis meses hemos construido algo tan fuerte y bonito, no puedo imaginar lo que nos espera en un año, en cinco o en toda una vida. Y la verdad… quiero descubrirlo todo contigo.

Eres mi lugar tranquilo, mi risa favorita y la persona con la que quiero seguir sumando meses que se conviertan en años.

Gracias por estos primeros seis meses, amor.
Que sean apenas el comienzo de algo eterno.</p>
            <p>Te amo infinitamente querido. 💕</p>
        `
    },
    {
        id: 3,
        tipo: 'especial',
        titulo: "Solo para tu Cumpleaños mi amorcito 🎂👑",
        fecha: "28 de agosto",
        fechaDesbloqueo: { mes: 8, dia: 28 }, // Agosto 28
        mensaje: `
            <p>¡Feliz cumpleaños, mi amorcito precioso!</p>
            <p>Hoy celebra el mundo el día en que nació una de las personas más increíbles que existen, obviamente tú mi vida.

Tu cumpleaños no solo es importante por un año más de vida, sino porque ese día comenzó la historia de alguien que, sin saberlo, iba a cambiar la mía por completo. Agradezco tanto que hayas llegado a este mundo, porque gracias a eso hoy tengo la suerte de amarte y de caminar a tu lado.

Admiro todo lo que eres. Tu forma de pensar, tu fuerza, tu corazón, tu manera de enfrentar la vida y de cuidar a las personas que amas. Eres alguien único, alguien que deja huella, alguien que hace que todo sea mejor con solo estar presente.

Quiero que hoy recuerdes lo valioso que eres, no solo para mí, sino para todos los que tienen la suerte de conocerte. Pero sobre todo, quiero que sepas que eres el hombre que amo, el hombre que elijo y el hombre con el que quiero seguir celebrando muchos cumpleaños más.

Gracias por existir, por ser tú, por regalarme tu amor, tu tiempo y tu vida. Mi mayor deseo es seguir estando a tu lado, acompañándote en cada meta, en cada sueño y en cada nuevo año que venga.

Feliz cumpleaños, amor de mi vida.
Que este sea solo uno más de todos los que celebraremos juntos.💝</p>
            <p>PD: Te amo hoy, en tu día, y todos los días que vendrán, mucho mucho mucho.</p>
        `
    },
    {
        id: 4,
        tipo: 'especial',
        titulo: "Mi Cumpleaños 👑",
        fecha: "23 de febrero",
        fechaDesbloqueo: { mes: 2, dia: 23 }, // Febrero 23
        mensaje: `
            <p>Hoy es mi cumpleaños, pero el regalo eres tú 💝 y aunque es un día que celebra mi vida, lo que más agradezco es tenerte en ella.</p>
            <p>Antes de ti, los cumpleaños eran solo una fecha más, un día bonito… pero ahora tienen un significado distinto, porque estás tú. Porque tu amor, tu presencia y tu forma de hacerme sentir convierten este día en algo mucho más especial.

Gracias por estar a mi lado, por acompañarme en un año más de mi vida, por hacerme sentir amada, cuidada y feliz. Tu amor ha sido uno de los regalos más hermosos que la vida me ha dado, y no hay nada que valore más que eso.

Hoy no solo celebro los años que cumplo, celebro cada momento contigo, cada recuerdo que hemos creado y cada sueño que seguimos construyendo juntos. Celebro que existes, que estás conmigo y que eres la persona con la que quiero compartir todos mis futuros cumpleaños.

Eres mi alegría, mi paz y mi lugar favorito.
Y si pudiera pedir un deseo este año, sería seguir teniéndote a mi lado, creciendo juntos, amándonos cada día más.

Gracias por ser parte de mi vida… y por ser, sin duda, la mejor parte de ella.</p>
            <p>Cada cumpleaños contigo es más especial que el anterior. Te amo, hoy y siempre mi amor. 💕</p>
        `
    },
    {
        id: 5,
        tipo: 'especial',
        titulo: "¡Ya eres Ingeniero mi amorcito!",
        fecha: "Diciembre 2026",
        fechaDesbloqueo: { mes: 12, dia: 1 }, // Diciembre 15 
        mensaje: `
            <p>¡Lo lograste, mi amor! ¡Ya eres un grandioso ingeniero! 🎓</p>
            <p>Hoy no solo te gradúas, hoy materializas años de esfuerzo, desvelos, dudas superadas y sueños que nunca dejaste caer.

Ser ingeniero no es solo tener un título, es la prueba de tu disciplina, tu inteligencia y tu determinación. Te admiro por el sacrificio de cada momento en que te exigiste más, de cada meta que parecía lejana y que hoy se convierte en realidad.

Estoy profundamente orgullosa de ti. No solo por lo que lograste, sino por la persona que eres mientras lo logras. Tu constancia, tu responsabilidad y tu forma de nunca rendirte son lo que realmente admiro.

Este logro es tuyo, completamente tuyo. Pero déjame decirte algo para mí es un honor ser testigo de todo lo que estas construyendo. Verte crecer, evolucionar y convertirte en el profesional que soñabas ser, que este es el primer paso de todo lo que quieres y vas a lograr.

Hoy se gradúa un ingeniero.
Pero yo celebro al hombre increíble detrás del título.

Sé que esto es solo el comienzo. Te esperan proyectos, metas enormes, sueños aún más grandes. Y quiero que sepas que en cada paso que des, ahí estaré yo, creyendo en ti incluso cuando tú dudes.

Eres talento, eres capacidad, eres visión… pero sobre todo, eres el amor de mi vida.

Felicidades, ingeniero.
El mundo está listo para lo que vas a construir… y yo estoy lista para construirlo contigo.

Siempre orgullosa de ti. Te amo, mi ingeniero favorito. 💖🎉</p>
        `
    },
    
    // ========== CARTAS EMOCIONALES (se pueden abrir cualquier día, 1 por día) ==========
    {
        id: 6,
        tipo: 'emocional',
        titulo: "Cuando Estés Triste",
        emocion: "triste",
        mensaje: `
            <p>Si estás leyendo esto, es porque algo no estás bien (o eres bien sapo y lo abriste antes) y lo primero que quiero que sepas es que no estás solo.

Sé que hay días difíciles, días en los que todo pesa más, en los que la mente se llena de dudas y el corazón se cansa un poco. Y aunque no pueda ver exactamente lo que sientes en este momento, quiero que recuerdes algo muy importante, eres más fuerte de lo que crees, y esto también va a pasar, eres mi hombre fuerte y maravilloso.

Primero quiero que respires profundo y recuerdes quién eres. Eres una persona increíble, capaz, valiente y llena de luz, incluso en los días en que no lo sientes así. No dejes que un mal momento te haga olvidar todo lo que vales y eres.

Estoy aquí para ti, en cada versión tuya. En tus días felices, en tus días cansados, y también en tus días tristes. No tienes que fingir estar bien conmigo. Puedes sentir, puedes caer, puedes descansar y yo voy a seguir aquí, amándote igual o incluso más fuerte de lo que ya lo hago, porque amo cada parte de tí.

Si pudiera, te abrazaría ahora mismo y me quedaría contigo hasta que todo se sienta un poco más ligero. Porque tu corazón es mi lugar favorito, y cuidarlo es una de las cosas más importantes para mí.

Esto es solo un momento, no tu destino. Recuerda es un mal momento, no una mala vida.
Tú sigues siendo el hombre increíble del que me enamoré.

Y pase lo que pase… aquí estoy.
Contigo. Siempre.</p>
            <p>Te amo profundamente. Todo va a estar bien. 💕</p>
        `
    },
    {
        id: 7,
        tipo: 'emocional',
        titulo: "Si es que se te ocurre que no te quiero (cuando te amo con todo mi ser)",
        emocion: "duda",
        mensaje: `
            <p>Si algún día se te cruza por la mente la idea de que no te quiero por favor, detente un momento y léeme.

Si alguna vez dudas de mis sentimientos, si un mal día te hace pensar que ya no siento lo mismo, o si el silencio pesa más de lo normal quiero que recuerdes algo muy claro: te amo con toda mi alma, mi ser, con cada minuscula particula que me compone.

Te amo en mis días tranquilos y en mis días caóticos. Te amo cuando sonríes y cuando estás serio. Te amo cuando estás seguro de ti mismo y también cuando dudas. Mi amor por ti no depende del momento, del humor o de las circunstancias.

A veces no siempre sabré expresarlo perfecto, a veces me equivocaré, a veces el cansancio o el estrés me ganarán, pero jamás confundas eso con falta de amor. Porque lo que siento por ti es profundo, real y elegido todos los días.

Si alguna vez sientes que me estoy alejando, acércate.
Si alguna vez sientes miedo, háblame.
Si alguna vez dudas, mírame a los ojos que sabre acalarartelo todo.

Yo no estoy aquí por costumbre, ni por comodidad. Estoy aquí porque te elijo. Porque te amo. Porque mi corazón encontró en ti su lugar.

Y si el mundo entero te hace dudar de tu valor, que nunca sea mi amor el que lo haga.

Te amo más de lo que a veces sé explicar o dimencionar ,
pero jamás menos de lo que mereces sentir. Cada día te elijo a ti, una y otra vez.</p>
            <p>Te amo con todo mi corazón, mi alma y mi ser. Siempre tuya. 💖</p>
        `
    },
    {
        id: 8,
        tipo: 'emocional',
        titulo: "Abrela después de Pelear",
        emocion: "pelea",
        mensaje: `
            <p>Mi precioso 💔</p>
            <p>No sé ni por dónde empezar, porque todavía tengo el corazón acelerado y la mente hecha un enredo. Discutimos, nos dijimos cosas desde el cansancio, desde el orgullo, desde el dolor o lo que sea que hibiera sido y aun así, en medio de todo eso, lo único claro en mí es que te amo.

A veces peleamos porque nos importamos demasiado. Porque sentimos demasiado. Porque lo que viene de ti me mueve más que cualquier otra cosa en el mundo. Y sí, a veces eso se vuelve caos. A veces me desordeno. A veces digo cosas que no reflejan lo que realmente siento.

Pero si algo quiero que quede intacto después de cualquier pelea es esto: mi amor por ti no se pone en pausa cuando estamos mal.

Me duele cuando nos lastimamos. Me duele cuando nos miramos con distancia. Me duele sentir que por un momento estamos en lados distintos cuando lo único que quiero es estar en el mismo equipo contigo.

No somos perfectos. Yo no soy perfecta. Pero lo que tenemos vale más que un momento de enojo, más que palabras dichas desde la herida.

Si alguna vez el ruido es demasiado fuerte, quiero que recordemos esto: nosotros no somos la pelea. Somos dos personas aprendiendo a amarse incluso cuando no es fácil.

Yo no quiero ganar discusiones, no significarian nada si por eso te pierdo.
Quiero construir algo contigo.

Y aunque ahora todo se sienta un poco revuelto, si me preguntas qué quiero después de todo, te quiero a ti. Con tus luces, con tus sombras, con nuestras diferencias y con todo lo que todavía estamos aprendiendo.

Respiremos.
Bajemos la voz.
Volvamos a nosotros.

Porque incluso en medio del caos, sigo eligiéndote.</p>
            <p>Te amo más que nunca. Hagamos las paces siempre, mi amor. Nunca nos dejemos ir💕</p>
        `
    },
    {
        id: 9,
        tipo: 'emocional',
        titulo: "Cuando te sientas con mucha Felicidad",
        emocion: "feliz",
        mensaje: `
            <p>¡Qué feliz me hace verte así! 😊✨</p>
            <p>Si estás leyendo esto, es porque algo te hizo sonreír y solo imaginar eso ya me hace feliz a mí también.

Me encanta verte feliz. Me encanta cuando tus ojitos brillan, cuando tu voz suena más ligera, cuando te emocionas por algo, grande o pequeño. Porque tu felicidad tiene una forma especial de iluminar todo, incluso a mí.

Quiero que disfrutes este momento. Que lo vivas completo, sin miedo, sin pensar en lo que viene después. Porque te mereces cada segundo de alegría que la vida te regala.

Estoy orgullosa de ti. De tus logros, de tu esfuerzo, de la persona que eres. Pero más allá de todo eso, estoy agradecida de poder ser parte de tu vida y de poder verte crecer, sonreír y vivir.

Tu felicidad también es mi felicidad.
Porque cuando tú estás bien, algo dentro de mí también encuentra paz.

Guarda este momento en tu corazón. Recuérdalo en los días difíciles. Porque esta sonrisa tuya es real, es tuya, y nadie puede quitártela.

Y si algún día dudas, si algún día olvidas lo lejos que has llegado vuelve a este instante. Vuelve a ti.

Te amo en tus días tristes, en tus días normales y especialmente en tus días felices, porque ahí veo tu alma brillar.

Sigue sonriendo, mi amor.</p>
            <p>Te amo, mi sol, mi universo, mi todo. Sigue brillando así de hermoso. 💖☀️</p>
        `
    },
    {
        id: 10,
        tipo: 'emocional',
        titulo: "Cuando me extrañes (pero siempre te extrañare mas)",
        emocion: "extrañar",
        mensaje: `
            <p>Te extraño demasiado, mi amorcito 🥺💔</p>
            <p>Si estás leyendo esto es porque me estás extrañando y quiero que sepas algo antes que todo: yo también te extraño y muchísimo.

Te extraño en los pequeños momentos del día. Cuando veo algo que quisiera contarte, cuando escucho una canción que sé que te gustaría, cuando me río sola y pienso “si estuviera aquí, se reiría conmigo”. Te extraño en lo cotidiano, en lo simple, en lo que solo tiene sentido cuando lo comparto contigo.

Hay días en los que la distancia pesa más. En los que daría cualquier cosa por verte aunque sea cinco minutos, por abrazarte sin prisa, por escuchar tu voz sin que sea a través de una pantalla. Porque no es solo verte es sentirte cerca, es sentir que todo está en su lugar.

A veces me sorprendo imaginando cómo sería poder verte todos los días. Despertar sabiendo que estás ahí. No tener que contar las horas para volver a abrazarte. Porque la verdad es que cuando estoy contigo, todo se siente más fácil, más ligero, más bonito, más llevadero.

Si ahora mismo me estás extrañando, quiero que cierres los ojos un momento y me imagines abrazándote fuerte. Imagíname diciéndote bajito que te amo, que esto vale la pena, que cada segundo separados solo confirma cuánto queremos estar juntos y todo lo que queremos compartir.

No estás solo en ese sentimiento.
Yo también te pienso.
Yo también te necesito.
Yo también quisiera verte siempre.

Pero mientras llega el próximo abrazo, guarda esto en tu corazón: la distancia no disminuye lo que siento. Al contrario, me recuerda cuánto significas para mí.

Te extraño más de lo que puedo explicar y te amo más de lo que imaginas, mucho mucho más.

Siempre contigo, incluso cuando no estoy físicamente ahí.</p>
            <p>Te amo y te extraño infinitamente. 💕</p>
        `
    },
    {
        id: 11,
        tipo: 'emocional',
        titulo: "Eres Increíble",
        emocion: "motivacion",
        mensaje: `
            <p>Necesito que sepas algo importante cariño ✨</p>
            <p>A veces me cuesta poner en palabras todo lo que eres para mí, porque lo que me haces sentir no es simple, no es pequeño, no es algo que se pueda explicar fácilmente. Eres de esas personas que no solo llegan a la vida de alguien la transforman.

Contigo me he sentido emocionada como nunca, amada de una forma tan sincera que todavía me sorprende, querida en cada detalle, en cada mirada, en cada gesto que tienes conmigo. Me haces sentir importante, me haces sentir elegida, me haces sentir en un hogar. Y eso es algo que no todos logran.

Antes de ti, no sabía que era posible sentir algo así. No sabía que alguien podía llegar y cambiar la forma en que ves el amor, la forma en que te ves a ti misma y la forma en que imaginas el futuro. Pero llegaste tú, con tu forma de ser, con tu corazón, con tu manera de cuidarme y me demostraste que sí existen personas que hacen la diferencia. Personas que no solo prometen, sino que se quedan. Personas que aman de verdad.

Es curioso, porque siempre dicen que las mujeres que más odian a los hombres son las que terminan teniendo a los mejores novios y yo soy el ejemplo perfecto de eso. Porque sin esperarlo, sin buscarlo, la vida me dio a un hombre maravilloso. A alguien que me respeta, que me cuida, que me ama y que me hace sentir la mujer más afortunada del mundo.

Eres increíble. No solo por lo que haces, sino por lo que eres. Por tu esencia, por tu forma de amar, por la forma en que haces que mi corazón se sienta seguro contigo.

Gracias por existir.
Gracias por elegirme.
Gracias por amarme como lo haces.

No sabes cuánto vales, pero yo sí lo sé.
Y agradezco cada día tenerte en mi vida.</p>
            <p>Gracias por ser tú. Te amo tal como eres, con todo lo que soy. 💖</p>
        `
    },
    {
        id: 12,
        tipo: 'emocional',
        titulo: "Simplemente Te Amo",
        emocion: "amor",
        mensaje: `
            <p>No hay una razón especial para esta carta 💕 solo todo el amor que te tengo mi precioso. </p>
            <p>No es un aniversario, ni un cumpleaños, ni un día señalado en el calendario. Lo escribo simplemente porque te amo y a veces siento que mi corazón necesita decirlo más grande de lo que cabe en un “te amo” normal.

Te amo por todo lo que haces por mí.
Por tu paciencia cuando estoy sensible (que han sido más de lo que me imagino).
Por tu forma de escucharme incluso cuando hablo sin orden, auqnue te cuente chismes incompletos o saltados.
Por tus detalles, por tu cuidado, por esa manera tan tuya de proteger lo que amas.

Te amo por cómo me haces sentir.
Me haces sentir segura.
Me haces sentir suficiente.
Me haces sentir bonita incluso en mis días más simples.
Me haces sentir elegida, querida, valorada.

Contigo no tengo que fingir ser alguien más. No tengo que esconder mis miedos ni exagerar mis fortalezas. Puedo ser yo, completamente yo y aun así me miras como si fuera lo mejor que te ha pasado.

Te amo por tu risa, por tu voz, por tu forma de abrazarme como si el mundo se acomodara en ese instante. Te amo por cómo tomas mi mano, por cómo me incluyes en tus planes, por cómo haces espacio para mí en tu vida.

Pero, sobre todo, te amo por lo que despiertas en mí.
Una versión más tranquila.
Más feliz.
Más segura.
Más llena de amor.

No sabía que amar podía sentirse tan profundo, tan constante, tan real. Y ahora no imagino mi vida sin esto que construimos cada día.

Te amo por lo que haces.
Te amo por lo que eres.
Te amo por cómo me haces sentir.

Y si me preguntaras por qué te amo… la respuesta sería simple:

Porque eres tú.
Y contigo, mi corazón siempre sabe dónde quedarse.</p>
            <p>Eres mi persona, mi amor, mi todo. Te amo hoy, mañana y siempre. 💖</p>
        `
    }
];

// ========== SISTEMA DE CONTROL DE CARTAS ==========

// Obtener fecha actual
function obtenerFechaActual() {
    const ahora = new Date();
    return {
        año: ahora.getFullYear(),
        mes: ahora.getMonth() + 1, // JavaScript usa 0-11 para meses
        dia: ahora.getDate(),
        timestamp: ahora.toDateString() // Para comparar días únicos
    };
}

// Verificar si una carta especial está desbloqueada
function estaDesbloqueadaPorFecha(carta) {
    if (carta.tipo !== 'especial') return true;
    
    const fechaActual = obtenerFechaActual();
    const { mes, dia } = carta.fechaDesbloqueo;
    
    // La carta se desbloquea a partir de la fecha indicada (ese día o después)
    if (fechaActual.mes > mes) return true;
    if (fechaActual.mes === mes && fechaActual.dia >= dia) return true;
    
    return false;
}

// Sistema de almacenamiento local
const Storage = {
    // Obtener todas las cartas abiertas
    getCartasAbiertas() {
        const data = localStorage.getItem('cartasAbiertas');
        return data ? JSON.parse(data) : [];
    },
    
    // Marcar una carta como abierta
    marcarCartaAbierta(cartaId) {
        const cartasAbiertas = this.getCartasAbiertas();
        const fechaActual = obtenerFechaActual();
        
        // Guardar el ID y la fecha en que se abrió
        const registro = {
            id: cartaId,
            fecha: fechaActual.timestamp,
            año: fechaActual.año,
            mes: fechaActual.mes,
            dia: fechaActual.dia
        };
        
        // No duplicar si ya está abierta
        if (!cartasAbiertas.find(c => c.id === cartaId)) {
            cartasAbiertas.push(registro);
            localStorage.setItem('cartasAbiertas', JSON.stringify(cartasAbiertas));
        }
    },
    
    // Verificar si una carta ya fue abierta
    cartaYaAbierta(cartaId) {
        const cartasAbiertas = this.getCartasAbiertas();
        return cartasAbiertas.some(c => c.id === cartaId);
    },
    
    // Obtener la última fecha en que se abrió una carta
    getUltimaCartaAbierta() {
        const data = localStorage.getItem('ultimaCartaAbierta');
        return data ? JSON.parse(data) : null;
    },
    
    // Registrar que se abrió una carta hoy
    registrarAperturaHoy() {
        const fechaActual = obtenerFechaActual();
        localStorage.setItem('ultimaCartaAbierta', JSON.stringify({
            fecha: fechaActual.timestamp,
            año: fechaActual.año,
            mes: fechaActual.mes,
            dia: fechaActual.dia
        }));
    },
    
    // Verificar si ya se abrió una carta hoy
    yaSeAbrioCartaHoy() {
        const ultimaCarta = this.getUltimaCartaAbierta();
        if (!ultimaCarta) return false;
        
        const fechaActual = obtenerFechaActual();
        return ultimaCarta.fecha === fechaActual.timestamp;
    },
    
    // Resetear todo (para desarrollo/testing)
    resetear() {
        localStorage.removeItem('cartasAbiertas');
        localStorage.removeItem('ultimaCartaAbierta');
        console.log('Sistema reseteado');
    }
};

// Determinar el estado de una carta
// Determinar el estado de una carta
function obtenerEstadoCarta(carta) {
    const yaAbierta = Storage.cartaYaAbierta(carta.id);
    
    // ✅ REGLA #1: Si ya fue abierta antes, SIEMPRE está disponible para releer
    // No importa si ya abriste otra carta hoy
    // No importa la fecha
    // Las cartas leídas se pueden releer INFINITAS veces sin restricciones
    if (yaAbierta) {
        return {
            estado: 'abierta',
            disponible: true,  // ✅ SIEMPRE DISPONIBLE PARA RELEER
            razon: 'Ya leída - Puedes releerla cuando quieras'
        };
    }
    
    // 🔒 REGLA #2: Solo se puede abrir UNA carta NUEVA por día
    // Esta restricción NO aplica a cartas ya leídas (verificado arriba)
    if (Storage.yaSeAbrioCartaHoy()) {
        return {
            estado: 'bloqueada',
            disponible: false,
            razon: 'Ya abriste una carta hoy. Vuelve mañana 💕'
        };
    }
    
    // 🔒 REGLA #3: Cartas especiales solo se desbloquean en su fecha
    // Esta restricción NO aplica a cartas ya leídas (verificado arriba)
    if (carta.tipo === 'especial') {
        if (!estaDesbloqueadaPorFecha(carta)) {
            return {
                estado: 'bloqueada',
                disponible: false,
                razon: `Se desbloquea el ${carta.fecha} 🔒`
            };
        }
    }
    
    // ✅ Carta nueva disponible para abrir hoy
    return {
        estado: 'disponible',
        disponible: true,
        razon: 'Disponible para abrir'
    };
}

// Función para generar las cartas en la página principal
function generarCartas() {
    const grid = document.getElementById('cartasGrid');
    
    if (!grid) {
        console.error('❌ No se encontró el elemento cartasGrid');
        return;
    }
    
    console.log(`✅ Generando ${cartas.length} cartas...`);
    
    cartas.forEach(carta => {
        const estadoCarta = obtenerEstadoCarta(carta);
        const cartaElement = document.createElement('div');
        cartaElement.className = `carta-item ${estadoCarta.estado}`;
        
        // Añadir clase especial para cartas con fecha específica
        if (carta.tipo === 'especial') {
            cartaElement.classList.add('especial');
        }
        
        // Solo permitir click si está disponible
        if (estadoCarta.disponible) {
            cartaElement.onclick = () => abrirCarta(carta.id);
        } else {
            cartaElement.onclick = () => mostrarMensajeBloqueo(estadoCarta.razon);
        }
        
        let htmlExtra = '';
        if (estadoCarta.estado === 'bloqueada' && carta.tipo === 'especial') {
            htmlExtra = `<div class="carta-fecha-desbloqueo">${carta.fecha}</div>`;
        }
        
        cartaElement.innerHTML = `
            <div class="carta-icono"></div>
            <div class="carta-numero">#${carta.id}</div>
            <div class="carta-titulo">${carta.titulo}</div>
            ${htmlExtra}
        `;
        
        // Animación escalonada
        cartaElement.style.animation = `fadeIn 0.6s ease ${carta.id * 0.08}s both`;
        
        grid.appendChild(cartaElement);
    });
    
    console.log(`✅ ${cartas.length} cartas generadas exitosamente`);
}

// Mostrar mensaje cuando una carta está bloqueada
function mostrarMensajeBloqueo(razon) {
    // Intentar usar el modal si existe, sino usar alert
    const modal = document.getElementById('modalOverlay');
    const mensaje = document.getElementById('modalMensaje');
    
    if (modal && mensaje) {
        mensaje.textContent = razon;
        modal.style.display = 'flex';
    } else {
        alert(razon);
    }
}

// Función para abrir una carta específica
// Función para abrir una carta específica
function abrirCarta(id) {
    const carta = cartas.find(c => c.id === id);
    if (!carta) return;
    
    const estadoCarta = obtenerEstadoCarta(carta);
    
    // Si la carta no está disponible, mostrar mensaje de bloqueo
    if (!estadoCarta.disponible) {
        mostrarMensajeBloqueo(estadoCarta.razon);
        return;
    }
    
    // ✅ Si la carta NO ha sido abierta antes, registrarla
    // ✅ Si YA está abierta (releer), NO la registra de nuevo = NO cuenta contra límite diario
    if (estadoCarta.estado !== 'abierta') {
        Storage.marcarCartaAbierta(id);
        Storage.registrarAperturaHoy();
    }
    
    // Navegar a la página de la carta
    window.location.href = `Carta.html?id=${id}`;
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generarCartas);
} else {
    generarCartas();
}

// ========== FUNCIONES DE UTILIDAD ==========

// Obtener información de progreso
function obtenerProgreso() {
    const cartasAbiertas = Storage.getCartasAbiertas();
    const totalCartas = cartas.length;
    const cartasEspeciales = cartas.filter(c => c.tipo === 'especial').length;
    const cartasEmocionales = cartas.filter(c => c.tipo === 'emocional').length;
    
    return {
        total: totalCartas,
        abiertas: cartasAbiertas.length,
        pendientes: totalCartas - cartasAbiertas.length,
        especiales: cartasEspeciales,
        emocionales: cartasEmocionales,
        porcentaje: Math.round((cartasAbiertas.length / totalCartas) * 100)
    };
}

// Mostrar progreso en consola (para desarrollo)
function verProgreso() {
    const progreso = obtenerProgreso();
    console.log('📊 Progreso de Cartas:');
    console.log(`Total: ${progreso.abiertas}/${progreso.total} (${progreso.porcentaje}%)`);
    console.log(`Pendientes: ${progreso.pendientes}`);
    console.log(`Especiales: ${progreso.especiales} | Emocionales: ${progreso.emocionales}`);
    
    const yaAbrioHoy = Storage.yaSeAbrioCartaHoy();
    console.log(`¿Ya abrió carta hoy?: ${yaAbrioHoy ? 'Sí' : 'No'}`);
}

// Funciones de desarrollo (útiles para testing)
window.testCartas = {
    resetear: () => Storage.resetear(),
    verProgreso: () => verProgreso(),
    verCartasAbiertas: () => console.log(Storage.getCartasAbiertas()),
    simularDiaAnterior: () => {
        // Permitir abrir otra carta "hoy"
        localStorage.removeItem('ultimaCartaAbierta');
        console.log('Reseteo de día completado. Puedes abrir otra carta.');
        location.reload();
    }
};

// Exportar para uso en otros scripts si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cartas, obtenerProgreso, Storage };
}
