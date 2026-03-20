
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Lock, LayoutDashboard, Users, Briefcase, Search, Bell } from 'lucide-react';

// --- SISTEMA DE SENHA ---
const Gatekeeper = ({ children }: { children: React.ReactNode }) => {
  const [senha, setSenha] = useState('');
  const [autorizado, setAutorizado] = useState(false);
  if (!autorizado) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <form onSubmit={(e) => { e.preventDefault(); if(senha === 'Workview2026') setAutorizado(true); }} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Workview Portal</h1>
          <input type="password" onChange={(e) => setSenha(e.target.value)} className="w-full px-4 py-3 border rounded-lg mb-4 text-center" placeholder="Senha" />
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all">Entrar</button>
        </form>
      </div>
    );
  }
  return <>{children}</>;
};

// --- COLOQUE O DESIGN DO AI STUDIO NESTE COMPONENTE ---
const MainDashboard = () => {
  return (
    // COLE AQUI APENAS O QUE ESTIVER DENTRO DO RETURN DO AI STUDIO
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
       {/* O código visual vai aqui */}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Gatekeeper>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Gatekeeper>
    </BrowserRouter>
  );
}