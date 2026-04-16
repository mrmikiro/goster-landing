import { GhostLogo } from './Logo'
import { Mic, FileText, Sparkles, Grid3x3, LayoutList, BookOpen } from 'lucide-react'

export default function AppMockup({ variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <div className={`rounded-2xl overflow-hidden border ${isDark ? 'border-white/[0.06] mockup-shadow' : 'border-gray-200/60 mockup-shadow-light'}`}>
      {/* Browser bar */}
      <div className={`flex items-center gap-2 px-4 py-2.5 ${isDark ? 'bg-dark-700' : 'bg-gray-50'} border-b ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
        <div className="flex gap-1.5">
          <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
        </div>
        <div className="flex-1 mx-8">
          <div className={`mx-auto max-w-xs rounded-md px-3 py-1 text-[10px] text-center ${isDark ? 'bg-white/5 text-white/30' : 'bg-white text-gray-400 border border-gray-100'}`}>
            app.goster.ai
          </div>
        </div>
      </div>

      {/* App UI */}
      <div className={`flex ${isDark ? 'bg-dark-800' : 'bg-white'}`} style={{ minHeight: '380px' }}>
        {/* Sidebar */}
        <div className={`hidden md:flex flex-col w-48 border-r ${isDark ? 'border-white/5 bg-dark-900' : 'border-gray-100 bg-gray-50'} p-3`}>
          {/* Logo */}
          <div className="flex items-center gap-2 px-2 mb-1">
            <GhostLogo className="h-5 w-auto text-white" eyeColor={isDark ? '#0a0a0f' : '#fff'} />
            <span className={`text-sm font-medium ${isDark ? 'text-white/90' : 'text-gray-800'}`}>gōster</span>
          </div>
          <div className={`text-[10px] px-2 mb-4 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Buenas noches, <span className="font-medium">Miguel</span></div>

          {/* Nav items */}
          <div className="space-y-0.5">
            <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium ${isDark ? 'bg-lavender-600/20 text-lavender-300' : 'bg-lavender-50 text-lavender-700'}`}>
              <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
              Informe
            </div>
            <div className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs ${isDark ? 'text-white/40 hover:text-white/60' : 'text-gray-500'}`}>
              <div className="flex items-center gap-2">
                <Grid3x3 className="w-3.5 h-3.5" strokeWidth={1.5} />
                Plantillas
              </div>
              <span className={`text-[9px] ${isDark ? 'text-white/20' : 'text-gray-300'}`}>69</span>
            </div>
            <div className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs ${isDark ? 'text-white/40 hover:text-white/60' : 'text-gray-500'}`}>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} />
                Diccionario
              </div>
              <span className={`text-[9px] ${isDark ? 'text-white/20' : 'text-gray-300'}`}>28</span>
            </div>
          </div>

          {/* History */}
          <div className="mt-auto">
            <div className={`text-[9px] uppercase tracking-wider font-semibold px-2 mb-2 ${isDark ? 'text-white/20' : 'text-gray-300'}`}>Historial</div>
            <div className="space-y-1">
              {['TC Cráneo simple', 'RX Tórax PA', 'RM Rodilla'].map((item, i) => (
                <div key={i} className={`text-[10px] px-2 py-1 rounded ${isDark ? 'text-white/25' : 'text-gray-400'}`}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Transcript panel */}
          <div className={`flex-1 flex flex-col border-r ${isDark ? 'border-white/5' : 'border-gray-100'} p-4`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] uppercase tracking-wider font-semibold ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Transcripción</span>
              <div className={`px-2.5 py-1 rounded-md text-[9px] font-medium border ${isDark ? 'border-lavender-500/30 text-lavender-300 bg-lavender-500/10' : 'border-lavender-200 text-lavender-600 bg-lavender-50'}`}>
                Nuevo estudio
              </div>
            </div>
            <div className={`flex-1 rounded-xl p-3 mb-3 border ${isDark ? 'bg-dark-700/50 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                "Se observa opacidad homogénea en base pulmonar derecha con broncograma aéreo. Silueta cardiaca de tamaño normal. No se identifican derrames pleurales. Estructuras óseas sin alteraciones..."
              </p>
            </div>
            {/* Voice button */}
            <div className="flex items-center gap-2 mb-3">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] border ${isDark ? 'border-white/10 text-white/40' : 'border-gray-200 text-gray-500'}`}>
                <Mic className="w-3 h-3" strokeWidth={1.5} />
                Iniciar dictado
              </div>
              {/* Waveform */}
              <div className="flex gap-0.5 items-end h-3">
                {[2, 4, 6, 3, 7, 5, 8, 4, 6, 3, 5, 7, 4, 6, 8, 5, 3, 6].map((h, i) => (
                  <div key={i} className="w-[2px] rounded-full bg-lavender-500/40" style={{ height: `${h * 1.5}px` }} />
                ))}
              </div>
            </div>
            {/* Generate button */}
            <div className="bg-lavender-600 rounded-xl py-2.5 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
              <span className="text-xs font-medium text-white">Generar informe</span>
            </div>
          </div>

          {/* Report panel */}
          <div className="flex-1 flex flex-col p-4">
            {/* Chip bar */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[9px] px-2 py-0.5 rounded-full border ${isDark ? 'border-lavender-500/20 text-lavender-300/60 bg-lavender-500/5' : 'border-lavender-200 text-lavender-500 bg-lavender-50'}`}>RX Tórax PA</span>
              <span className={`text-[9px] px-2 py-0.5 rounded-full border ${isDark ? 'border-white/5 text-white/20' : 'border-gray-100 text-gray-400'}`}>Diccionario: Tórax</span>
            </div>
            <div className={`flex items-center justify-between mb-3`}>
              <span className={`text-[10px] uppercase tracking-wider font-semibold ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Informe generado</span>
            </div>
            {/* Toolbar */}
            <div className={`flex items-center gap-1 px-2 py-1.5 rounded-lg mb-3 border ${isDark ? 'bg-dark-700/50 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
              {['B', 'I', 'U'].map((t) => (
                <span key={t} className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold ${isDark ? 'text-white/30 hover:bg-white/5' : 'text-gray-400'}`}>{t}</span>
              ))}
              <div className={`w-px h-3 mx-1 ${isDark ? 'bg-white/5' : 'bg-gray-200'}`} />
              {[LayoutList, Grid3x3].map((Icon, i) => (
                <span key={i} className={`w-5 h-5 flex items-center justify-center rounded ${isDark ? 'text-white/20' : 'text-gray-300'}`}>
                  <Icon className="w-3 h-3" strokeWidth={1.5} />
                </span>
              ))}
            </div>
            {/* Report content */}
            <div className={`flex-1 rounded-xl p-3 border ${isDark ? 'bg-dark-700/30 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
              <div className="space-y-2.5">
                <div>
                  <div className={`text-[8px] uppercase tracking-widest font-bold mb-1 ${isDark ? 'text-white/20' : 'text-gray-300'}`}>Hallazgos</div>
                  <p className={`text-[11px] leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    Se identifica opacidad homogénea en la base del hemitórax derecho, con presencia de broncograma aéreo, sugestiva de proceso consolidativo. Silueta cardiaca dentro de límites normales. Senos costofrénicos libres bilateralmente.
                  </p>
                </div>
                <div className={`border-t pt-2.5 ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                  <div className={`text-[8px] uppercase tracking-widest font-bold mb-1 ${isDark ? 'text-lavender-400/50' : 'text-lavender-400'}`}>Conclusión</div>
                  <p className={`text-[11px] leading-relaxed font-medium ${isDark ? 'text-white/80' : 'text-gray-800'}`}>
                    Consolidación en base pulmonar derecha, probable proceso neumónico. Se sugiere correlación clínica y laboratorial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
