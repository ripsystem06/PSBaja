// ========================================
// PAGOS Y SERVICIOS BAJA - MAIN JS
// Con Anime.js para animaciones
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Set current year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Initialize all components (solo si existen en la página)
  if (document.getElementById('header')) initHeader();
  if (document.getElementById('menuBtn')) initMobileMenu();
  if (document.getElementById('servicesCarousel')) initServicesCarousel();
  if (document.getElementById('featuresGrid')) initFeaturesSection();
  if (document.getElementById('benefitsList')) initAboutSection();
  if (document.getElementById('servicesGrid')) initServicesSection();
  if (document.getElementById('repartidoresBenefits')) initRepartidoresSection();
  if (document.getElementById('registroCards')) initRegistroSection();
  if (document.getElementById('starRating')) initDownloadSection();
  if (document.getElementById('contactForm')) initContactSection();
  if (document.getElementById('whatsappButton')) initWhatsAppButton();
  
  // Init scroll animations
  initScrollAnimations();
});

// ========== HEADER ==========
function initHeader() {
  const header = document.getElementById('header');
  const logoWhite = document.querySelector('.logo-white');
  const logoDark = document.querySelector('.logo-dark');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  window.addEventListener('scroll', function() {
    const isScrolled = window.scrollY > 20;
    
    if (isScrolled) {
      header.classList.add('bg-white', 'shadow-lg', 'py-3');
      header.classList.remove('bg-transparent', 'py-5');
      if (logoWhite) {
        logoWhite.classList.add('opacity-0');
        logoWhite.classList.remove('opacity-100');
      }
      if (logoDark) {
        logoDark.classList.add('opacity-100');
        logoDark.classList.remove('opacity-0');
      }
      navLinks.forEach(link => {
        link.classList.add('text-slate-700');
        link.classList.remove('text-white');
      });
      if (menuIcon) {
        menuIcon.classList.add('text-slate-800');
        menuIcon.classList.remove('text-white');
      }
      if (closeIcon) {
        closeIcon.classList.add('text-slate-800');
        closeIcon.classList.remove('text-white');
      }
    } else {
      header.classList.remove('bg-white', 'shadow-lg', 'py-3');
      header.classList.add('bg-transparent', 'py-5');
      if (logoWhite) {
        logoWhite.classList.remove('opacity-0');
        logoWhite.classList.add('opacity-100');
      }
      if (logoDark) {
        logoDark.classList.remove('opacity-100');
        logoDark.classList.add('opacity-0');
      }
      navLinks.forEach(link => {
        link.classList.remove('text-slate-700');
        link.classList.add('text-white');
      });
      if (menuIcon) {
        menuIcon.classList.remove('text-slate-800');
        menuIcon.classList.add('text-white');
      }
      if (closeIcon) {
        closeIcon.classList.remove('text-slate-800');
        closeIcon.classList.add('text-white');
      }
    }
  });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  let isOpen = false;
  
  menuBtn.addEventListener('click', function() {
    isOpen = !isOpen;
    
    if (isOpen) {
      mobileMenu.classList.add('open');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      isOpen = false;
      mobileMenu.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}

// ========== SERVICES CAROUSEL ==========
function initServicesCarousel() {
  const carousel = document.getElementById('servicesCarousel');
  
  const services = [
    { name: "CFE", icon: "💡" },
    { name: "Telmex", icon: "📞" },
    { name: "Sky", icon: "📡" },
    { name: "Telcel", icon: "📱" },
    { name: "Izzi", icon: "🌐" },
    { name: "Megacable", icon: "📺" },
    { name: "CESPT", icon: "💧" },
    { name: "Gas Natural", icon: "🔥" },
    { name: "AT&T", icon: "📶" },
    { name: "Movistar", icon: "📲" },
  ];
  
  const allServices = [...services, ...services, ...services];
  
  carousel.innerHTML = allServices.map(service => `
    <div class="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
      <span class="text-2xl">${service.icon}</span>
      <span class="font-semibold text-slate-700">${service.name}</span>
    </div>
  `).join('');
}

// ========== FEATURES SECTION ==========
function initFeaturesSection() {
  const featuresGrid = document.getElementById('featuresGrid');
  
  const features = [
    { icon: "zap", title: "Pagos Instantáneos", description: "Realiza pagos en segundos. Sin esperas, sin complicaciones.", color: "bg-amber-500" },
    { icon: "shield", title: "100% Seguro", description: "Protegemos tu información con encriptación de grado bancario.", color: "bg-green-500" },
    { icon: "clock", title: "Disponible 24/7", description: "Paga tus servicios a cualquier hora, cualquier día.", color: "bg-blue-500" },
    { icon: "credit-card", title: "Acepta Todas las Tarjetas", description: "Visa, MasterCard, American Express y más.", color: "bg-rose-500" },
    { icon: "smartphone", title: "Fácil de Usar", description: "Interfaz intuitiva. Paga en solo 3 toques.", color: "bg-indigo-500" },
    { icon: "headphones", title: "Soporte Dedicado", description: "Equipo de atención al cliente listo para ayudarte.", color: "bg-purple-500" },
  ];
  
  featuresGrid.innerHTML = features.map((feature, index) => `
    <div class="feature-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100" data-index="${index}">
      <div class="w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
        <i data-lucide="${feature.icon}" class="w-8 h-8 text-white"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-800 mb-3">${feature.title}</h3>
      <p class="text-slate-600 leading-relaxed">${feature.description}</p>
    </div>
  `).join('');
  
  lucide.createIcons();
}

// ========== ABOUT SECTION ==========
function initAboutSection() {
  const dotsContainer = document.getElementById('decorativeDots');
  if (dotsContainer) {
    dotsContainer.innerHTML = Array(25).fill('').map(() => `<div class="w-2 h-2 bg-blue-500 rounded-full"></div>`).join('');
  }
  
  const benefitsList = document.getElementById('benefitsList');
  const benefits = [
    "Sin comisiones ocultas ni cargos sorpresa",
    "Amplía tu catálogo de servicios",
    "Recarga tiempo aire de cualquier compañía",
    "Realiza pago de más de 100 servicios",
  ];
  
  benefitsList.innerHTML = benefits.map(benefit => `
    <div class="flex items-center gap-3">
      <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-blue-600"></i>
      </div>
      <span class="text-slate-700">${benefit}</span>
    </div>
  `).join('');
  
  const aboutStats = document.getElementById('aboutStats');
  const stats = [
    { icon: "users", value: "500K+", label: "Usuarios Felices" },
    { icon: "trending-up", value: "$50M+", label: "Pagos Procesados" },
    { icon: "award", value: "4.9★", label: "Calificación App Store" },
  ];
  
  aboutStats.innerHTML = stats.map(stat => `
    <div class="text-center">
      <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
        <i data-lucide="${stat.icon}" class="w-6 h-6 text-blue-600"></i>
      </div>
      <p class="text-2xl font-bold text-slate-800">${stat.value}</p>
      <p class="text-sm text-slate-500">${stat.label}</p>
    </div>
  `).join('');
  
  lucide.createIcons();
}

// ========== SERVICES SECTION ==========
function initServicesSection() {
  const servicesGrid = document.getElementById('servicesGrid');
  
  const services = [
    { icon: "💡", name: "CFE / Luz", description: "Comisión Federal de Electricidad" },
    { icon: "💧", name: "Agua", description: "Servicio de agua potable" },
    { icon: "🔥", name: "Gas Natural", description: "Gas natural y LP" },
    { icon: "📶", name: "Internet", description: "Todos los proveedores" },
    { icon: "📱", name: "Telefonía", description: "Celular y línea fija" },
    { icon: "📺", name: "TV por Cable", description: "Sky, Izzi, Megacable y más" },
    { icon: "🏠", name: "Predial", description: "Impuesto predial" },
    { icon: "🚗", name: "Tenencia", description: "Tenencia vehicular" },
    { icon: "🎓", name: "Colegiaturas", description: "Escuelas y universidades" },
    { icon: "🏥", name: "Seguros", description: "Pólizas de seguro" },
    { icon: "💳", name: "Recargas", description: "Tiempo aire todas las compañías" },
    { icon: "🎁", name: "Tarjetas de Regalo", description: "Netflix, Spotify, Steam y más" },
  ];
  
  servicesGrid.innerHTML = services.map((service, index) => `
    <div class="service-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer" data-index="${index}">
      <div class="text-4xl mb-3 group-hover:scale-110 transition-transform">${service.icon}</div>
      <h3 class="text-white font-semibold mb-1">${service.name}</h3>
      <p class="text-slate-400 text-xs">${service.description}</p>
    </div>
  `).join('');
}

// ========== REPARTIDORES SECTION ==========
function initRepartidoresSection() {
  const benefitsContainer = document.getElementById('repartidoresBenefits');
  
  const benefits = [
    { icon: "dollar-sign", title: "Ingresos Extra", description: "Gana comisiones por cada servicio que cobres." },
    { icon: "clock", title: "Sin Horarios Fijos", description: "Trabaja cuando quieras, tú decides." },
    { icon: "smartphone", title: "Desde tu Celular", description: "Solo necesitas tu smartphone." },
    { icon: "users", title: "Más Clientes", description: "Ofrece servicios mientras haces entregas." },
  ];
  
  benefitsContainer.innerHTML = benefits.map(benefit => `
    <div class="flex gap-4">
      <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <i data-lucide="${benefit.icon}" class="w-6 h-6 text-blue-600"></i>
      </div>
      <div>
        <h3 class="font-semibold text-slate-800 mb-1">${benefit.title}</h3>
        <p class="text-sm text-slate-600">${benefit.description}</p>
      </div>
    </div>
  `).join('');
  
  lucide.createIcons();
}

// ========== REGISTRO SECTION ==========
function initRegistroSection() {
  const WHATSAPP_LINK = "https://wa.me/526462762564?text=Hola,%20quiero%20registrarme%20en%20WaliApp.%20Mi%20inter%C3%A9s%20es:";
  
  const registrationTypes = [
    {
      id: "personal", icon: "user", name: "Usuario Personal",
      description: "Para personas que quieren pagar sus propios servicios.",
      features: ["Paga tus servicios desde casa", "Carga saldo fácilmente", "Historial de pagos", "Sin comisiones extras"],
      cta: "Registrarme", color: "bg-slate-100", iconBg: "bg-slate-200", iconColor: "text-slate-700",
      buttonColor: "bg-slate-800 hover:bg-slate-900 text-white", popular: false,
    },
    {
      id: "negocio", icon: "building-2", name: "Negocio / Empresa",
      description: "Para tiendas y negocios que quieren ofrecer más servicios.",
      features: ["Ofrece pago de servicios", "Gana comisiones", "Terminal Wali Smart", "Dashboard de reportes", "Soporte prioritario", "Capacitación incluida"],
      cta: "Registrar mi Negocio", color: "bg-gradient-to-br from-blue-600 to-blue-700", iconBg: "bg-white/20", iconColor: "text-white",
      buttonColor: "bg-white text-blue-600 hover:bg-blue-50", popular: true,
    },
    {
      id: "repartidor", icon: "bike", name: "Repartidor",
      description: "Para repartidores que quieren un ingreso extra.",
      features: ["Gana mientras repartes", "Comisiones competitivas", "Sin inversión inicial", "Cobra cuando quieras"],
      cta: "Unirme como Repartidor", color: "bg-slate-100", iconBg: "bg-orange-100", iconColor: "text-orange-600",
      buttonColor: "bg-orange-500 hover:bg-orange-600 text-white", popular: false,
    },
  ];
  
  const registroCards = document.getElementById('registroCards');
  
  registroCards.innerHTML = registrationTypes.map(type => `
    <div class="registro-card relative rounded-3xl p-8 ${type.color} ${type.popular ? 'shadow-2xl shadow-blue-500/20 md:scale-105 text-white' : 'shadow-lg text-slate-800'}">
      ${type.popular ? `<div class="absolute -top-4 left-1/2 -translate-x-1/2"><div class="flex items-center gap-1 px-4 py-1.5 bg-green-400 text-green-900 text-sm font-semibold rounded-full"><i data-lucide="wallet" class="w-4 h-4"></i>Recomendado</div></div>` : ''}
      <div class="w-16 h-16 ${type.iconBg} rounded-2xl flex items-center justify-center mb-6">
        <i data-lucide="${type.icon}" class="w-8 h-8 ${type.iconColor}"></i>
      </div>
      <h3 class="text-xl font-bold mb-2">${type.name}</h3>
      <p class="text-sm mb-6 ${type.popular ? 'text-white/80' : 'text-slate-600'}">${type.description}</p>
      <ul class="space-y-3 mb-8">
        ${type.features.map(f => `<li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 flex-shrink-0 ${type.popular ? 'text-green-300' : 'text-green-500'}"></i><span class="text-sm ${type.popular ? 'text-white/90' : 'text-slate-700'}">${f}</span></li>`).join('')}
      </ul>
      <a href="${WHATSAPP_LINK} ${encodeURIComponent(type.name)}" target="_blank" rel="noopener noreferrer" class="w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${type.buttonColor}">
        ${type.cta}<i data-lucide="arrow-right" class="w-4 h-4"></i>
      </a>
    </div>
  `).join('');
  
  // How it works
  const howItWorks = document.getElementById('howItWorks');
  if (howItWorks) {
    const steps = [
      { step: "1", title: "Regístrate", desc: "Elige tu tipo de cuenta" },
      { step: "2", title: "Carga Saldo", desc: "Deposita en tu cuenta" },
      { step: "3", title: "Comienza a Usar", desc: "Paga y genera ingresos" },
    ];
    
    howItWorks.innerHTML = steps.map((item, index) => `
      <div class="flex items-center gap-4">
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-2">${item.step}</div>
          <h4 class="font-semibold text-slate-800">${item.title}</h4>
          <p class="text-sm text-slate-600 max-w-[150px]">${item.desc}</p>
        </div>
        ${index < 2 ? '<i data-lucide="arrow-right" class="w-6 h-6 text-slate-300 hidden md:block"></i>' : ''}
      </div>
    `).join('');
  }
  
  lucide.createIcons();
}

// ========== DOWNLOAD SECTION ==========
function initDownloadSection() {
  const starRating = document.getElementById('starRating');
  starRating.innerHTML = Array(5).fill('').map(() => `
    <svg class="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  `).join('');
}

// ========== CONTACT SECTION ==========
function initContactSection() {
  const contactInfoCards = document.getElementById('contactInfoCards');
  if (contactInfoCards) {
    const contactInfo = [
      { icon: "map-pin", title: "Ubicación", content: "Baja California, México" },
      { icon: "phone", title: "Teléfono", content: "+52 646 276 2564" },
      { icon: "mail", title: "Email", content: "contacto@pagoserviciosbaja.com" },
      { icon: "clock", title: "Horario", content: "Lun - Vie: 9:00 AM - 6:00 PM" },
    ];
    
    contactInfoCards.innerHTML = contactInfo.map(item => `
      <div class="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
          <i data-lucide="${item.icon}" class="w-6 h-6 text-blue-600"></i>
        </div>
        <h4 class="font-semibold text-slate-800 mb-1">${item.title}</h4>
        <p class="text-slate-600 text-sm">${item.content}</p>
      </div>
    `).join('');
    
    lucide.createIcons();
  }
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Show loading state
      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.innerHTML = `<svg class="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span class="ml-2">Enviando...</span>`;
      submitBtn.disabled = true;
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
      };
      
      try {
        // Send to API Route
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
          // Show success message
          contactForm.classList.add('hidden');
          formSuccess.classList.remove('hidden');
          formSuccess.classList.add('flex');
          
          // Animate success
          if (typeof anime !== 'undefined') {
            anime({
              targets: formSuccess,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: 'easeOutCubic'
            });
          }
          
          // Reset form after 5 seconds
          setTimeout(() => {
            contactForm.classList.remove('hidden');
            formSuccess.classList.add('hidden');
            formSuccess.classList.remove('flex');
            contactForm.reset();
            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
            lucide.createIcons();
          }, 5000);
        } else {
          throw new Error(data.error || 'Error al enviar');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contáctanos por WhatsApp.');
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        lucide.createIcons();
      }
    });
  }
}

