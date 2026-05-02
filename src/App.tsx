/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Map, 
  Hand, 
  ShieldCheck, 
  UserCircle, 
  ClipboardList, 
  BookOpen, 
  LogOut, 
  ChevronRight, 
  Info,
  Star,
  Activity,
  Award,
  Users,
  CheckSquare,
  Download
} from 'lucide-react';
import { meridians } from './data/meridians';
import { techniques } from './data/techniques';
import { principles } from './data/principles';
import { caseStudies } from './data/cases';
import { experts } from './data/experts';
import { dailyQuizzes } from './data/quizzes';
import { getLocalState, saveLocalState, validateLogin } from './lib/storage';
import { AppState, User, Role, ScoreRecord } from './types';

export default function App() {
  const [state, setState] = useState<AppState & { users: User[] }>(() => {
    const initialState = getLocalState();
    // Migration for Yenne
    if (initialState.users) {
      initialState.users = initialState.users.map(u => 
        u.id === 'manager' && u.name === '张主管' ? { ...u, name: 'Yenne' } : u
      );
      if (initialState.currentUser?.id === 'manager' && initialState.currentUser.name === '张主管') {
        initialState.currentUser.name = 'Yenne';
      }

      // Migration for Wing
      const hasWing = initialState.users.some(u => u.id === 'wing');
      if (!hasWing) {
        initialState.users.push({ id: 'wing', name: 'Wing', role: 'student', password: 'Wing', quizHistory: [] });
      }
    }
    return initialState;
  });
  const [activeTab, setActiveTab] = useState('home');
  const [loginId, setLoginId] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  useEffect(() => {
    saveLocalState(state);
  }, [state]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = validateLogin(state.users, loginId, loginPass);
    if (user) {
      setState(prev => ({ ...prev, currentUser: user }));
      setLoginError('');
    } else {
      setLoginError('账号或密码错误');
    }
  };

  const handleLogout = () => {
    setState(prev => ({ ...prev, currentUser: null }));
    setActiveTab('home');
  };

  if (!state.currentUser) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 font-sans text-gray-200">
        <div className="max-w-md w-full bg-panel rounded-3xl shadow-2xl p-8 border border-accent-border">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 bg-gold/10 rounded-full mb-4 border border-gold/30">
              <Hand className="w-12 h-12 text-gold" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-white">圣手学堂</h1>
            <p className="text-gray-400 mt-2 text-sm tracking-widest uppercase opacity-60">Sage Hand Academy</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">账号 (ID)</label>
              <input 
                type="text" 
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-accent-border rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all text-white"
                placeholder="请输入用户名"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">密码</label>
              <input 
                type="password" 
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-accent-border rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all text-white"
                placeholder="请输入密码"
                required
              />
            </div>
            {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}
            <button 
              type="submit"
              className="w-full bg-gold hover:bg-gold/90 text-black font-bold py-3 rounded-xl transition-all shadow-lg shadow-gold/10 uppercase tracking-widest"
            >
              登 录
            </button>
          </form>
          
          <div className="mt-8 text-center text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
            <p>基于沁中医思想开发</p>
          </div>
        </div>
      </div>
    );
  }

  const NavItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 ${
        activeTab === id ? 'text-gold bg-gold/10 scale-105 border border-gold/20' : 'text-gray-500 hover:text-gray-300'
      }`}
    >
      <Icon size={20} className={activeTab === id ? 'animate-pulse' : ''} />
      <span className="text-[9px] mt-1 font-medium tracking-tighter">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 flex flex-col max-w-lg mx-auto shadow-2xl relative overflow-hidden border-x border-accent-border">
      {/* Header */}
      <header className="bg-panel border-b border-accent-border p-4 sticky top-0 z-50 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-gold p-2 rounded-lg">
            <Hand className="text-black" size={18} />
          </div>
          <div>
            <h2 className="font-serif font-bold text-lg leading-tight text-white">圣手学堂</h2>
            <p className="text-[10px] text-gold/60 uppercase tracking-widest">Experts Edition</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-300">{state.currentUser.name}</p>
            <p className="text-[8px] text-gold/40 uppercase tracking-tighter">{state.currentUser.role === 'manager' ? '管理员' : '内训学员'}</p>
          </div>
          <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeModule user={state.currentUser} />}
          {activeTab === 'meridians' && <MeridiansModule />}
          {activeTab === 'techniques' && <TechniquesModule />}
          {activeTab === 'principles' && <PrinciplesModule />}
          {activeTab === 'cases' && <CasesModule />}
          {activeTab === 'experts' && <ExpertsModule />}
          {activeTab === 'quiz' && <QuizModule 
            user={state.currentUser} 
            onComplete={(score) => {
              const history = { date: new Date().toLocaleDateString(), score, completed: true };
              setState(prev => {
                const newUsers = prev.users.map(u => 
                  u.id === state.currentUser?.id 
                    ? { ...u, quizHistory: [...(u.quizHistory || []), history] }
                    : u
                );
                return { ...prev, users: newUsers, currentUser: newUsers.find(u => u.id === state.currentUser?.id) || null };
              });
            }} 
          />}
          {activeTab === 'safety' && <SafetyModule />}
          {activeTab === 'growth' && <GrowthModule 
            user={state.currentUser} 
            records={state.records} 
            users={state.users}
            onAddRecord={(rec) => setState(prev => ({...prev, records: [...prev.records, rec]}))}
            onUpdateUsers={(users) => setState(prev => {
              const updatedCurrentUser = users.find(u => u.id === state.currentUser?.id) || prev.currentUser;
              return { ...prev, users, currentUser: updatedCurrentUser };
            })}
            setConfirmDeleteId={setConfirmDeleteId}
          />}
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-panel/90 backdrop-blur-xl border-t border-accent-border px-2 py-3 grid grid-cols-5 sm:grid-cols-9 gap-1 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.5)] overflow-x-auto scrollbar-hide">
        <NavItem id="home" icon={Home} label="首页" />
        <NavItem id="meridians" icon={Map} label="经络" />
        <NavItem id="techniques" icon={Hand} label="手法" />
        <NavItem id="principles" icon={BookOpen} label="治则" />
        <NavItem id="cases" icon={ClipboardList} label="病历" />
        <NavItem id="experts" icon={Star} label="名家" />
        <NavItem id="quiz" icon={CheckSquare} label="考核" />
        <NavItem id="safety" icon={ShieldCheck} label="安全" />
        <NavItem id="growth" icon={UserCircle} label={state.currentUser.role === 'manager' ? '管理' : '成长'} />
      </nav>

      {/* Custom Confirmation Modal */}
      <AnimatePresence>
        {confirmDeleteId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-panel border border-accent-border w-full max-w-xs p-6 rounded-3xl shadow-2xl"
            >
              <h3 className="text-xl font-serif font-bold text-white mb-2">撤销授权确认</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                确定要撤销该成员的系统访问授权吗？此操作将立即生效，该成员将无法再次登录。
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    const targetUser = state.users.find(u => u.id === confirmDeleteId);
                    const userName = targetUser?.name || confirmDeleteId;
                    const filteredUsers = state.users.filter(u => u.id !== confirmDeleteId);
                    setState(prev => ({ ...prev, users: filteredUsers }));
                    setConfirmDeleteId(null);
                    setTimeout(() => alert(`成员 ${userName} 的授权已成功撤销。`), 100);
                  }}
                  className="flex-1 bg-red-500 text-white py-2 rounded-xl text-xs font-bold"
                >
                  确认撤销
                </button>
                <button 
                  onClick={() => setConfirmDeleteId(null)}
                  className="flex-1 bg-white/5 border border-white/10 text-gray-400 py-2 rounded-xl text-xs font-bold"
                >
                  取消
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Modules ---

function HomeModule({ user }: { user: User }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6"
    >
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#050505] rounded-3xl p-8 text-white mb-8 shadow-2xl relative overflow-hidden border border-accent-border">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <h3 className="text-gray-500 text-xs mb-2 uppercase tracking-widest">上午好，</h3>
        <h1 className="text-3xl font-serif font-bold mb-6 text-white">{user.name} 师傅</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-gray-500 text-[9px] mb-1 uppercase tracking-tighter">学习进度</p>
            <p className="text-xl font-bold font-mono text-gold">85%</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-gray-500 text-[9px] mb-1 uppercase tracking-tighter">活跃天数</p>
            <p className="text-xl font-bold font-mono text-gold">24</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="text-gold" size={18} />
          <h4 className="font-bold text-gray-400 uppercase tracking-[0.2em] text-[10px]">今日修习</h4>
        </div>
        <div className="bg-panel border border-accent-border rounded-3xl p-6 shadow-sm">
          <p className="text-gray-200 font-serif text-lg leading-relaxed italic mb-4">
            “手摸心会，意气体用；以心为治，手到病除。”
          </p>
          <div className="h-0.5 w-10 bg-gold/50 rounded-full mb-4"></div>
          <p className="text-gray-500 text-[11px] leading-relaxed">致力于培养“通经络、准取穴、精手法、能辨证、知禁忌”的顶级推拿师。</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-gray-400 uppercase tracking-[0.2em] text-[10px]">学术支柱</h4>
        <div className="grid grid-cols-1 gap-2">
          {experts.map(e => (
            <div key={e.name} className="flex items-center gap-3 bg-panel p-4 rounded-2xl border border-accent-border shadow-sm hover:border-gold/30 transition-all cursor-pointer group">
              <div className="bg-black/40 w-10 h-10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors border border-gold/10">
                <Star size={18} />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-200">{e.name} 讲堂</p>
                <p className="text-[10px] text-gray-500">{e.motto.slice(0, 15)}...</p>
              </div>
              <ChevronRight className="ml-auto text-gray-700 group-hover:text-gold transition-colors" size={16} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MeridiansModule() {
  const [selected, setSelected] = useState(meridians[0]);
  const [activePointImg, setActivePointImg] = useState<string | null>(null);
  
  return (
    <motion.div className="p-4 overflow-x-hidden">
      <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2 text-white">
        <Map className="text-gold" size={20} /> 十四经络高清示踪
      </h3>
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-4">
        {meridians.map(m => (
          <button
            key={m.id}
            onClick={() => setSelected(m)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selected.id === m.id ? 'bg-gold text-black shadow-lg' : 'bg-panel border border-accent-border text-gray-500'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      <motion.div 
        key={selected.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-panel rounded-3xl p-6 shadow-xl border border-accent-border overflow-hidden relative"
      >
        <div className="mb-6">
          <div className="w-full aspect-[4/5] bg-black/60 border border-accent-border rounded-2xl mb-6 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* ANATOMICAL BACKGROUND OVERLAY */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
               <Users size={300} className="text-gray-500" />
            </div>
            
            {/* SCANNING ANIMATION EFFECT */}
            <motion.div 
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-gold/40 blur-sm z-20" 
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
            
            {/* IMPROVED ARTISTIC MERIDIAN SVG */}
            <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full p-10 z-0">
               <defs>
                 <linearGradient id="meridian-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                   <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
                   <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                 </linearGradient>
                 <filter id="glow">
                   <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                   <feMerge>
                     <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                   </feMerge>
                 </filter>
               </defs>
               
               {/* Human Silhouette Guide - Subtle Background */}
               <path d="M50 5 C55 5, 60 10, 60 18 C60 25, 55 28, 50 28 C45 28, 40 25, 40 18 C40 10, 45 5, 50 5 M40 28 C30 30, 25 35, 20 45 L15 100 M60 28 C70 30, 75 35, 80 45 L85 100 M40 50 L40 115 M60 50 L60 115" stroke="white" strokeWidth="0.1" fill="none" opacity="0.15" />

               <motion.path 
                 d={
                   selected.id === 'LU' ? "M58 35 L62 34 L68 38 L75 55 L78 85 L85 110" : 
                   selected.id === 'LI' ? "M85 110 L80 85 L75 55 L68 35 L55 20 L58 10" : 
                   selected.id === 'ST' ? "M55 10 L55 35 C65 45, 65 75, 60 115" : 
                   selected.id === 'SP' ? "M40 115 L43 85 C48 65, 48 45, 42 30" : 
                   selected.id === 'HT' ? "M60 40 C63 55, 68 85, 70 110" : 
                   selected.id === 'SI' ? "M90 110 L85 85 C80 65, 72 55, 65 40" : 
                   selected.id === 'BL' ? "M50 10 L50 25 L45 45 L42 115" : 
                   selected.id === 'KI' ? "M42 115 L44 95 L48 75 L48 35" : 
                   selected.id === 'PC' ? "M55 42 L65 65 L72 85 L78 105" : 
                   selected.id === 'TE' ? "M82 105 L72 82 L65 62 L58 42 L52 25" : 
                   selected.id === 'GB' ? "M58 8 C68 15, 65 35, 75 55 L78 115" : 
                   selected.id === 'LR' ? "M45 115 L48 95 L52 75 L52 45 L50 35" : 
                   "M50 10 L50 110"
                 } 
                 stroke="url(#meridian-grad)" 
                 strokeWidth="1.5" 
                 fill="none"
                 strokeLinecap="round"
                 filter="url(#glow)"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
               
               {selected.points.slice(0, 11).map((p, i) => {
                 const total = Math.min(selected.points.length, 11);
                 const step = i / (total - 1);
                 
                 // Points positioned according to anatomical logic for LU specifically
                 let cx = 40;
                 let cy = 35 + step * 75;

                 if (selected.id === 'LU') {
                    // Start at chest, move to outer arm, then down to thumb
                    if (step < 0.2) { cx = 58 + step * 20; cy = 35; }
                    else if (step < 0.5) { cx = 62 + (step-0.2)*40; cy = 34 + (step-0.2)*60; }
                    else { cx = 75 + (step-0.5)*25; cy = 55 + (step-0.5)*110; }
                 } else {
                    cx = 40 + (Math.sin(i * 1.5) * 5);
                 }

                 return (
                   <motion.circle 
                     key={p.name + i}
                     cx={cx} 
                     cy={cy} 
                     r="1" 
                     fill="#D4AF37"
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ delay: 1 + i * 0.05 }}
                   />
                 );
               })}
            </svg>

            <div className="absolute bottom-4 right-4 z-20">
               <div className="flex flex-col items-end">
                  <span className="text-gold/60 text-[8px] font-mono">X-RAY MODE</span>
                  <div className="w-10 h-1 bg-gold/20 rounded-full mt-1 overflow-hidden">
                     <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2 }}
                        className="w-full h-full bg-gold" 
                     />
                  </div>
               </div>
            </div>
          </div>

          <div className="flex gap-2 items-center mb-6">
             <div className="h-[1px] flex-1 bg-accent-border"></div>
             <span className="text-gold/40 text-[9px] uppercase tracking-widest font-bold">详情参数</span>
             <div className="h-[1px] flex-1 bg-accent-border"></div>
          </div>

          <h4 className="text-gold text-[10px] font-bold uppercase mb-2 tracking-[0.2em] opacity-80">白话循行</h4>
          <p className="text-gray-300 leading-relaxed text-sm font-medium border-l-2 border-accent-border pl-4">{selected.route}</p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-gold text-[9px] font-bold uppercase mb-2 tracking-[0.2em] opacity-80">核心穴位定位</h4>
          {selected.points.map(p => (
            <div key={p.name} className="border border-accent-border/50 bg-black/30 p-4 rounded-2xl hover:border-gold/20 transition-all">
              <div className="flex justify-between items-start mb-3">
                <p className="font-bold text-white text-sm">{p.name}</p>
                <div 
                  onClick={() => p.imageUrl && setActivePointImg(p.imageUrl)}
                  className={`w-12 h-12 bg-black/60 border border-accent-border rounded shadow-inner flex items-center justify-center text-[8px] text-gold/40 text-center leading-tighter p-1 group cursor-pointer ${p.imageUrl ? 'hover:border-gold/30' : 'opacity-20 cursor-not-allowed'}`}
                >
                  <span className="group-hover:text-gold transition-colors">定位图<br/>Point Map</span>
                </div>
              </div>
              <p className="text-gray-400 text-[10px] leading-tight mb-2"><span className="text-gold/60">定位：</span>{p.location}</p>
              <p className="text-gray-400 text-[10px] leading-tight"><span className="text-gold/60">主治：</span>{p.indication}</p>
              {p.operation && <p className="mt-2 text-[10px] p-2 bg-gold/5 rounded text-gold italic border border-gold/10">实操：{p.operation}</p>}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Point Image Modal */}
      <AnimatePresence>
        {activePointImg && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setActivePointImg(null)}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-panel border border-accent-border w-full max-w-sm p-4 rounded-3xl shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActivePointImg(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                关闭
              </button>
              <h3 className="text-lg font-serif font-bold text-white mb-4">穴位定位参考图</h3>
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-accent-border aspect-square flex items-center justify-center">
                <img src={activePointImg} alt="定位图" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="mt-4 text-[10px] text-gray-500 text-center italic">
                提示：图片仅供解剖参考，实操请结合老师指导。
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TechniquesModule() {
  const [cat, setCat] = useState<'放松类' | '温通类'>('放松类');
  return (
    <motion.div className="p-4">
      <div className="flex gap-4 mb-6 sticky top-0 bg-dark-bg pt-2 pb-4 z-10 border-b border-accent-border">
        <button onClick={() => setCat('放松类')} className={`flex-1 py-3 rounded-2xl font-bold transition-all text-sm ${cat === '放松类' ? 'bg-gold/10 text-gold shadow-inner border border-gold/20' : 'text-gray-500'}`}>放松类手法</button>
        <button onClick={() => setCat('温通类')} className={`flex-1 py-3 rounded-2xl font-bold transition-all text-sm ${cat === '温通类' ? 'bg-gold/10 text-gold shadow-inner border border-gold/20' : 'text-gray-500'}`}>温通类手法</button>
      </div>
      
      <div className="space-y-4">
        {techniques.filter(t => t.category === cat).map(t => (
          <div key={t.id} className="bg-panel rounded-3xl p-6 shadow-xl border border-accent-border hover:border-gold/30 transition-all group">
            <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">{t.name}</h4>
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="bg-gold/10 p-2 rounded-lg h-fit text-gold border border-gold/20"><Info size={14} /></div>
                <div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">手法要事</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{t.description}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-green-950/30 p-2 rounded-lg h-fit text-green-500 border border-green-900/50"><Activity size={14} /></div>
                <div>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">主治功效</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{t.effect}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PrinciplesModule() {
  return (
    <motion.div className="p-4">
      <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2 text-white">
        <BookOpen className="text-gold" size={20} /> 十大治疗原则
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {principles.map(p => (
          <div key={p.id} className="bg-panel p-6 rounded-3xl shadow-xl border border-accent-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Award size={64} className="text-gold" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-gold mb-2">{p.name}</h4>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">{p.concept}</p>
            <div className="flex flex-wrap gap-2">
              {p.techniques.map(t => (
                <span key={t} className="bg-black/50 text-gray-400 text-[10px] px-3 py-1 rounded-full border border-accent-border font-medium">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CasesModule() {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);
  return (
    <motion.div className="p-4">
      <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2 text-white">
        <ClipboardList className="text-gold" size={20} /> 临床实战方案库
      </h3>
      
      <div className="space-y-3 mb-6">
        {caseStudies.map(c => (
          <button 
            key={c.id} 
            onClick={() => setSelectedCase(c)}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${selectedCase.id === c.id ? 'bg-gold border-gold text-black shadow-lg' : 'bg-panel border-accent-border text-gray-500 hover:border-gold/30'}`}
          >
            <div className="text-left">
              <p className={`text-[9px] uppercase tracking-widest ${selectedCase.id === c.id ? 'text-black/60' : 'text-gray-500'}`}>{c.category}</p>
              <p className="font-bold text-sm">{c.name}</p>
            </div>
            <ChevronRight size={16} className={selectedCase.id === c.id ? 'text-black' : 'text-gray-700'} />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedCase.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-panel border border-gold/20 rounded-3xl p-8 text-gray-200 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 opacity-5 text-white">
             <ClipboardList size={120} />
          </div>
          <div className="mb-6 relative z-10">
            <h4 className="text-gold text-[10px] font-bold uppercase mb-2 tracking-widest opacity-60">辨证诊断</h4>
            <p className="text-lg leading-snug font-serif text-white">{selectedCase.diagnosis}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-6 relative z-10">
            <div>
              <h4 className="text-gold text-[10px] font-bold uppercase mb-2 tracking-widest opacity-60">治法</h4>
              <p className="text-sm text-gray-300">{selectedCase.treatment}</p>
            </div>
            <div>
              <h4 className="text-gold text-[10px] font-bold uppercase mb-2 tracking-widest opacity-60">核心穴位</h4>
              <div className="flex flex-wrap gap-1">
                {selectedCase.points.map(p => <span key={p} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] text-gray-300">{p}</span>)}
              </div>
            </div>
          </div>
          
          <div className="mb-6 relative z-10">
            <h4 className="text-gold text-[10px] font-bold uppercase mb-2 tracking-widest opacity-60">推荐手法</h4>
            <div className="flex flex-wrap gap-2">
              {selectedCase.techniques.map(t => <span key={t} className="border border-gold/30 bg-gold/5 px-3 py-1 rounded-full text-[10px] text-gold">{t}</span>)}
            </div>
          </div>

          <div className="pt-6 border-t border-accent-border relative z-10">
            <h4 className="text-gold text-[10px] font-bold uppercase mb-2 tracking-widest opacity-60">操作要领</h4>
            <p className="text-xs italic text-gray-400 leading-relaxed bg-black/30 p-3 rounded-xl border border-accent-border">{selectedCase.operation}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function SafetyModule() {
  return (
    <motion.div className="p-4 space-y-6">
      <div className="bg-red-950/20 border border-red-900/50 rounded-3xl p-8 mb-4">
        <ShieldCheck className="text-red-500 mb-6" size={40} />
        <h3 className="text-2xl font-serif font-bold text-red-100 mb-4 tracking-tight">绝对禁忌症</h3>
        <ul className="space-y-4">
          {['骨折、脱位、骨结核、骨肿瘤', '正在抗凝治疗或有出血性疾病', '严重心脑血管疾病急性期', '妊娠期 (特别是腹部及腰骶部)', '局部皮肤破损、感染、重度烧伤', '急性传染病、精神病不能配合者'].map(t => (
            <li key={t} className="flex gap-3 text-red-200/70 text-sm">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-panel border border-accent-border rounded-3xl p-8 shadow-xl">
        <h3 className="text-xl font-serif font-bold text-white mb-6">操作安全红线</h3>
        <div className="space-y-6">
          <div className="border-l-2 border-gold/30 pl-4">
            <p className="font-bold text-gold text-sm mb-1 uppercase tracking-widest">1. 得气为度</p>
            <p className="text-xs text-gray-400 leading-relaxed">手法力度以患者能耐受为上限，切记因暴力导致二次损伤。</p>
          </div>
          <div className="border-l-2 border-gold/30 pl-4">
            <p className="font-bold text-gold text-sm mb-1 uppercase tracking-widest">2. 治筋喜柔</p>
            <p className="text-xs text-gray-400 leading-relaxed">筋伤处理强调柔和渗透，由浅入深，忌突发爆力。</p>
          </div>
          <div className="border-l-2 border-gold/30 pl-4">
            <p className="font-bold text-gold text-sm mb-1 uppercase tracking-widest">3. 触诊为先</p>
            <p className="text-xs text-gray-400 leading-relaxed">手摸心会，明确解剖结构后再行治疗动作。</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExpertsModule() {
  return (
    <motion.div className="p-4 space-y-6">
      <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2 text-white">
        <Star className="text-gold" size={20} /> 历代名家学术精要
      </h3>
      {experts.map((e, idx) => (
        <div key={idx} className="bg-panel rounded-3xl p-8 border border-accent-border shadow-xl relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-5 text-gold group-hover:scale-110 transition-transform">
             <Star size={100} />
          </div>
          <div className="flex items-end gap-3 mb-6 relative z-10">
            <h4 className="text-2xl font-serif font-bold text-gold">{e.name}</h4>
            <span className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest">{e.title}</span>
          </div>
          <p className="bg-black/30 text-gray-200 font-serif italic p-5 rounded-2xl mb-8 relative border-l-2 border-gold shadow-inner leading-relaxed z-10">
            “{e.motto}”
          </p>
          <div className="space-y-4 relative z-10">
            <p className="text-[9px] font-bold text-gold/40 uppercase tracking-[0.2em]">核心学术思想</p>
            {e.concepts.map((c, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="bg-gold/10 px-2 py-0.5 rounded text-[8px] font-bold text-gold mt-1 border border-gold/20">IDEA</div>
                <p className="text-sm text-gray-400 leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function QuizModule({ user, onComplete }: { user: User, onComplete: (score: number) => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const handleAnswer = () => {
    if (selectedOpt === dailyQuizzes[currentIdx].correct) {
      setScore(s => s + 10);
    }
    
    if (currentIdx < dailyQuizzes.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOpt(null);
    } else {
      setFinished(true);
      onComplete(score + (selectedOpt === dailyQuizzes[currentIdx].correct ? 10 : 0));
    }
  };

  if (finished) {
    return (
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-8 text-center bg-panel rounded-3xl m-4 border border-gold/20 shadow-2xl">
        <Award className="text-gold mx-auto mb-4" size={64} />
        <h2 className="text-2xl font-serif font-bold text-white mb-2">考核完成</h2>
        <p className="text-gray-400 mb-6">您今日得分</p>
        <div className="text-6xl font-mono font-bold text-gold mb-8">{score}</div>
        <p className="text-xs text-gray-500 italic">“学而时习之，不亦说乎。”</p>
      </motion.div>
    );
  }

  const q = dailyQuizzes[currentIdx];

  return (
    <motion.div className="p-4 max-w-lg mx-auto">
      <div className="bg-panel border border-accent-border rounded-3xl p-8 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <span className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">每日考核 {currentIdx + 1}/{dailyQuizzes.length}</span>
          <span className="text-xs font-mono text-gray-500">SCORE: {score}</span>
        </div>
        <h3 className="text-xl font-serif text-white mb-8 leading-relaxed">{q.text}</h3>
        <div className="space-y-3 mb-10">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelectedOpt(i)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${selectedOpt === i ? 'bg-gold/10 border-gold text-gold ring-1 ring-gold/50' : 'bg-black/30 border-accent-border text-gray-400 hover:border-gold/30'}`}
            >
              <div className="flex items-center">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 border text-[10px] font-bold ${selectedOpt === i ? 'bg-gold text-black border-gold' : 'border-gray-700'}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </div>
            </button>
          ))}
        </div>
        <button
          disabled={selectedOpt === null}
          onClick={handleAnswer}
          className="w-full bg-gold text-black font-bold py-4 rounded-xl shadow-lg disabled:opacity-30 transition-opacity uppercase tracking-widest text-xs"
        >
          {currentIdx === dailyQuizzes.length - 1 ? '提交考卷' : '下一题'}
        </button>
      </div>
    </motion.div>
  );
}

function GrowthModule({ user, records, users, onAddRecord, onUpdateUsers, setConfirmDeleteId }: { user: User, records: ScoreRecord[], users: User[], onAddRecord: (rec: ScoreRecord) => void, onUpdateUsers: (users: User[]) => void, setConfirmDeleteId: (id: string | null) => void }) {
  const [score, setScore] = useState('85');
  const [comments, setComments] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState(users.find(u => u.role === 'student')?.id || '');
  const [newUserName, setNewUserName] = useState('');
  const [newUserPass, setNewUserPass] = useState('111');
  const [newUserRole, setNewUserRole] = useState<Role>('student');
  const [editingManager, setEditingManager] = useState(false);
  const [managerName, setManagerName] = useState(user.name);

  const students = users.filter(u => u.role === 'student');

  const handleUpdateManagerName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!managerName.trim()) return;
    
    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, name: managerName } : u
    );
    onUpdateUsers(updatedUsers);
    setEditingManager(false);
    alert('主管姓名已更新');
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName) return;
    const newUser: User = {
      id: `user_${Date.now()}`,
      name: newUserName,
      role: newUserRole,
      password: newUserPass,
      quizHistory: []
    };
    onUpdateUsers([...users, newUser]);
    setNewUserName('');
    alert('账号创建成功');
  };

  const handleDeleteUser = (id: string) => {
    if (user.role !== 'manager') {
      alert('权限不足：只有管理员可以执行此操作。');
      return;
    }
    
    // Use custom modal instead of window.confirm
    setConfirmDeleteId(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId) return;
    onAddRecord({
      studentId: selectedStudentId,
      date: new Date().toLocaleDateString(),
      score: parseInt(score),
      comments: comments,
      assessor: user.name
    });
    setComments('');
    alert('评价已录入');
  };

  if (user.role === 'manager') {
    return (
      <div className="p-4 space-y-8">
        <section>
          <h3 className="text-lg font-serif font-bold mb-4 text-white flex items-center gap-2">
            <Users className="text-gold" size={20} /> 账号体系维护
          </h3>
          
          {/* Manager Name Update Section */}
          <div className="bg-panel p-6 rounded-3xl border border-accent-border mb-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Star size={64} className="text-gold" />
            </div>
            <p className="text-[10px] text-gold/40 uppercase tracking-widest mb-3 font-bold">当前登录管理员</p>
            {editingManager ? (
              <form onSubmit={handleUpdateManagerName} className="flex gap-2">
                <input 
                   type="text" 
                   value={managerName}
                   onChange={e => setManagerName(e.target.value)}
                   className="flex-1 bg-black/50 border border-accent-border rounded-xl px-4 py-2 text-sm text-white focus:ring-1 focus:ring-gold outline-none"
                   autoFocus
                />
                <button type="submit" className="bg-gold text-black px-4 py-2 rounded-xl text-xs font-bold">更新</button>
                <button type="button" onClick={() => setEditingManager(false)} className="bg-white/5 text-gray-500 px-4 py-2 rounded-xl text-xs font-bold border border-white/10">取消</button>
              </form>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold text-white tracking-widest">{user.name}</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      const docContent = `
# 沁中医·临床圣手内训系统 产品文档
## 系统概述
本系统基于沁中医核心思想开发，旨在传承中医精髓，辅助临床带教。

## 1. 核心经络 (十四经脉)
${meridians.map(m => `### ${m.name}\n${m.route}\n**核心穴位:** ${m.points.map(p => p.name).join('、')}`).join('\n\n')}

## 2. 临床病历集 (30例)
${caseStudies.map(c => `### ${c.name} (${c.category})\n**辩证:** ${c.diagnosis}\n**治则:** ${c.treatment}`).join('\n\n')}

## 3. 专业手法库
${techniques.map(t => `### ${t.name}\n${t.description}\n**功效:** ${t.effect}`).join('\n\n')}
                      `;
                      const blob = new Blob([docContent], { type: 'text/markdown' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = '沁中医内训系统_产品文档.md';
                      a.click();
                      alert('产品文档已生成并导出。');
                    }}
                    className="bg-white/5 border border-white/10 text-gray-400 px-4 py-1.5 rounded-full text-[10px] font-bold hover:bg-white/10 hover:text-white transition-all flex items-center gap-1"
                  >
                    <Download size={10} /> 导出文档
                  </button>
                  <button 
                    onClick={() => setEditingManager(true)}
                    className="bg-gold/10 border border-gold/30 text-gold px-4 py-1.5 rounded-full text-[10px] font-bold hover:bg-gold hover:text-black transition-all"
                  >
                    修改命名
                  </button>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAddUser} className="bg-panel p-6 rounded-3xl border border-accent-border mb-6 space-y-4 shadow-xl">
             <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 italic">新增受控访问账号</p>
             <div className="grid grid-cols-2 gap-3">
               <input 
                 type="text" 
                 placeholder="全名" 
                 value={newUserName} 
                 onChange={e => setNewUserName(e.target.value)}
                 className="bg-black/30 border border-accent-border rounded-xl p-3 text-sm text-white"
               />
               <select 
                 value={newUserRole} 
                 onChange={e => setNewUserRole(e.target.value as Role)}
                 className="bg-black/30 border border-accent-border rounded-xl p-3 text-sm text-white"
               >
                 <option value="student">内训学员</option>
                 <option value="manager">管理员</option>
               </select>
             </div>
             <button type="submit" className="w-full bg-gold/10 border border-gold/30 text-gold py-2 rounded-xl text-xs uppercase tracking-widest font-bold">新增访问授权</button>
          </form>

          <div className="space-y-2">
            {users.map(u => (
              <div key={u.id} className="flex items-center justify-between bg-black/20 p-3 rounded-xl border border-white/5">
                <div>
                  <p className="text-sm font-bold text-gray-200">{u.name}</p>
                  <p className="text-[9px] text-gray-500 uppercase">{u.id} · {u.role}</p>
                </div>
                {u.id !== 'manager' && (
                  <button 
                    onClick={() => handleDeleteUser(u.id)} 
                    className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-xl border border-red-500/30 transition-all text-[10px] font-bold"
                  >
                    撤销授权
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-serif font-bold mb-4 text-white">手法实操评分录入</h3>
          <form onSubmit={handleSubmit} className="bg-panel p-8 rounded-3xl shadow-xl space-y-6 border border-accent-border">
            <div>
              <label className="block text-[10px] font-bold text-gold/60 uppercase mb-3 tracking-widest">选择学员</label>
              <select 
                value={selectedStudentId} 
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="w-full bg-black/40 border border-accent-border rounded-xl p-4 text-sm focus:ring-1 focus:ring-gold outline-none text-white appearance-none"
              >
                {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gold/60 uppercase mb-3 tracking-widest">专业评分 (0-100)</label>
              <input 
                type="number" 
                value={score} 
                onChange={(e) => setScore(e.target.value)}
                className="w-full bg-black/40 border border-accent-border rounded-xl p-4 text-sm focus:ring-1 focus:ring-gold outline-none text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gold/60 uppercase mb-3 tracking-widest">导师点评 / 改进要领</label>
              <textarea 
                value={comments} 
                onChange={(e) => setComments(e.target.value)}
                rows={4}
                placeholder="请输入纠错要领..."
                className="w-full bg-black/40 border border-accent-border rounded-xl p-4 text-sm focus:ring-1 focus:ring-gold outline-none text-white resize-none"
              />
            </div>
            <button type="submit" className="w-full bg-gold text-black rounded-xl py-4 font-bold shadow-lg hover:bg-gold/90 transition-all uppercase tracking-widest text-xs">提交评分</button>
          </form>

          <div className="mt-12 space-y-4">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">最近考核记录</h4>
            {records.slice().reverse().map((r, i) => (
              <div key={i} className="bg-panel p-5 rounded-2xl border border-accent-border text-xs shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-gray-200">{users.find(u => u.id === r.studentId)?.name || '未知学员'}</span>
                  <span className="bg-black/50 border border-accent-border px-2 py-0.5 rounded text-[9px] text-gray-500 font-mono">{r.date}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold font-bold text-2xl font-mono">{r.score}</span>
                  <span className="text-gray-500 text-[9px] uppercase tracking-tighter">Experts Grade</span>
                </div>
                {r.comments && <p className="text-gray-400 italic text-[11px] bg-black/20 p-2 rounded border border-white/5">{r.comments}</p>}
                <p className="text-[9px] text-gold/40 mt-3 text-right">导师：{r.assessor}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  const myRecords = records.filter(r => r.studentId === user.id);
  const streak = user.quizHistory?.length || 0;

  return (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-br from-gold to-[#B8860B] rounded-3xl p-8 text-black shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <Award size={100} />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-1 opacity-70">我的成长档案</h3>
        <p className="text-3xl font-serif font-bold tracking-tight mb-8">匠心学徒 · LV.5</p>
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="bg-black/10 rounded-2xl p-4 backdrop-blur-md border border-white/20 text-center">
            <p className="text-[9px] font-bold opacity-60 mb-1 uppercase tracking-widest">综合考评</p>
            <p className="text-2xl font-bold font-mono">{myRecords.length > 0 ? (myRecords.reduce((acc, r) => acc + r.score, 0) / myRecords.length).toFixed(1) : '-'}</p>
          </div>
          <div className="bg-black/10 rounded-2xl p-4 backdrop-blur-md border border-white/20 text-center">
            <p className="text-[9px] font-bold opacity-60 mb-1 uppercase tracking-widest">考核霸榜</p>
            <p className="text-2xl font-bold font-mono">{streak} <span className="text-[10px]">天</span></p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-gray-400 uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 mb-6">
          <Award className="text-gold" size={16} /> 考评回溯
        </h4>
        {myRecords.length === 0 ? (
          <div className="bg-panel p-16 text-center rounded-3xl border border-accent-border">
            <p className="text-gray-500 text-xs italic tracking-widest">暂无导师评价记录，请练习精进。</p>
          </div>
        ) : (
          myRecords.slice().reverse().map((r, i) => (
            <div key={i} className="bg-panel p-8 rounded-3xl border border-accent-border shadow-xl hover:border-gold/20 transition-all group">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold font-mono text-gray-500 border border-accent-border px-2 py-1 rounded tracking-tighter">{r.date}</span>
                <span className="text-3xl font-bold text-gold font-mono group-hover:scale-110 transition-transform">{r.score} <span className="text-[9px] text-gray-500 font-normal uppercase">Pts</span></span>
              </div>
              <div className="bg-black/40 p-5 rounded-2xl mb-4 border border-white/5">
                <p className="text-xs text-gray-300 leading-relaxed italic">“{r.comments}”</p>
              </div>
              <p className="text-[9px] text-gold/40 text-right uppercase tracking-[0.2em]">由导师 {r.assessor} 鉴定</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

