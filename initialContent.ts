import { PageContent } from "./types";
import { v4 as uuidv4 } from 'uuid';

const id = () => uuidv4();

export const INITIAL_PAGE_CONTENT: PageContent = {
  globalSettings: {
    siteTitle: 'Las Aventuras de Capi y Hely',
    logoSvg: `<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#E0F2F1"/>
            <path d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" fill="#FFFFFF"/>
            <path d="M100 170C138.66 170 170 138.66 170 100C170 61.3401 138.66 30 100 30C61.3401 30 30 61.3401 30 100C30 138.66 61.3401 170 100 170Z" fill="#FDBA74"/>
            <path d="M136.879 144.152C130.342 153.811 119.585 160 100 160C80.4149 160 69.658 153.811 63.1212 144.152C69.658 134.492 80.4149 120 100 120C119.585 120 130.342 134.492 136.879 144.152Z" fill="#A16207"/>
            <path d="M125 90C125 98.2843 113.807 105 100 105C86.1929 105 75 98.2843 75 90C75 81.7157 86.1929 75 100 75C113.807 75 125 81.7157 125 90Z" fill="#FEFBF6"/>
            <circle cx="90" cy="90" r="5" fill="#A16207"/>
            <circle cx="110" cy="90" r="5" fill="#A16207"/>
        </svg>`,
  },
  sections: [
    {
      id: id(),
      type: 'hero',
      visible: true,
      data: {
        decorativeIcons: ['💖', '✨', '🌲'],
        title: 'Las Aventuras de Capi y Hely',
        subtitle: 'Cuentos mágicos que inspiran valentía, amistad y amor por la naturaleza. Únete a Capi, el valiente capibara, y Hely, la hermosa niña aventurera, en sus misiones para proteger el Bosque Encantado y el Árbol Mágico. Historias llenas de valores para niños, padres y maestros.',
        imageUrl: 'https://placehold.co/800x600/a7f3d0/4d7c0f?text=Capi+y+Hely', 
        ctaPrimary: { text: 'Ver los Libros ✨', href: '#libros' },
        ctaSecondary: { text: 'Bono Gratuito', href: '#bono' }
      },
    },
    {
      id: id(),
      type: 'books',
      visible: true,
      data: {
        title: 'Nuestros Libros Mágicos',
        subtitle: 'Cada historia es una aventura llena de enseñanzas y diversión',
        kdpNotice: 'Disponibles en Amazon KDP',
        books: [
          { id: id(), title: 'Las Aventuras de Capi - El Capibara Valiente', coverImageUrl: 'https://placehold.co/300x400/fef08a/854d0e?text=Libro+1', url: '#', description: 'Conoce a Capi, el valiente capibara que protege el bosque con coraje y amistad.', buttonText: 'Ver en Amazon' },
          { id: id(), title: 'El Árbol Encantado - Aventuras de Capi y Hely', coverImageUrl: 'https://placehold.co/300x400/a7f3d0/166534?text=Libro+2', url: '#', description: 'Descubre el misterio del Árbol Encantado en esta emocionante aventura.', buttonText: 'Ver en Amazon' },
          { id: id(), title: 'The Enchanted Tree - Adventures of Capi and Hely', coverImageUrl: 'https://placehold.co/300x400/c4b5fd/4c1d95?text=Libro+3', url: '#', description: 'The magical adventures now in English! Perfect for bilingual families.', buttonText: 'Ver en Amazon' },
        ],
      },
    },
    {
      id: id(),
      type: 'pdfs',
      visible: true,
      data: {
        title: 'PDFs Mágicos para Descargar',
        subtitle: 'Actividades para imprimir y disfrutar en familia',
        kdpNotice: '¡Materiales Gratuitos!',
        pdfs: [
          { id: id(), title: 'Libro de Colorear: Capi', coverImageUrl: 'https://placehold.co/300x400/f9a8d4/831843?text=PDF+1', url: '#', description: '20 páginas para colorear las aventuras del capibara valiente.', buttonText: 'Descargar PDF' },
          { id: id(), title: 'Guía de Actividades', coverImageUrl: 'https://placehold.co/300x400/a5f3fc/0e7490?text=PDF+2', url: '#', description: 'Juegos y actividades educativas basadas en la historia del Árbol Encantado.', buttonText: 'Descargar PDF' },
          { id: id(), title: 'Póster de Personajes', coverImageUrl: 'https://placehold.co/300x400/fde68a/b45309?text=PDF+3', url: '#', description: 'Un póster para imprimir con Capi, Hely y todos sus amigos del bosque.', buttonText: 'Descargar PDF' },
          { id: id(), title: 'Separadores de Libros', coverImageUrl: 'https://placehold.co/300x400/d5d4d4/44403c?text=PDF+4', url: '#', description: 'Lindos separadores de libros para que nunca pierdas tu página.', buttonText: 'Descargar PDF' },
          { id: id(), title: 'Capi para Colorear Vol. 2', coverImageUrl: 'https://placehold.co/300x400/a7f3d0/166534?text=PDF+5', url: '#', description: 'Más escenas emocionantes para darles vida con tus colores.', buttonText: 'Descargar PDF' },
        ],
      },
    },
    {
        id: id(),
        type: 'featuredProduct',
        visible: true,
        data: {
            title: 'Descarga Digital (PDF)',
            product: {
                title: 'Pack Completo de Aventuras (PDF)',
                description: 'Obtén los 3 cuentos en formato PDF para leer en cualquier dispositivo.',
                imageUrl: 'https://placehold.co/400x300/c4b5fd/4c1d95?text=Pack+PDF',
                buttonText: 'Descargar PDF',
                buttonUrl: '#'
            }
        }
    },
    {
        id: id(),
        type: 'author',
        visible: true,
        data: {
            title: 'Sobre el Autor',
            authorName: 'Autor de Capi y Hely',
            features: [
                { id: id(), icon: 'heart', title: 'Pasión por la Naturaleza', description: 'Inspirado por el amor a la naturaleza y la importancia de enseñar a los niños valores fundamentales sobre el cuidado del medio ambiente.' },
                { id: id(), icon: 'book', title: 'Historias con Valores', description: 'Cada cuento está cuidadosamente escrito para transmitir valores como la valentía, la amistad, el trabajo en equipo y el respeto por la naturaleza.' },
                { id: id(), icon: 'family', title: 'Para Toda la Familia', description: 'Las aventuras de Capi y Hely están diseñadas para ser disfrutadas por niños, padres y maestros, creando momentos especiales de lectura compartida.' },
            ]
        }
    },
    {
        id: id(),
        type: 'reviews',
        visible: true,
        data: {
            title: 'Lo Que Dicen Nuestros Lectores',
            subtitle: 'Familias y educadores comparten sus experiencias con Capi y Hely',
            reviews: [
                { id: id(), author: 'María González', role: 'Madre de dos niñas', text: 'Mis hijas están fascinadas con Capi y Hely. Cada noche piden leer una aventura más. Los valores que transmiten estas historias son exactamente lo que buscaba.', rating: 5 },
                { id: id(), author: 'Prof. Carmen Rodríguez', role: 'Maestra de Primaria', text: 'Uso estos cuentos en mi clase y los resultados son increíbles. Los niños aprenden sobre la naturaleza mientras se divierten. ¡Altamente recomendado!', rating: 5 },
                { id: id(), author: 'Roberto Martínez', role: 'Padre y educador', text: 'La calidad de las ilustraciones y la profundidad de las historias superaron mis expectativas. Perfecto para leer en familia.', rating: 5 },
                { id: id(), author: 'Ana Sofía López', role: 'Madre y bibliotecaria', text: 'Por fin encontré cuentos que enseñan valores reales sin ser aburridos. Mis sobrinas no dejan de hablar de Capi y Hely.', rating: 5 },
                { id: id(), author: 'Prof. Luis Hernández', role: 'Director de escuela', text: 'Hemos incluido esta serie en nuestra biblioteca escolar. Es una herramienta valiosa para enseñar educación ambiental.', rating: 5 },
                { id: id(), author: 'Patricia Silva', role: 'Mamá homeschooler', text: 'Perfectos para nuestro currículo de educación en casa. Las historias son cautivadoras y los mensajes son poderosos.', rating: 5 },
            ]
        }
    },
    {
        id: id(),
        type: 'faq',
        visible: true,
        data: {
            icon: '❓',
            title: 'Preguntas Frecuentes',
            subtitle: 'Todo lo que necesitas saber sobre las aventuras de Capi y Hely',
            items: [
                { id: id(), question: '¿Para qué edad son recomendados estos libros?', answer: 'Nuestros libros están pensados para niños de 3 a 8 años. Son perfectos para leer en voz alta a los más pequeños y para que los lectores principiantes practiquen.' },
                { id: id(), question: '¿Los libros están disponibles en formato físico o solo digital?', answer: 'Los libros principales están disponibles en todo el mundo a través de Amazon KDP en formato ebook y tapa blanda. Los materiales adicionales, como el libro para colorear, están en formato PDF descargable.' },
                { id: id(), question: '¿Puedo regalar estos libros?', answer: '¡Por supuesto! Los libros son un regalo maravilloso. Puedes comprar la versión de tapa blanda en Amazon y enviarla a cualquier dirección. Para los PDF, puedes comprarlos y enviar el archivo a la persona que desees.' },
                { id: id(), question: '¿Hay planes para más libros en la serie?', answer: '¡Sí! Estamos trabajando constantemente en nuevas y emocionantes aventuras para Capi y Hely. Suscríbete a nuestro boletín para ser el primero en saber sobre los nuevos lanzamientos.' },
                { id: id(), question: '¿Cómo puedo contactar al autor?', answer: 'Nos encanta saber de nuestros lectores. Puedes enviarnos un correo electrónico a info@capyhely.com o seguirnos en nuestras redes sociales para interactuar con la comunidad.' },
            ]
        }
    },
    {
        id: id(),
        type: 'cta',
        visible: true,
        data: {
            leftPanel: {
                icon: '🎁',
                title: '¡Bono Gratuito!',
                description: 'Descarga gratis nuestro libro para colorear con dibujos de Capi y Hely',
                features: [
                    '15 páginas de dibujos para colorear',
                    'Escenas de las aventuras de Capi y Hely',
                    'Perfecto para actividades en casa o en clase'
                ]
            },
            rightPanel: {
                title: 'Recibe tu bono gratuito',
                namePlaceholder: 'Escribe tu nombre',
                emailPlaceholder: 'tu@email.com',
                buttonText: 'Descargar Bono Gratuito',
                finePrint: 'Al suscribirte, también recibirás noticias sobre nuevas aventuras de Capi y Hely.'
            }
        }
    },
    {
        id: id(),
        type: 'footer',
        visible: true,
        data: {
            main: {
                title: 'Las Aventuras de Capi y Hely',
                description: 'Cuentos mágicos que inspiran valentía, amistad y amor por la naturaleza.'
            },
            links: {
                title: 'Enlaces Rápidos',
                items: [
                    { id: id(), text: 'Nuestros Libros', href: '#libros' },
                    { id: id(), text: 'Bono Gratuito', href: '#bono' },
                    { id: id(), text: 'Sobre el Autor', href: '#autor' },
                    { id: id(), text: 'Contacto', href: 'mailto:info@capyhely.com' },
                ]
            },
            socials: {
                title: 'Síguenos',
                email: 'info@capyhely.com',
                items: [
                    { id: id(), platform: 'facebook', url: '#' },
                    { id: id(), platform: 'instagram', url: '#' },
                    { id: id(), platform: 'twitter', url: '#' },
                    { id: id(), platform: 'dribbble', url: '#' },
                ]
            },
            copyright: '© 2025 Las Aventuras de Capi y Hely. Hecho con ❤️ para inspirar a la próxima generación.'
        }
    }
  ]
};