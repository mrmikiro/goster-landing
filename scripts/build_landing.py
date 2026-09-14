"""Generate the three static landing pages. No runtime framework or build dependencies."""
from pathlib import Path
import json
import re
from html.parser import HTMLParser
ROOT=Path(__file__).resolve().parents[1]
COPY={'es': {'title': 'Tu voz. Tu criterio. Tu informe.',
        'description': 'Gōster convierte tu dictado en informes radiológicos estructurados, con tus '
                       'plantillas, tu terminología y tu estilo.',
        'nav': ['Producto', 'Cómo funciona', 'Planes', 'Preguntas'],
        'login': 'Iniciar sesión',
        'try': 'Probar gratis',
        'eyebrow': 'TU GHOSTWRITER RADIOLÓGICO',
        'hero': 'Tú interpretas. <span>Gōster escribe.</span>',
        'intro': 'De tu voz a un informe radiológico.<br>Con tu estructura, tus palabras y tu estilo.',
        'watch': 'Descubre cómo',
        'trial': '15 días gratis',
        'nocard': 'Sin tarjeta de crédito',
        'scroll': 'UN POCO MENOS DE TECLADO. MUCHO MÁS DE TI.',
        'flowtag': '01 / ASÍ DE NATURAL',
        'flowtitle': 'Tu próximo informe<br>empieza con tu voz.',
        'flowbody': 'Analiza tu estudio en voz alta. No necesitas un dictado perfecto ni indicar signos de '
                    'puntuación: gōster entiende tu intención y organiza tus hallazgos.',
        'demo': 'DEMOSTRACIÓN INTERACTIVA',
        'tabs': ['RM Rodilla', 'TC Tórax', 'Corrección natural'],
        'dictation': 'TU DICTADO',
        'report': 'TU INFORME',
        'ready': 'Listo para tu revisión',
        'generating': 'Dando forma a tu informe…',
        'play': 'Ver la transformación',
        'again': 'Volver a ver',
        'sample': 'Ejemplo ilustrativo con un diccionario configurado.',
        'examples': [['Lesión grado 2 del ligamento cruzado anterior.',
                      'Interrupción parcial en la continuidad de las fibras del ligamento cruzado anterior.',
                      'Tu diccionario convierte expresiones breves en las descripciones que tú defines.'],
                     ['Mira doctor, esta paciente tiene infiltrados pulmonares en patrón de vidrio despulido, '
                      'parece que en ambos ápices… no, solo en el izquierdo.',
                      'Pulmón izquierdo con infiltrado en patrón de vidrio despulido en el ápice.',
                      'Dilo como te salga. gōster transforma tu dictado en un informe claro y organizado.'],
                     ['Quiste anexial izquierdo de 6.7 cm… no, me equivoqué, mide 7.1 cm.',
                      'Quiste anexial izquierdo de 7.1 cm.',
                      'Cambia de opinión con naturalidad. gōster conserva tu última corrección.']],
        'steps': [['Dicta', 'Con naturalidad, sin detener tu interpretación.'],
                  ['Revisa', 'Un informe estructurado, listo para editar.'],
                  ['Firma', 'Tu criterio clínico siempre tiene la última palabra.']],
        'producttag': '02 / HECHO A TU MANERA',
        'producttitle': 'Tu forma de reportar.<br><span>Ahora, con menos esfuerzo.</span>',
        'features': [['Tus plantillas. Tu estructura.',
                      'Usa los formatos con los que ya trabajas. Organiza tus estudios y conserva tu manera de '
                      'presentar cada informe.'],
                     ['Un diccionario que habla como tú.',
                      'Vincula expresiones breves con tus propias descripciones. Tu terminología, disponible '
                      'en cada dictado.'],
                     ['Empieza sin configurar nada.',
                      'Con Autopilot puedes dictar desde el primer momento. Añade plantillas y reglas cuando '
                      'quieras personalizar más.'],
                     ['gōster en tu estilo',
                      'Elige entre dos temas, ajusta el tono y personaliza la interfaz con más de 35 colores. '
                      'Tu espacio de trabajo, a tu gusto.']],
        'workspace': 'UN ESPACIO PARA CONCENTRARTE',
        'workspaceTitle': 'Todo encuentra<br>su lugar.',
        'folders': ['Informe', 'Plantillas', 'Diccionario', 'Historial'],
        'yourstyle': 'Una interfaz amigable e intuitiva.',
        'mobiletag': 'LIBERTAD PARA DICTAR',
        'mobiletitle': 'Tu voz va contigo.',
        'mobilebody': 'Vincula tu celular con un QR y úsalo como micrófono. Dicta desde donde estés; el '
                      'informe aparece en tu computadora.',
        'mobilefoot': 'Sin cables. Sin instalar otra app.',
        'connected': 'Celular vinculado',
        'listening': 'Escuchando tu dictado',
        'pricingtag': '03 / TU SIGUIENTE PASO',
        'pricingtitle': 'Dale voz a una<br>nueva forma de trabajar.',
        'pricingbody': 'Empieza gratis. Encuentra tu ritmo. Elige tu plan.',
        'free': 'Gratis',
        'days': 'durante 15 días',
        'month': 'MXN / mes',
        'choose': 'Elegir',
        'protag': 'EL PLAN MÁS POPULAR',
        'plans': [['Conoce todo lo que puede hacer por ti.',
                   ['Informes y plantillas ilimitados',
                    'Dictado y diccionario personal',
                    'Celular como micrófono']],
                  ['Lo esencial para empezar a tu ritmo.',
                   ['50 informes al mes', '20 plantillas', 'Dictado y diccionario personal']],
                  ['Más espacio para tu forma de trabajar.',
                   ['Informes y plantillas ilimitados',
                    'Edición dinámica de conclusiones',
                    'Soporte prioritario']]],
        'enterprise': '¿Trabajan en equipo?',
        'enterprisebody': 'Gōster Enterprise para grupos, departamentos y hospitales.',
        'talk': 'Hablemos',
        'residenttag': 'PROGRAMA ACADÉMICO',
        'residenttitle': 'El futuro se aprende<br>desde la residencia.',
        'residentbody': 'Solicita acceso completo sin costo durante tu formación. Tu próxima herramienta de '
                        'trabajo también puede acompañarte mientras aprendes.',
        'residentcta': 'Solicitar acceso para residentes',
        'faqtag': 'ANTES DE TU PRIMER INFORME',
        'faqtitle': 'Qué bueno que preguntas.',
        'faq': [['¿Necesito configurar plantillas para empezar?',
                 'No. Autopilot te permite comenzar con tu primer dictado. Puedes incorporar después tus '
                 'plantillas, diccionario e instrucciones para adaptar la redacción a tu estilo.'],
                ['¿Qué estudios puedo reportar?',
                 'Puedes dictar hallazgos de resonancia magnética, tomografía, ultrasonido, radiografía, '
                 'mamografía y otros estudios. Usa tus plantillas para definir la estructura del informe.'],
                ['¿Puedo dictar desde mi celular?',
                 'Sí. Vincula tu celular mediante el código QR de la aplicación y úsalo como micrófono '
                 'mientras trabajas en tu computadora, sin instalar una app adicional.'],
                ['¿Cómo se manejan mis datos?',
                 'Consulta el aviso de privacidad para conocer qué datos se procesan, con qué finalidad y cómo '
                 'ejercer tus derechos. Está disponible desde el pie de esta página.'],
                ['¿Gōster reemplaza al radiólogo?',
                 'La interpretación, la revisión y la firma son tuyas. Gōster es una herramienta de apoyo a la '
                 'redacción: revisa siempre el informe antes de utilizarlo.']],
        'endtag': 'TU CRITERIO. TU ESTILO. TU GŌSTER.',
        'endtitle': 'Menos teclado.<br><span>Más radiología.</span>',
        'endbody': 'Tu próximo informe puede empezar de otra manera.',
        'footer': 'Tu ghostwriter radiológico.',
        'privacy': 'Privacidad',
        'contact': 'Contacto',
        'made': 'Hecho por radiólogos, para radiólogos.',
        'dev': 'Desarrollado por',
        'skip': 'Ir al contenido',
        'menu': 'Abrir menú',
        'theme': 'Cambiar tema',
        'motion': 'Pausar animaciones',
        'resume': 'Activar animaciones',
        'library': 'BIBLIOTECA'},
 'en': {'title': 'Your voice. Your judgment. Your report.',
        'description': 'Gōster turns your dictation into structured radiology reports, with your templates, '
                       'terminology and style.',
        'nav': ['Product', 'How it works', 'Plans', 'Questions'],
        'login': 'Sign in',
        'try': 'Try for free',
        'eyebrow': 'YOUR RADIOLOGY GHOSTWRITER',
        'hero': 'You interpret. <span>Gōster writes.</span>',
        'intro': 'From your voice to a radiology report.<br>Your structure, your words, your style.',
        'watch': 'See how it works',
        'trial': '15 days free',
        'nocard': 'No credit card required',
        'scroll': 'A LITTLE LESS TYPING. A LOT MORE YOU.',
        'flowtag': '01 / IT COMES NATURALLY',
        'flowtitle': 'Your next report<br>starts with your voice.',
        'flowbody': 'Analyze your study out loud. You don’t need perfect dictation or spoken punctuation: '
                    'gōster understands your intent and organizes your findings.',
        'demo': 'INTERACTIVE DEMONSTRATION',
        'tabs': ['Knee MRI', 'Chest CT', 'Natural correction'],
        'dictation': 'YOUR DICTATION',
        'report': 'YOUR REPORT',
        'ready': 'Ready for your review',
        'generating': 'Shaping your report…',
        'play': 'See the transformation',
        'again': 'Watch again',
        'sample': 'Illustrative example using a configured dictionary.',
        'examples': [['Grade 2 injury of the anterior cruciate ligament.',
                      'Partial disruption of the continuity of the anterior cruciate ligament fibers.',
                      'Your dictionary expands brief expressions into descriptions you define.'],
                     ['Look, doctor, this patient has pulmonary infiltrates with a ground-glass pattern, '
                      'apparently in both apices… no, only on the left.',
                      'The left lung shows a ground-glass infiltrate at the apex.',
                      'Say it your way. gōster turns your dictation into a clear, organized report.'],
                     ['Left adnexal cyst measuring 6.7 cm… no, my mistake, it measures 7.1 cm.',
                      'Left adnexal cyst measuring 7.1 cm.',
                      'Correct yourself naturally. gōster keeps your final correction.']],
        'steps': [['Dictate', 'Naturally, without interrupting your interpretation.'],
                  ['Review', 'A structured report, ready to edit.'],
                  ['Sign', 'Your clinical judgment always has the final word.']],
        'producttag': '02 / MADE YOUR WAY',
        'producttitle': 'Your way of reporting.<br><span>With a little less effort.</span>',
        'features': [['Your templates. Your structure.',
                      'Use the formats you already work with. Organize your studies and keep your way of '
                      'presenting every report.'],
                     ['A dictionary that speaks like you.',
                      'Connect short phrases to your own descriptions. Your terminology, available with every '
                      'dictation.'],
                     ['Start without setting anything up.',
                      'Autopilot lets you dictate right away. Add templates and rules whenever you want more '
                      'personalization.'],
                     ['gōster in your style',
                      'Choose between two themes, adjust the tone and personalize your interface with more '
                      'than 35 colors. Your workspace, your way.']],
        'workspace': 'ROOM TO FOCUS',
        'workspaceTitle': 'Everything in<br>its place.',
        'folders': ['Report', 'Templates', 'Dictionary', 'History'],
        'yourstyle': 'A friendly, intuitive interface.',
        'mobiletag': 'FREEDOM TO DICTATE',
        'mobiletitle': 'Your voice goes with you.',
        'mobilebody': 'Pair your phone with a QR code and use it as a microphone. Dictate wherever you are; '
                      'the report appears on your computer.',
        'mobilefoot': 'No cables. No extra app.',
        'connected': 'Phone connected',
        'listening': 'Listening to your dictation',
        'pricingtag': '03 / YOUR NEXT STEP',
        'pricingtitle': 'Give voice to a<br>new way of working.',
        'pricingbody': 'Start for free. Find your rhythm. Choose your plan.',
        'free': 'Free',
        'days': 'for 15 days',
        'month': 'MXN / month',
        'choose': 'Choose',
        'protag': 'THE MOST POPULAR PLAN',
        'plans': [['Discover what it can do for you.',
                   ['Unlimited reports and templates',
                    'Dictation and personal dictionary',
                    'Phone as a microphone']],
                  ['The essentials to get started.',
                   ['50 reports per month', '20 templates', 'Dictation and personal dictionary']],
                  ['More room for your way of working.',
                   ['Unlimited reports and templates', 'Dynamic impression editing', 'Priority support']]],
        'enterprise': 'Working as a team?',
        'enterprisebody': 'Gōster Enterprise for groups, departments and hospitals.',
        'talk': 'Let’s talk',
        'residenttag': 'ACADEMIC PROGRAM',
        'residenttitle': 'The future starts<br>during residency.',
        'residentbody': 'Apply for full access at no cost during your training. Your next work tool can '
                        'support you while you learn.',
        'residentcta': 'Apply for resident access',
        'faqtag': 'BEFORE YOUR FIRST REPORT',
        'faqtitle': 'Glad you asked.',
        'faq': [['Do I need templates to get started?',
                 'No. Autopilot lets you start with your first dictation. Add your templates, dictionary and '
                 'instructions later to tailor the writing to your style.'],
                ['Which studies can I report?',
                 'Dictate findings from MRI, CT, ultrasound, radiography, mammography and other studies. Use '
                 'your templates to define the report structure.'],
                ['Can I dictate from my phone?',
                 'Yes. Pair your phone using the QR code in the app and use it as a microphone while working '
                 'on your computer, without installing an additional app.'],
                ['How is my data handled?',
                 'Read the privacy notice to learn which data is processed, for what purposes and how to '
                 'exercise your rights. It is available in the footer.'],
                ['Does Gōster replace the radiologist?',
                 'Interpretation, review and sign-off are yours. Gōster supports report writing: always review '
                 'the report before using it.']],
        'endtag': 'YOUR JUDGMENT. YOUR STYLE. YOUR GŌSTER.',
        'endtitle': 'Less typing.<br><span>More radiology.</span>',
        'endbody': 'Your next report can start differently.',
        'footer': 'Your radiology ghostwriter.',
        'privacy': 'Privacy',
        'contact': 'Contact',
        'made': 'Made by radiologists, for radiologists.',
        'dev': 'Developed by',
        'skip': 'Skip to content',
        'menu': 'Open menu',
        'theme': 'Switch theme',
        'motion': 'Pause animations',
        'resume': 'Enable animations',
        'library': 'LIBRARY'},
 'pt': {'title': 'Sua voz. Seu critério. Seu laudo.',
        'description': 'Gōster transforma seu ditado em laudos radiológicos estruturados, com seus modelos, '
                       'sua terminologia e seu estilo.',
        'nav': ['Produto', 'Como funciona', 'Planos', 'Perguntas'],
        'login': 'Entrar',
        'try': 'Testar grátis',
        'eyebrow': 'SEU GHOSTWRITER RADIOLÓGICO',
        'hero': 'Você interpreta. <span>Gōster escreve.</span>',
        'intro': 'Da sua voz a um laudo radiológico.<br>Sua estrutura, suas palavras, seu estilo.',
        'watch': 'Veja como funciona',
        'trial': '15 dias grátis',
        'nocard': 'Sem cartão de crédito',
        'scroll': 'UM POUCO MENOS DE TECLADO. MUITO MAIS DE VOCÊ.',
        'flowtag': '01 / ASSIM, NATURALMENTE',
        'flowtitle': 'Seu próximo laudo<br>começa com sua voz.',
        'flowbody': 'Analise seu estudo em voz alta. Você não precisa de um ditado perfeito nem indicar sinais '
                    'de pontuação: gōster entende sua intenção e organiza seus achados.',
        'demo': 'DEMONSTRAÇÃO INTERATIVA',
        'tabs': ['RM Joelho', 'TC Tórax', 'Correção natural'],
        'dictation': 'SEU DITADO',
        'report': 'SEU LAUDO',
        'ready': 'Pronto para sua revisão',
        'generating': 'Dando forma ao seu laudo…',
        'play': 'Veja a transformação',
        'again': 'Ver novamente',
        'sample': 'Exemplo ilustrativo com um dicionário configurado.',
        'examples': [['Lesão grau 2 do ligamento cruzado anterior.',
                      'Interrupção parcial da continuidade das fibras do ligamento cruzado anterior.',
                      'Seu dicionário transforma expressões breves nas descrições que você define.'],
                     ['Olha, doutor, esta paciente tem infiltrados pulmonares em padrão de vidro fosco, parece '
                      'que em ambos os ápices… não, só no esquerdo.',
                      'Pulmão esquerdo com infiltrado em padrão de vidro fosco no ápice.',
                      'Diga do seu jeito. gōster transforma seu ditado em um laudo claro e organizado.'],
                     ['Cisto anexial esquerdo de 6,7 cm… não, me enganei, mede 7,1 cm.',
                      'Cisto anexial esquerdo de 7,1 cm.',
                      'Corrija-se com naturalidade. gōster mantém sua última correção.']],
        'steps': [['Dite', 'Com naturalidade, sem interromper sua interpretação.'],
                  ['Revise', 'Um laudo estruturado, pronto para editar.'],
                  ['Assine', 'Seu critério clínico sempre tem a última palavra.']],
        'producttag': '02 / FEITO DO SEU JEITO',
        'producttitle': 'Seu jeito de laudar.<br><span>Agora, com menos esforço.</span>',
        'features': [['Seus modelos. Sua estrutura.',
                      'Use os formatos com os quais já trabalha. Organize seus estudos e preserve sua maneira '
                      'de apresentar cada laudo.'],
                     ['Um dicionário que fala como você.',
                      'Vincule expressões breves às suas próprias descrições. Sua terminologia, disponível em '
                      'cada ditado.'],
                     ['Comece sem configurar nada.',
                      'Com Autopilot, você pode ditar desde o primeiro momento. Adicione modelos e regras '
                      'quando quiser personalizar mais.'],
                     ['gōster no seu estilo',
                      'Escolha entre dois temas, ajuste o tom e personalize a interface com mais de 35 cores. '
                      'Seu espaço de trabalho, do seu jeito.']],
        'workspace': 'UM ESPAÇO PARA SE CONCENTRAR',
        'workspaceTitle': 'Tudo encontra<br>seu lugar.',
        'folders': ['Laudo', 'Modelos', 'Dicionário', 'Histórico'],
        'yourstyle': 'Uma interface amigável e intuitiva.',
        'mobiletag': 'LIBERDADE PARA DITAR',
        'mobiletitle': 'Sua voz vai com você.',
        'mobilebody': 'Vincule seu celular com um QR e use-o como microfone. Dite de onde estiver; o laudo '
                      'aparece no seu computador.',
        'mobilefoot': 'Sem cabos. Sem instalar outro app.',
        'connected': 'Celular conectado',
        'listening': 'Ouvindo seu ditado',
        'pricingtag': '03 / SEU PRÓXIMO PASSO',
        'pricingtitle': 'Dê voz a uma<br>nova forma de trabalhar.',
        'pricingbody': 'Comece grátis. Encontre seu ritmo. Escolha seu plano.',
        'free': 'Grátis',
        'days': 'durante 15 dias',
        'month': 'MXN / mês',
        'choose': 'Escolher',
        'protag': 'O PLANO MAIS POPULAR',
        'plans': [['Conheça tudo o que pode fazer por você.',
                   ['Laudos e modelos ilimitados', 'Ditado e dicionário pessoal', 'Celular como microfone']],
                  ['O essencial para começar no seu ritmo.',
                   ['50 laudos por mês', '20 modelos', 'Ditado e dicionário pessoal']],
                  ['Mais espaço para seu jeito de trabalhar.',
                   ['Laudos e modelos ilimitados', 'Edição dinâmica de conclusões', 'Suporte prioritário']]],
        'enterprise': 'Trabalham em equipe?',
        'enterprisebody': 'Gōster Enterprise para grupos, departamentos e hospitais.',
        'talk': 'Vamos conversar',
        'residenttag': 'PROGRAMA ACADÊMICO',
        'residenttitle': 'O futuro começa<br>na residência.',
        'residentbody': 'Solicite acesso completo sem custo durante sua formação. Sua próxima ferramenta de '
                        'trabalho também pode acompanhar seu aprendizado.',
        'residentcta': 'Solicitar acesso para residentes',
        'faqtag': 'ANTES DO SEU PRIMEIRO LAUDO',
        'faqtitle': 'Que bom que perguntou.',
        'faq': [['Preciso configurar modelos para começar?',
                 'Não. Autopilot permite começar com seu primeiro ditado. Depois, incorpore modelos, '
                 'dicionário e instruções para adaptar a redação ao seu estilo.'],
                ['Quais estudos posso laudar?',
                 'Dite achados de ressonância magnética, tomografia, ultrassom, radiografia, mamografia e '
                 'outros estudos. Use seus modelos para definir a estrutura do laudo.'],
                ['Posso ditar pelo celular?',
                 'Sim. Vincule seu celular usando o QR da aplicação e utilize-o como microfone enquanto '
                 'trabalha no computador, sem instalar outro app.'],
                ['Como meus dados são tratados?',
                 'Consulte o aviso de privacidade para saber quais dados são processados, com qual finalidade '
                 'e como exercer seus direitos. O aviso está disponível no rodapé.'],
                ['Gōster substitui o radiologista?',
                 'A interpretação, a revisão e a assinatura são suas. Gōster apoia a redação: revise sempre o '
                 'laudo antes de utilizá-lo.']],
        'endtag': 'SEU CRITÉRIO. SEU ESTILO. SEU GŌSTER.',
        'endtitle': 'Menos teclado.<br><span>Mais radiologia.</span>',
        'endbody': 'Seu próximo laudo pode começar de outra maneira.',
        'footer': 'Seu ghostwriter radiológico.',
        'privacy': 'Privacidade',
        'contact': 'Contato',
        'made': 'Feito por radiologistas, para radiologistas.',
        'dev': 'Desenvolvido por',
        'skip': 'Ir para o conteúdo',
        'menu': 'Abrir menu',
        'theme': 'Mudar tema',
        'motion': 'Pausar animações',
        'resume': 'Ativar animações',
        'library': 'BIBLIOTECA'}}

