import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Users, Building2 } from 'lucide-react';

export default function Welcome() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-accent">
            EducaJovem
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Conectando Educação, Tecnologia e Trabalho ao Futuro
          </p>
          <p className="text-lg text-muted-foreground">
            Escolha seu perfil para começar
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Alunos/Adultos */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Users size={32} className="text-accent-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Alunos & Adultos
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Encontre cursos gratuitos, mentorias e oportunidades de emprego para desenvolver suas habilidades.
            </p>
            <Button
              onClick={() => setLocation('/students')}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              Entrar como Aluno/Adulto
            </Button>
          </div>

          {/* Empresas */}
          <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Building2 size={32} className="text-accent-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Empresas
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Encontre talentos qualificados, gerencie equipes com IA e otimize seus processos de RH.
            </p>
            <Button
              onClick={() => setLocation('/company')}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              Entrar como Empresa
            </Button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            EducaJovem © 2024 - Transformando o futuro através da educação e tecnologia
          </p>
        </div>
      </div>
    </div>
  );
}
