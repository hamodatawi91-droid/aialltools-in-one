import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, SlidersHorizontal, Sparkles, LayoutGrid, DollarSign, GraduationCap } from 'lucide-react';
import { TOOLS, CATEGORIES } from './toolsData';

export default function AiAllToolsDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pricingFilter, setPricingFilter] = useState('all');

  // محرك البحث والتصفية الذكي
  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesPricing = pricingFilter === 'all' || tool.pricing === pricingFilter;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchQuery, selectedCategory, pricingFilter]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 font-sans selection:bg-purple-600 selection:text-white" dir="rtl">
      
      {/* هيدر الموقع الفاخر */}
      <header className="border-b border-gray-800 bg-[#0F1524] sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-purple-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
                Aialltools in one
              </h1>
              <p className="text-xs text-gray-400 font-medium">المحرك والدليل الشامل لأدوات الذكاء الاصطناعي</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> تحديث تلقائي 2026</span>
            <span className="bg-purple-600/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-400 font-bold">النسخة الاحترافية النهائية</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* مساحة إعلانية علوية مثبتة */}
        <div className="mb-10 p-4 bg-[#121B2E] border border-dashed border-purple-500/30 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-purple-500/60 transition-all cursor-pointer">
          <span className="text-[10px] text-purple-400 uppercase tracking-widest mb-1 font-bold">★ مساحة راعية متميزة ★</span>
          <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">هل تملك أداة ذكاء اصطناعي جديدة؟ اعلن هنا لتصل لآلاف الزوار يومياً</h3>
          <p className="text-xs text-gray-400 mt-1">اضغط للتواصل معنا وحجز مساحتك الإعلانية</p>
        </div>

        {/* شريط البحث وفلاتر التحكم */}
        <div className="bg-[#0F1524] border border-gray-800 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            <div className="relative lg:col-span-2">
              <Search className="absolute right-4 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="ابحث عن أداة أو وظيفة معينة (مثال: فاشن، مسح خلفية، برومبت، فيديو، شورتس)..."
                className="w-full bg-[#151D30] border border-gray-700/60 rounded-xl pr-12 pl-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white transition-all placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 bg-[#151D30] border border-gray-700/60 rounded-xl px-3 py-1.5">
              <SlidersHorizontal className="w-4 h-4 text-gray-400 shrink-0" />
              <select 
                className="bg-transparent w-full text-sm text-gray-300 focus:outline-none cursor-pointer"
                value={pricingFilter}
                onChange={(e) => setPricingFilter(e.target.value)}
              >
                <option value="all" className="bg-[#151D30]">كل خيارات التسعير</option>
                <option value="free" className="bg-[#151D30]">مجاني بالكامل (100% Free)</option>
                <option value="freemium" className="bg-[#151D30]">خيارين (Freemium)</option>
              </select>
            </div>

          </div>

          {/* فلاتر الأقسام */}
          <div className="flex flex-wrap gap-2 mt-6 border-t border-gray-800 pt-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20 font-bold transform scale-105'
                    : 'bg-[#151D30] text-gray-400 hover:bg-[#1A243C] hover:text-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* قاموس مصطلحات حركات الكاميرا السينمائية */}
        <div className="bg-[#0F1524] border border-gray-800 rounded-2xl p-6 mb-8">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
            <GraduationCap className="w-5 h-5 text-purple-400" /> أكاديمية المنصة: مصطلحات حركة الكاميرا السينمائية (اضغط للنسخ للبرومبت)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "Horizontal Panning", desc: "مسح أفقي يمين/يسار" },
              { name: "Camera Tilting", desc: "تحريك رأسي فوق/تحت" },
              { name: "Dolly In / Out", desc: "تقريب/إبعاد الكاميرا كاملة" },
              { name: "360-Degree Orbit", desc: "دوران مداري حول الهدف" },
              { name: "Side Tracking", desc: "تتبع الهدف من الجانب" },
              { name: "Aerial Drone Shot", desc: "لقطة جوية واسعة جداً" }
            ].map((cam, idx) => (
              <div key={idx} className="bg-[#151D30] border border-gray-800 p-3 rounded-xl text-center group hover:border-purple-500/30 transition-all cursor-pointer" onClick={() => navigator.clipboard.writeText(cam.name)}>
                <p className="text-[11px] font-mono text-purple-400 font-bold group-hover:text-purple-300">{cam.name}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{cam.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* عدد النتائج */}
        <div className="mb-6 px-2">
          <p className="text-sm text-gray-400">
            عدد الأدوات المتاحة: <span className="text-purple-400 font-bold">{filteredTools.length}</span> أداة
          </p>
        </div>

        {/* شبكة عرض بطاقات الأدوات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div 
              key={tool.id} 
              className="bg-[#0F1524] border border-gray-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${tool.pricing === 'free' ? 'from-green-500 to-emerald-400' : 'from-purple-500 to-indigo-500'}`} />

              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-md font-bold text-white group-hover:text-purple-400 transition-colors">
                    {tool.name}
                  </h3>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide ${
                    tool.pricing === 'free' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}>
                    {tool.badge}
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-6 text-justify">
                  {tool.description}
                </p>
              </div>

              <div className="border-t border-gray-800/60 pt-4 flex items-center justify-between mt-auto">
                <span className="text-[10px] text-gray-500 font-medium">
                  {tool.type === 'internal' ? '⚙️ أداة مدمجة بالموقع' : '🌐 رابط زيارة موقع'}
                </span>
                
                <a
                  href={tool.url}
                  target={tool.type === 'internal' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    tool.type === 'internal'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 shadow-md'
                      : 'bg-[#151D30] text-gray-300 hover:bg-[#1A243C] border border-gray-700/50'
                  }`}
                >
                  {tool.type === 'internal' ? 'شغّل الأداة هنا' : 'زيارة الموقع'}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* رسالة عدم وجود نتائج */}
        {filteredTools.length === 0 && (
          <div className="text-center py-20 bg-[#0F1524] rounded-2xl border border-gray-800">
            <LayoutGrid className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-sm">لا توجد أدوات تطابق خيارات البحث الحالية.</p>
          </div>
        )}

        {/* مساحة الإعلانات للتسييل المالي */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#0F1524] to-[#131C32] border border-gray-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-400" /> مساحة إعلانات Google AdSense التلقائية
            </h4>
            <p className="text-xs text-gray-400 mt-1">هنا تتدفق الأرباح الصافية للمنصة بناءً على عدد مرات ظهور ونقر الزوار.</p>
          </div>
          <div className="bg-[#1A243C] px-6 py-3 rounded-xl border border-gray-700 text-[10px] text-gray-500 font-mono select-none tracking-widest">
            SPONSORED ADS ZONE
          </div>
        </div>

      </main>

      <footer className="border-t border-gray-800 bg-[#0F1524] mt-20 py-8 text-center text-xs text-gray-500">
        <p>© 2026 جميع الحقوق محفوظة لمنصة <span className="text-gray-300 font-bold">Aialltools in one</span></p>
      </footer>

    </div>
  );
}
