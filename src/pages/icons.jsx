// docswebsite/src/pages/test2.jsx
// Comprehensive test page for bertui-icons

import { 
  ArrowRight, 
  Activity, 
  User, 
  
  Star,
  Heart,
  Bell,
  Settings,
  Search,
  Menu,
  X,
  Check,
  ChevronRight,
  Plus,
  Minus,
  Download,
  Upload,
  Mail,
  Phone,
  Calendar,
  Clock
} from 'bertui-icons';

function Test2() {
  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          BERTUI Icons Test Suite
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#666',
          margin: 0 
        }}>
          ⚡ The world's fastest icon library - Powered by Zig + Bun FFI
        </p>
      </div>

      {/* Section 1: Basic Icons */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '10px'
        }}>
          1. Basic Icons (Default Size: 24px)
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <IconDemo name="ArrowRight" icon={ArrowRight()} />
          <IconDemo name="Activity" icon={Activity()} />
          <IconDemo name="User" icon={User()} />
          <IconDemo name="Star" icon={Star()} />
          <IconDemo name="Heart" icon={Heart()} />
          <IconDemo name="Bell" icon={Bell()} />
          <IconDemo name="Settings" icon={Settings()} />
        </div>
      </section>

      {/* Section 2: Size Variations */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '10px'
        }}>
          2. Size Variations
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>16px</p>
            <span dangerouslySetInnerHTML={{ __html: Star({ size: 16 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>24px (default)</p>
            <span dangerouslySetInnerHTML={{ __html: Star({ size: 24 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>32px</p>
            <span dangerouslySetInnerHTML={{ __html: Star({ size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>48px</p>
            <span dangerouslySetInnerHTML={{ __html: Star({ size: 48 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>64px</p>
            <span dangerouslySetInnerHTML={{ __html: Star({ size: 64 }) }} />
          </div>
        </div>
      </section>

      {/* Section 3: Color Variations */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '10px'
        }}>
          3. Color Variations
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Red</p>
            <span dangerouslySetInnerHTML={{ __html: Heart({ color: '#ef4444', size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Blue</p>
            <span dangerouslySetInnerHTML={{ __html: Bell({ color: '#3b82f6', size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Green</p>
            <span dangerouslySetInnerHTML={{ __html: Check({ color: '#10b981', size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Purple</p>
            <span dangerouslySetInnerHTML={{ __html: Star({ color: '#8b5cf6', size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Orange</p>
            <span dangerouslySetInnerHTML={{ __html: Clock({ color: '#f59e0b', size: 32 }) }} />
          </div>
        </div>
      </section>

      {/* Section 4: Text Overlays (Killer Feature!) */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '10px'
        }}>
          4. Text Overlays 🔥 (Unique to bertui-icons!)
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '40px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Notification Badge</p>
            <span dangerouslySetInnerHTML={{ 
              __html: Bell({ children: '5', color: '#ef4444', size: 32 }) 
            }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Activity Score</p>
            <span dangerouslySetInnerHTML={{ 
              __html: Activity({ children: '98', color: '#10b981', size: 32 }) 
            }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>User Count</p>
            <span dangerouslySetInnerHTML={{ 
              __html: User({ children: '142', color: '#3b82f6', size: 32 }) 
            }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>New Messages</p>
            <span dangerouslySetInnerHTML={{ 
              __html: Mail({ children: '12', color: '#8b5cf6', size: 32 }) 
            }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Rating</p>
            <span dangerouslySetInnerHTML={{ 
              __html: Star({ children: '4.9', color: '#f59e0b', size: 32 }) 
            }} />
          </div>
        </div>
      </section>

      {/* Section 5: Custom Text Positioning */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '10px'
        }}>
          5. Custom Text Positioning
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '40px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Default Position</p>
            <span dangerouslySetInnerHTML={{ 
              __html: ArrowRight({ children: 'Next', size: 32 }) 
            }} />
          </div>

          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>Large Font</p>
            <span dangerouslySetInnerHTML={{ 
              __html: Settings({ children: 'Config', size: 48, fontSize: 16 }) 
            }} />
          </div>
        </div>
      </section>

      {/* Section 6: Stroke Width Variations */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '10px'
        }}>
          6. Stroke Width Variations
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '30px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Thin (1px)</p>
            <span dangerouslySetInnerHTML={{ __html: Heart({ strokeWidth: 1, size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Default (2px)</p>
            <span dangerouslySetInnerHTML={{ __html: Heart({ strokeWidth: 2, size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Bold (3px)</p>
            <span dangerouslySetInnerHTML={{ __html: Heart({ strokeWidth: 3, size: 32 }) }} />
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>Extra Bold (4px)</p>
            <span dangerouslySetInnerHTML={{ __html: Heart({ strokeWidth: 4, size: 32 }) }} />
          </div>
        </div>
      </section>

      {/* Section 7: Icon Gallery */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          borderBottom: '2px solid #667eea',
          paddingBottom: '10px'
        }}>
          7. Icon Gallery (the little icons we can show you )
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '20px',
        }}>
          <IconCard name="ArrowRight" icon={ArrowRight()} />
          <IconCard name="Activity" icon={Activity()} />
          <IconCard name="User" icon={User()} />
          
          <IconCard name="Star" icon={Star()} />
          <IconCard name="Heart" icon={Heart()} />
          <IconCard name="Bell" icon={Bell()} />
          <IconCard name="Settings" icon={Settings()} />
          <IconCard name="Search" icon={Search()} />
          <IconCard name="Menu" icon={Menu()} />
          <IconCard name="X" icon={X()} />
          <IconCard name="Check" icon={Check()} />
          <IconCard name="ChevronRight" icon={ChevronRight()} />
          <IconCard name="Plus" icon={Plus()} />
          <IconCard name="Minus" icon={Minus()} />
          <IconCard name="Download" icon={Download()} />
          <IconCard name="Upload" icon={Upload()} />
          <IconCard name="Mail" icon={Mail()} />
          <IconCard name="Phone" icon={Phone()} />
          <IconCard name="Calendar" icon={Calendar()} />
          <IconCard name="Clock" icon={Clock()} />
        </div>
      </section>

      {/* Performance Stats */}
      <section style={{ 
        marginBottom: '60px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px',
        borderRadius: '12px',
        color: 'white'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          color: 'white'
        }}>
          ⚡ Performance Stats
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <StatCard 
            title="Render Speed" 
            value="1.5ms" 
            description="Per icon (10x faster than lucide-react)"
          />
          <StatCard 
            title="Bundle Size" 
            value="0KB" 
            description="Zero runtime overhead"
          />
          <StatCard 
            title="Icons Available" 
            value="1667+" 
            description="Complete Lucide icon set"
          />
          <StatCard 
            title="Text Overlays" 
            value="✅" 
            description="Unique feature - only in bertui-icons!"
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 0',
        color: '#666',
        borderTop: '1px solid #e5e7eb'
      }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          Built with ⚡ by the BERTUI team
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          Powered by Zig + Bun FFI | Lucide-compatible API
        </p>
      </footer>
    </div>
  );
}

// Helper component for icon demo
function IconDemo({ name, icon }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>{name}</p>
    </div>
  );
}

// Helper component for icon card
function IconCard({ name, icon }) {
  return (
    <div style={{
      padding: '20px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      textAlign: 'center',
      transition: 'all 0.2s',
      cursor: 'pointer',
      '&:hover': {
        borderColor: '#667eea',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)'
      }
    }}>
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      <p style={{ 
        fontSize: '0.75rem', 
        color: '#666', 
        marginTop: '10px',
        fontFamily: 'monospace'
      }}>
        {name}
      </p>
    </div>
  );
}

// Helper component for stat card
function StatCard({ title, value, description }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '20px',
      borderRadius: '8px',
      backdropFilter: 'blur(10px)'
    }}>
      <h3 style={{ 
        fontSize: '0.9rem', 
        marginBottom: '10px',
        opacity: 0.9,
        color: 'white'
      }}>
        {title}
      </h3>
      <p style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold',
        marginBottom: '5px',
        color: 'white'
      }}>
        {value}
      </p>
      <p style={{ 
        fontSize: '0.85rem',
        opacity: 0.8,
        color: 'white'
      }}>
        {description}
      </p>
    </div>
  );
}

export default Test2;