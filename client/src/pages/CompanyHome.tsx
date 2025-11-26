import { useState } from 'react';
import { useLocation } from 'wouter';
import { SidebarMenu } from '@/components/SidebarMenu';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Users, BarChart3, Zap, Target, Heart } from 'lucide-react';

export default function CompanyHome() {
  const [, setLocation] = useLocation();

  const menuItems = [
    {
      label: 'Busca e Contratação',
      icon: <Search size={20} />,
      onClick: () => setLocation('/company/recruitment'),
    },
    {
      label: 'EJ RH AI',
      icon: <BarChart3 size={20} />,
      onClick: () => setLocation('/company/rhia'),
    },
    {
      label: 'Voltar',
      icon: null,
      onClick: () => setLocation('/'),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarMenu items={menuItems} />

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-accent">
            EducaJovem - Plataforma Empresarial
          </h1>
          <p className="text-muted-foreground mt-2">
            Encontre talentos e gerencie sua equipe com inteligência artificial
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bem-vindo à EducaJovem
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A EducaJovem é uma plataforma inovadora que conecta empresas com talentos qualificados, 
              oferecendo soluções inteligentes de recrutamento e gestão de pessoas. Transformamos a forma 
              como você encontra, contrata e desenvolve sua equipe.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-background border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-bold mb-2">Acesso a Talentos</h3>
                <p className="text-sm text-muted-foreground">
                  Acesso a um banco de dados de profissionais qualificados e verificados
                </p>
              </Card>
              <Card className="p-6 bg-background border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-bold mb-2">IA Inteligente</h3>
                <p className="text-sm text-muted-foreground">
                  Análise automática de candidatos e recomendações personalizadas
                </p>
              </Card>
              <Card className="p-6 bg-background border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-bold mb-2">Gestão Completa</h3>
                <p className="text-sm text-muted-foreground">
                  Monitore desempenho e desenvolva sua equipe com dados em tempo real
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nossas Funcionalidades
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Busca e Contratação */}
            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Search className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Busca e Contratação</h3>
              <p className="text-muted-foreground mb-6">
                Acesse um banco de talentos com filtros avançados. Pesquise por área de especialização, 
                experiência, localização e muito mais. Encontre o profissional ideal para sua equipe.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>✓ Filtros avançados de busca</li>
                <li>✓ Perfis detalhados de candidatos</li>
                <li>✓ Contato direto com profissionais</li>
                <li>✓ Processo de contratação simplificado</li>
              </ul>
              <Button
                onClick={() => setLocation('/company/recruitment')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Acessar Busca e Contratação
              </Button>
            </Card>

            {/* EJ RH AI */}
            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">EJ RH AI</h3>
              <p className="text-muted-foreground mb-6">
                Plataforma inteligente de gestão de RH com análise de desempenho em tempo real. 
                Monitore suas equipes, identifique oportunidades de desenvolvimento e otimize resultados.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>✓ Análise de desempenho automática</li>
                <li>✓ Recomendações de contratação</li>
                <li>✓ Análise de dados e métricas</li>
                <li>✓ Relatórios personalizados</li>
              </ul>
              <Button
                onClick={() => setLocation('/company/rhia')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Acessar EJ RH AI
              </Button>
            </Card>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excelência</h3>
              <p className="text-muted-foreground">
                Buscamos sempre a melhor qualidade em nossas soluções e serviços
              </p>
            </Card>
            <Card className="p-8 bg-card border-border text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusão</h3>
              <p className="text-muted-foreground">
                Criamos oportunidades para todos, independente de origem ou background
              </p>
            </Card>
            <Card className="p-8 bg-card border-border text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-accent-foreground" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Impacto Social</h3>
              <p className="text-muted-foreground">
                Transformamos vidas através da educação e oportunidades de trabalho
              </p>
            </Card>
          </div>
        </section>

        {/* Objetivo */}
        <section className="bg-card rounded-xl p-8 md:p-12 border border-border shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Nosso Objetivo</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Conectar empresas com talentos qualificados, oferecendo uma plataforma inovadora que utiliza 
            inteligência artificial para otimizar processos de recrutamento e gestão de pessoas. Queremos 
            reduzir a desigualdade de oportunidades e criar um futuro onde educação, tecnologia e trabalho 
            caminham juntos.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Para Empresas</h3>
              <p className="text-muted-foreground">
                Encontre talentos qualificados rapidamente, reduza custos de recrutamento e 
                otimize a gestão de sua equipe com inteligência artificial.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Para Profissionais</h3>
              <p className="text-muted-foreground">
                Acesse oportunidades de emprego, cursos gratuitos e mentorias para desenvolver 
                suas habilidades e construir uma carreira de sucesso.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