// ========== WHATSAPP BUTTON ==========
function initWhatsAppButton() {
  const whatsappButton = document.getElementById('whatsappButton');
  const whatsappTooltip = document.getElementById('whatsappTooltip');
  const closeTooltip = document.getElementById('closeTooltip');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      whatsappButton.classList.remove('translate-y-20', 'opacity-0');
      whatsappButton.classList.add('translate-y-0', 'opacity-100');
    } else {
      whatsappButton.classList.add('translate-y-20', 'opacity-0');
      whatsappButton.classList.remove('translate-y-0', 'opacity-100');
    }
  });
  
  // Show tooltip after 5 seconds
  setTimeout(() => {
    if (whatsappTooltip) {
      whatsappTooltip.classList.remove('hidden');
      if (typeof anime !== 'undefined') {
        anime({
          targets: whatsappTooltip,
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 300,
          easing: 'easeOutCubic'
        });
      }
    }
  }, 5000);
  
  if (closeTooltip) {
    closeTooltip.addEventListener('click', function() {
      whatsappTooltip.classList.add('hidden');
    });
  }
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  // Check if anime.js is available
  if (typeof anime === 'undefined') return;
  
  // Hero animation on load
  anime({
    targets: '.hero-content',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 300
  });
  
  anime({
    targets: '.hero-image-container',
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 500
  });
  
  anime({
    targets: '.stat-item',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    easing: 'easeOutCubic',
    delay: anime.stagger(100, {start: 800})
  });
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        if (element.classList.contains('feature-card')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutCubic',
            delay: parseInt(element.dataset.index || 0) * 100
          });
        }
        
        if (element.classList.contains('service-card')) {
          anime({
            targets: element,
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 500,
            easing: 'easeOutCubic',
            delay: parseInt(element.dataset.index || 0) * 50
          });
        }
        
        if (element.classList.contains('about-image')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 800,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('about-content')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 800,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('repartidores-content')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 800,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('repartidores-image')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 800,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('registro-card')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 700,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('download-content')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 800,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('download-phone')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('contact-form')) {
          anime({
            targets: element,
            opacity: [0, 1],
            translateX: [-30, 0],
            duration: 700,
            easing: 'easeOutCubic'
          });
        }
        
        if (element.classList.contains('floating-card')) {
          anime({
            targets: element,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: 400
          });
        }
        
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  // Observe elements
  document.querySelectorAll('.feature-card, .service-card, .about-image, .about-content, .repartidores-content, .repartidores-image, .registro-card, .download-content, .download-phone, .contact-form, .floating-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}