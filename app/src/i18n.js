import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          landing_description: 'Crea tu propia galería virtual, exhibe tus obras o descubre las de otros artistas. Interactúa con una comunidad creativa, conecta con compradores interesados y transforma tu visión en una experiencia visual única. ¡Únete y lleva tus creaciones a un nuevo nivel de interacción!',
          login: 'Iniciar sesión',
          call_to_action: 'Comienza ahora',
          pricing_title: 'Crea tu galería hoy mismo',
          pricing_description: 'Crea tu propia galería virtual, exhibe tus obras o descubre las de otros artistas. Interactúa con una comunidad creativa, conecta con compradores interesados y transforma tu visión en una experiencia visual única.',
          davinci_title: 'Da Vinci',
          davinci_price: 'GRATIS',
          davinci_feature1: '• Soporte para subir archivos 2D (PNG, JPG)',
          davinci_feature2: '• Acceso a plantillas gratuitas',
          davinci_feature3: '• Enlace para compartir tu galería',
          davinci_feature4: '• 1GB de almacenamiento',
          vangogh_title: 'Van Gogh',
          vangogh_price: 'PEN 22.20/mes',
          vangogh_feature1: '• Soporte para subir archivos 2D (PNG, JPG) y 3D (.OBJ, .FBX)',
          vangogh_feature2: '• Personalización de elementos dentro de la galería',
          vangogh_feature3: '• Enlace personalizable para compartir la galería',
          vangogh_feature4: '• 50GB de almacenamiento',
          vangogh_feature5: '• Acceso a plantillas premium',
          picasso_title: 'Picasso',
          picasso_price: 'PEN 55.50/mes',
          picasso_feature1: '• Soporte para subir archivos 2D (PNG, JPG) y 3D (BLENDER, OBJ, FBX)',
          picasso_feature2: '• Personalización de elementos dentro de la galería',
          picasso_feature3: '• Enlace personalizable para compartir la galería',
          picasso_feature4: '• Almacenamiento ilimitado',
          picasso_feature5: '• Acceso a plantillas premium',
          picasso_feature6: '• Mayor visibilidad en la comunidad',
          footer_description_line1: 'Convierte tus creaciones en una',
          footer_description_line2: 'experiencia visual única con',
          footer_description_line3: 'Metagallery.',
          footer_links: 'Enlaces',
          footer_link1: 'Inicio',
          footer_link2: 'Precios',
          footer_link3: 'Contacto',
          footer_legal: 'Legal',
          footer_legal1: 'Términos de servicio',
          footer_legal2: 'Política de privacidad',
          footer_socialmedia: 'Síguenos',
          footer_socialmedia1: 'Twitter',
          footer_socialmedia2: 'Facebook',
          footer_socialmedia3: 'Instagram',
          footer_finalmessage: '2024 Metagallery. Todos los derechos reservados.',
        }
      },
      en: {
        translation: {
          landing_description: 'Create your own virtual gallery, showcase your works, or discover those of other artists. Engage with a creative community, connect with interested buyers, and turn your vision into a unique visual experience. Join us and take your creations to a new level of interaction!',
          login: 'Login',
          call_to_action: 'Start now',
          pricing_title: 'Create your gallery today',
          pricing_description: 'Create your own virtual gallery, showcase your works, or discover those of other artists. Engage with a creative community, connect with interested buyers, and turn your vision into a unique visual experience.',
          davinci_title: 'Da Vinci',
          davinci_price: 'FREE',
          davinci_feature1: '• Support for uploading 2D files (PNG, JPG)',
          davinci_feature2: '• Access to free templates',
          davinci_feature3: '• Shareable gallery link',
          davinci_feature4: '• 1GB storage',
          vangogh_title: 'Van Gogh',
          vangogh_price: 'USD 6/month',
          vangogh_feature1: '• Support for uploading 2D (PNG, JPG) and 3D files (.OBJ, .FBX)',
          vangogh_feature2: '• Gallery item customization',
          vangogh_feature3: '• Customizable gallery sharing link',
          vangogh_feature4: '• 50GB storage',
          vangogh_feature5: '• Access to premium templates',
          picasso_title: 'Picasso',
          picasso_price: 'USD 15/month',
          picasso_feature1: '• Support for uploading 2D (PNG, JPG) and 3D files (BLENDER, OBJ, FBX)',
          picasso_feature2: '• Gallery item customization',
          picasso_feature3: '• Customizable gallery sharing link',
          picasso_feature4: '• Unlimited storage',
          picasso_feature5: '• Access to premium templates',
          picasso_feature6: '• Increased visibility in the community',
          footer_description_line1: 'Turn your creations into a',
          footer_description_line2: 'unique visual experience with',
          footer_description_line3: 'Metagallery.',
          footer_links: 'Links',
          footer_link1: 'Home',
          footer_link2: 'Pricing',
          footer_link3: 'Contact',
          footer_legal: 'Legal',
          footer_legal1: 'Terms of Service',
          footer_legal2: 'Privacy Policy',
          footer_socialmedia: 'Follow us',
          footer_socialmedia1: 'Twitter',
          footer_socialmedia2: 'Facebook',
          footer_socialmedia3: 'Instagram',
          footer_finalmessage: '2024 Metagallery. All rights reserved.',
        }
      },
      fr: {
        translation: {
          landing_description: 'Créez votre propre galerie virtuelle, exposez vos œuvres ou découvrez celles d\'autres artistes. Interagissez avec une communauté créative, connectez-vous avec des acheteurs intéressés et transformez votre vision en une expérience visuelle unique. Rejoignez-nous et portez vos créations à un nouveau niveau d\'interaction !',
          login: 'Connexion',
          call_to_action: 'Commencez maintenant',
          pricing_title: 'Créez votre galerie dès aujourd\'hui',
          pricing_description: 'Créez votre propre galerie virtuelle, exposez vos œuvres ou découvrez celles d\'autres artistes. Interagissez avec une communauté créative, connectez-vous avec des acheteurs intéressés et transformez votre vision en une expérience visuelle unique.',
          davinci_title: 'Da Vinci',
          davinci_price: 'GRATUIT',
          davinci_feature1: '• Support pour télécharger des fichiers 2D (PNG, JPG)',
          davinci_feature2: '• Accès à des modèles gratuits',
          davinci_feature3: '• Lien pour partager votre galerie',
          davinci_feature4: '• 1 Go de stockage',
          vangogh_title: 'Van Gogh',
          vangogh_price: '€ 5.52/mois',
          vangogh_feature1: '• Support pour télécharger des fichiers 2D (PNG, JPG) et 3D (.OBJ, .FBX)',
          vangogh_feature2: '• Personnalisation des éléments dans la galerie',
          vangogh_feature3: '• Lien personnalisable pour partager la galerie',
          vangogh_feature4: '• 50 Go de stockage',
          vangogh_feature5: '• Accès à des modèles premium',
          picasso_title: 'Picasso',
          picasso_price: '€ 13.80/mois',
          picasso_feature1: '• Support pour télécharger des fichiers 2D (PNG, JPG) et 3D (BLENDER, OBJ, FBX)',
          picasso_feature2: '• Personnalisation des éléments dans la galerie',
          picasso_feature3: '• Lien personnalisable pour partager la galerie',
          picasso_feature4: '• Stockage illimité',
          picasso_feature5: '• Accès à des modèles premium',
          picasso_feature6: '• Meilleure visibilité dans la communauté',
          footer_description_line1: 'Transformez vos créations en une',
          footer_description_line2: 'expérience visuelle unique avec',
          footer_description_line3: 'Metagallery.',
          footer_links: 'Liens',
          footer_link1: 'Accueil',
          footer_link2: 'Tarifs',
          footer_link3: 'Contact',
          footer_legal: 'Légal',
          footer_legal1: 'Conditions d\'utilisation',
          footer_legal2: 'Politique de confidentialité',
          footer_socialmedia: 'Suivez-nous',
          footer_socialmedia1: 'Twitter',
          footer_socialmedia2: 'Facebook',
          footer_socialmedia3: 'Instagram',
          footer_finalmessage: '2024 Metagallery. Tous droits réservés.',
        },
      },
      gr: {
        translation: {
          landing_description: 'Erstelle deine eigene virtuelle Galerie, stelle deine Werke aus oder entdecke die von anderen Künstlern. Interagiere mit einer kreativen Community, vernetze dich mit interessierten Käufern und verwandle deine Vision in ein einzigartiges visuelles Erlebnis. Mach mit und hebe deine Kreationen auf ein neues Interaktionsniveau!',
          login: 'Anmelden',
          call_to_action: 'Jetzt starten',
          pricing_title: 'Erstelle deine Galerie noch heute',
          pricing_description: 'Erstelle deine eigene virtuelle Galerie, stelle deine Werke aus oder entdecke die von anderen Künstlern. Interagiere mit einer kreativen Community, vernetze dich mit interessierten Käufern und verwandle deine Vision in ein einzigartiges visuelles Erlebnis.',
          davinci_title: 'Da Vinci',
          davinci_price: 'KOSTENLOS',
          davinci_feature1: '• Unterstützung für das Hochladen von 2D-Dateien (PNG, JPG)',
          davinci_feature2: '• Zugriff auf kostenlose Vorlagen',
          davinci_feature3: '• Link zum Teilen deiner Galerie',
          davinci_feature4: '• 1 GB Speicher',
          vangogh_title: 'Van Gogh',
          vangogh_price: '€ 5.52/Monat',
          vangogh_feature1: '• Unterstützung für das Hochladen von 2D (PNG, JPG) und 3D-Dateien (.OBJ, .FBX)',
          vangogh_feature2: '• Anpassung von Galerieelementen',
          vangogh_feature3: '• Anpasbarer Link zum Teilen der Galerie',
          vangogh_feature4: '• 50 GB Speicher',
          vangogh_feature5: '• Zugriff auf Premium-Vorlagen',
          picasso_title: 'Picasso',
          picasso_price: '€ 13.80/Monat',
          ppicasso_feature1: '• Unterstützung für das Hochladen von 2D (PNG, JPG) und 3D-Dateien (BLENDER, OBJ, FBX)',
          picasso_feature2: '• Anpassung von Galerieelementen',
          picasso_feature3: '• Anpasbarer Link zum Teilen der Galerie',
          picasso_feature4: '• Unbegrenzter Speicher',
          picasso_feature5: '• Zugriff auf Premium-Vorlagen',
          picasso_feature6: '• Höhere Sichtbarkeit in der Community',
          footer_description_line1: 'Verwandle deine Kreationen in eine',
          footer_description_line2: 'einzigartige visuelle Erfahrung mit',
          footer_description_line3: 'Metagallery.',
          footer_links: 'Links',
          footer_link1: 'Startseite',
          footer_link2: 'Preise',
          footer_link3: 'Kontakt',
          footer_legal: 'Rechtliches',
          footer_legal1: 'Nutzungsbedingungen',
          footer_legal2: 'Datenschutzrichtlinie',
          footer_socialmedia: 'Folge uns',
          footer_socialmedia1: 'Twitter',
          footer_socialmedia2: 'Facebook',
          footer_socialmedia3: 'Instagram',
          footer_finalmessage: '2024 Metagallery. Alle Rechte vorbehalten.',
        }
      },
      ch: {
        translation: {
          landing_description: '创建您自己的虚拟画廊，展示您的作品，或发现其他艺术家的作品。与创意社区互动，与感兴趣的买家建立联系，将您的愿景转化为独特的视觉体验。加入我们，将您的创作提升到全新的互动水平！',
          login: '登录',
          call_to_action: '立即开始',
          pricing_title: '立即创建您的画廊',
          pricing_description: '创建您自己的虚拟画廊，展示您的作品，或发现其他艺术家的作品。与创意社区互动，与感兴趣的买家建立联系，将您的愿景转化为独特的视觉体验。',
          davinci_title: '达芬奇',
          davinci_price: '免费',
          davinci_feature1: '• 支持上传2D文件（PNG，JPG）',
          davinci_feature2: '• 访问免费模板',
          davinci_feature3: '• 分享画廊的链接',
          davinci_feature4: '• 1GB存储空间',
          vangogh_title: '梵高',
          vangogh_price: '¥ 43.80 / 月',
          vangogh_feature1: '• 支持上传2D（PNG，JPG）和3D文件（.OBJ，.FBX）',
          vangogh_feature2: '• 画廊内的元素自定义',
          vangogh_feature3: '• 可自定义的画廊分享链接',
          vangogh_feature4: '• 50GB存储空间',
          vangogh_feature5: '• 访问高级模板',
          picasso_title: '毕加索',
          picasso_price: '¥ 109.50 / 月',
          picasso_feature1: '• 支持上传2D（PNG，JPG）和3D文件（BLENDER，OBJ，FBX）',
          picasso_feature2: '• 画廊内的元素自定义',
          picasso_feature3: '• 可自定义的画廊分享链接',
          picasso_feature4: '• 无限存储空间',
          picasso_feature5: '• 访问高级模板',
          picasso_feature6: '• 更高的社区可见性',
          footer_description_line1: '将您的创作转化为',
          footer_description_line2: 'Metagallery带来的独特视觉体验。',
          footer_description_line3: 'Metagallery。',
          footer_links: '链接',
          footer_link1: '首页',
          footer_link2: '定价',
          footer_link3: '联系方式',
          footer_legal: '法律',
          footer_legal1: '服务条款',
          footer_legal2: '隐私政策',
          footer_socialmedia: '关注我们',
          footer_socialmedia1: 'Twitter',
          footer_socialmedia2: 'Facebook',
          footer_socialmedia3: 'Instagram',
          footer_finalmessage: '2024 Metagallery。版权所有。',
        }
      },
    }
  });

export default i18n;