class BrandTypography(HTMLParser):
 """Style visible brand names without touching metadata, URLs, or JSON."""
 def __init__(self):
  super().__init__(convert_charrefs=False)
  self.parts=[]
  self.excluded=[]
 def handle_starttag(self,tag,attrs):
  self.parts.append(self.get_starttag_text())
  if tag in ('script','style','title'): self.excluded.append(tag)
 def handle_startendtag(self,tag,attrs): self.parts.append(self.get_starttag_text())
 def handle_endtag(self,tag):
  self.parts.append(f'</{tag}>')
  if self.excluded and self.excluded[-1]==tag: self.excluded.pop()
 def handle_data(self,data):
  self.parts.append(data if self.excluded else re.sub(r'gōster', '<span class="brand-name">gōster</span>',data,flags=re.I))
 def handle_decl(self,data): self.parts.append(f'<!{data}>')
 def handle_entityref(self,name): self.parts.append(f'&{name};')
 def handle_charref(self,name): self.parts.append(f'&#{name};')
 def handle_comment(self,data): self.parts.append(f'<!--{data}-->')

ARROW='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
MIC='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4m-3 0h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
wave='<div class="wave" aria-hidden="true">'+''.join(f'<i style="--h:{h}px;--delay:{i*.07}s"></i>' for i,h in enumerate([8,15,24,12,30,42,24,16,38,54,32,22,42,60,36,20,45,32,16,27,40,18,10,22,12]))+'</div>'
for lang,c in COPY.items():
 app=f'https://app.goster.ai/?lang={lang}'
 nav=''.join(f'<a href="#{id}">{label}</a>' for id,label in zip(['producto','flujo','precios','faq'],c['nav']))
 langs=''.join(f'<a href="{file}" lang="{key}" hreflang="{key}" aria-label="{name}" '+('aria-current="page"' if key==lang else '')+f'>{key.upper()}</a>' for key,file,name in [('es','index.html','Español'),('en','en.html','English'),('pt','pt.html','Português')])
 features=''.join(f'<article class="feature reveal"><span class="feature-number">0{i+1}</span><div><h3>{t}</h3><p>{b}</p></div></article>' for i,(t,b) in enumerate(c['features']))
 steps=''.join(f'<li class="reveal"><span>0{i+1}</span><div><h3>{t}</h3><p>{b}</p></div></li>' for i,(t,b) in enumerate(c['steps']))
 tabs=''.join(f'<button type="button" role="tab" id="tab-{i}" aria-controls="demo-panel" aria-selected="{str(i==0).lower()}" tabindex="{0 if i==0 else -1}" data-example="{i}">{t}</button>' for i,t in enumerate(c['tabs']))
 plans=''
 for i,(name,price,unit) in enumerate([('Trial',c['free'],c['days']),('Base','$249',c['month']),('Pro','$499',c['month'])]):
  desc,items=c['plans'][i]
  plans+=f'<article class="plan reveal {"featured" if i==2 else ""}"><div class="plan-top"><h3>{name}</h3>{"<span>"+c["protag"]+"</span>" if i==2 else ""}</div><div class="price">{price}</div><p class="price-unit">{unit}</p><p class="plan-description">{desc}</p><ul>'+''.join(f'<li>{x}</li>' for x in items)+f'</ul><a class="button {"primary" if i==2 else "secondary"}" data-app href="{app}{"&amp;upgrade="+name.lower() if i else ""}">{c["try"] if i==0 else c["choose"]+" "+name}{ARROW}</a></article>'
 faq=''.join(f'<details class="reveal"><summary><span class="faq-question">{q}</span><span aria-hidden="true">+</span></summary><p>{a}</p></details>' for q,a in c['faq'])
 folders=''.join(f'<div class="folder {"selected" if i==1 else ""}"><span aria-hidden="true">▱</span>{x}</div>' for i,x in enumerate(c['folders']))
 html=f'''<!doctype html>
<html lang="{lang}" data-theme="dark">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Gōster — {c['title']}</title><meta name="description" content="{c['description']}">
<meta name="theme-color" content="#131c18"><meta property="og:title" content="Gōster — {c['title']}"><meta property="og:description" content="{c['description']}"><meta property="og:type" content="website"><meta property="og:image" content="https://goster.ai/assets/goster-logo-original.png">
<link rel="icon" href="assets/goster-chibi-favicon.png"><link rel="canonical" href="https://goster.ai/{'' if lang=='es' else lang+'.html'}">
<link rel="alternate" hreflang="es" href="https://goster.ai/"><link rel="alternate" hreflang="en" href="https://goster.ai/en.html"><link rel="alternate" hreflang="pt" href="https://goster.ai/pt.html"><link rel="alternate" hreflang="x-default" href="https://goster.ai/">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="landing.css"><script src="landing.js" defer></script>
</head>
<body>
<div id="ghostCursor" aria-hidden="true"></div><div id="ghostDot" aria-hidden="true"></div>
<a class="skip" href="#contenido">{c['skip']}</a>
<header class="header"><a class="wordmark" href="#top" aria-label="Gōster">gōster</a><nav class="desktop-nav" aria-label="{c['nav'][0]}">{nav}</nav><div class="nav-actions"><div class="languages">{langs}</div><button class="icon-button theme-toggle" aria-label="{c['theme']}" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 5a7 7 0 0 1 0 14Z" fill="currentColor"/></svg></button><a class="login" data-app href="{app}">{c['login']}</a><a class="button nav-cta primary" data-app href="{app}">{c['try']}{ARROW}</a><button class="icon-button menu-toggle" aria-label="{c['menu']}" aria-controls="mobile-menu" aria-expanded="false"><span></span><span></span></button></div><nav id="mobile-menu" class="mobile-menu" hidden>{nav}<a data-app href="{app}">{c['login']}</a></nav></header>
<main id="contenido">
<section class="hero" id="top"><div class="hero-orbit orbit-one" aria-hidden="true"></div><div class="hero-orbit orbit-two" aria-hidden="true"></div><div class="hero-content"><div class="hero-logo" role="img" aria-label="gōster™"><img class="hero-ghost" src="assets/goster-ghost-original.png" alt="" width="706" height="617" fetchpriority="high"><div class="brand-lockup" aria-hidden="true">gōster<sup>™</sup></div></div><p class="eyebrow hero-eyebrow"><span class="status-dot"></span>{c['eyebrow']}</p><h1>{c['hero']}</h1><p class="hero-intro">{c['intro']}</p><div class="hero-actions"><a class="button primary" data-app href="{app}">{c['try']}{ARROW}</a><a class="text-link" href="#flujo">{c['watch']}<span aria-hidden="true">↘</span></a></div><p class="trial-note"><span>{c['trial']}</span><i></i><span>{c['nocard']}</span></p></div><div class="hero-bottom"><span>{c['scroll']}</span><a href="#flujo" aria-label="{c['watch']}" class="scroll-arrow">↓</a><button class="motion-toggle" aria-label="{c['motion']}" aria-pressed="false"><span aria-hidden="true">Ⅱ</span></button></div></section>
<section class="section flow" id="flujo"><div class="container"><div class="section-heading reveal"><div><p class="eyebrow">{c['flowtag']}</p><h2>{c['flowtitle']}</h2></div><p class="section-intro">{c['flowbody']}</p></div><div class="demo reveal"><div class="demo-top"><span class="micro-label"><span class="status-dot"></span>{c['demo']}</span><div class="demo-tabs" role="tablist" aria-label="{c['demo']}">{tabs}</div></div><div class="demo-panels" role="tabpanel" id="demo-panel" aria-labelledby="tab-0"><div class="dictation-panel"><span class="micro-label">{c['dictation']}</span><div class="dictation-quote">“<span id="dictation-text">{c['examples'][0][0]}</span>”</div>{wave}<div class="dictation-bottom"><span class="mic-icon">{MIC}</span><span>gōster</span><span class="time">00:08</span></div></div><div class="transform-arrow" aria-hidden="true">{ARROW}</div><div class="report-panel"><div class="report-header"><span class="micro-label">{c['report']}</span><span class="report-dots" aria-hidden="true">•••</span></div><div class="report-rule"></div><p id="report-text">{c['examples'][0][1]}</p><div class="report-lines" aria-hidden="true"><i></i><i></i><i></i></div><div class="report-status" role="status"><span>✓</span><span id="report-status">{c['ready']}</span></div></div></div><div class="demo-footer"><p id="demo-explanation">{c['examples'][0][2]}</p><button class="demo-play" type="button">{c['play']}{ARROW}</button></div></div><p class="demo-note">{c['sample']}</p><ol class="steps">{steps}</ol></div></section>
<section class="section product" id="producto"><div class="container"><div class="section-heading reveal"><div><p class="eyebrow">{c['producttag']}</p><h2>{c['producttitle']}</h2></div></div><div class="product-grid"><div class="workspace-visual reveal"><p class="micro-label">{c['workspace']}</p><h3>{c['workspaceTitle']}</h3><div class="template-stack"><div class="template-back"></div><div class="template-card"><div class="template-top"><span class="library-label">{c['library']}</span><span aria-hidden="true">•••</span></div>{folders}</div><span class="style-chip"><span class="status-dot"></span>{c['yourstyle']}</span></div><div class="visual-coordinate" aria-hidden="true">G / 01 — PERSONAL</div></div><div class="features">{features}</div></div><div class="mobility reveal"><div class="mobility-copy"><p class="eyebrow">{c['mobiletag']}</p><h3>{c['mobiletitle']}</h3><p>{c['mobilebody']}</p><span class="mobility-foot">{c['mobilefoot']}</span></div><div class="mobile-visual" aria-label="{c['connected']}"><div class="connection-orbit" aria-hidden="true"></div><span class="connection-chip"><span class="status-dot"></span>{c['connected']}</span><div class="phone"><div class="phone-island"></div><span class="mini-brand">gōster</span><div class="phone-mic">{MIC}</div>{wave}<span>{c['listening']}</span><div class="phone-bottom"></div></div></div></div></div></section>
<section class="section pricing" id="precios"><span id="planes" class="anchor-alias"></span><div class="container"><div class="center-heading reveal"><p class="eyebrow">{c['pricingtag']}</p><h2>{c['pricingtitle']}</h2><p>{c['pricingbody']}</p></div><div class="plans">{plans}</div><div class="enterprise reveal"><div><strong>{c['enterprise']}</strong><p>{c['enterprisebody']}</p></div><a class="text-link" href="mailto:hello@goster.ai?subject=Goster%20Enterprise">{c['talk']}{ARROW}</a></div><div class="resident reveal" id="residentes"><div class="resident-art" aria-hidden="true"><img src="assets/goster-ghost-original.png" width="706" height="617" alt="" loading="lazy"><div class="resident-wordmark">gōster<sup>™</sup></div></div><div><p class="eyebrow">{c['residenttag']}</p><h3>{c['residenttitle']}</h3><p>{c['residentbody']}</p><a class="text-link" href="mailto:hello@goster.ai?subject=Acceso%20residente">{c['residentcta']}{ARROW}</a></div></div></div></section>
<section class="section faq" id="faq"><div class="container faq-grid"><div class="reveal"><p class="eyebrow">{c['faqtag']}</p><h2>{c['faqtitle']}</h2></div><div class="faq-list">{faq}</div></div></section>
<section class="closing"><div class="closing-orbit" aria-hidden="true"></div><div class="container reveal"><p class="eyebrow">{c['endtag']}</p><h2>{c['endtitle']}</h2><p>{c['endbody']}</p><a class="button primary" data-app href="{app}">{c['try']}{ARROW}</a><p class="trial-note">{c['trial']} · {c['nocard']}</p></div></section>
</main><footer><div class="container"><div class="footer-top"><div><a class="wordmark" href="#top">gōster</a><p>{c['footer']}</p></div><div class="footer-links"><a data-app href="https://app.goster.ai/privacidad?lang={lang}">{c['privacy']}</a><a href="mailto:hello@goster.ai">{c['contact']}</a><div class="languages">{langs}</div></div></div><div class="footer-bottom"><span>© {__import__('datetime').date.today().year} Gōster</span><span>{c['made']}</span><span>{c['dev']} <a href="https://stonevale.io" target="_blank" rel="noopener noreferrer">STONEVALE ↗</a></span></div></div></footer>
<script id="landing-copy" type="application/json">{json.dumps({k:c[k] for k in ['examples','ready','generating','play','again','motion','resume']},ensure_ascii=False)}</script>
</body></html>'''
 branded=BrandTypography()
 branded.feed(html)
 html=''.join(branded.parts)
 (ROOT/({'es':'index.html','en':'en.html','pt':'pt.html'}[lang])).write_text(html)
print('Generated ES, EN, PT landing pages.')
