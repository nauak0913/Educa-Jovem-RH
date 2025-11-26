import { useState } from 'react';
import { useLocation } from 'wouter';
import { SidebarMenu } from '@/components/SidebarMenu';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, TrendingUp, Users, Calculator } from 'lucide-react';

// Mock data - funcionários
const mockEmployees = [
  {
    id: 1,
    name: 'João Silva',
    position: 'Desenvolvedor Python',
    technical: 8.7,
    behavioral: 7.6,
    itd: 8.26,
    trend: '+0.7%',
    riskLevel: 'baixo',
  },
  {
    id: 2,
    name: 'Maria Santos',
    position: 'Designer UI/UX',
    technical: 8.2,
    behavioral: 8.5,
    itd: 8.35,
    trend: '+1.2%',
    riskLevel: 'baixo',
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    position: 'Gerente de Projetos',
    technical: 4.8,
    behavioral: 7.2,
    itd: 5.4,
    trend: '-2.1%',
    riskLevel: 'alto',
  },
  {
    id: 4,
    name: 'Ana Costa',
    position: 'Desenvolvedora React',
    technical: 8.9,
    behavioral: 8.1,
    itd: 8.57,
    trend: '+1.5%',
    riskLevel: 'baixo',
  },
];

// Mock data - recomendações de substituição
const mockRecommendations = [
  {
    id: 1,
    name: 'Pedro Ferreira',
    course: 'Automação Agrícola',
    itd: 8.2,
  },
  {
    id: 2,
    name: 'Lucas Mendes',
    course: 'Mecânica Industrial',
    itd: 7.9,
  },
  {
    id: 3,
    name: 'Felipe Alves',
    course: 'Eletricista',
    itd: 8.0,
  },
];

export default function RHIA() {
  const [, setLocation] = useLocation();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedEmployee, setSelectedEmployee] = useState<typeof mockEmployees[0] | null>(null);

  const menuItems = [
    {
      label: 'Voltar para Home',
      icon: <ArrowLeft size={20} />,
      onClick: () => setLocation('/company'),
    },
    {
      label: 'Busca e Contratação',
      icon: null,
      onClick: () => setLocation('/company/recruitment'),
    },
  ];

  const companyMetrics = {
    technical: 8.6,
    behavioral: 7.8,
    itd: 8.32,
    trend: '+2.1%',
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'alto':
        return 'text-red-600';
      case 'médio':
        return 'text-yellow-600';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarMenu items={menuItems} />

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-accent">
            EJ RH AI - Gestão Inteligente de Pessoas
          </h1>
          <p className="text-muted-foreground mt-2">
            Análise de desempenho e recomendações automáticas
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="employees">Funcionários</TabsTrigger>
            <TabsTrigger value="analytics">Análise de Dados</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Company Metrics */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Desempenho da Empresa</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-6 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Desempenho Técnico</p>
                  <p className="text-3xl font-bold text-accent">{companyMetrics.technical}</p>
                  <p className="text-xs text-green-600 mt-2">↑ {companyMetrics.trend}</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Desempenho Comportamental</p>
                  <p className="text-3xl font-bold text-accent">{companyMetrics.behavioral}</p>
                  <p className="text-xs text-red-600 mt-2">↓ -3.7%</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">ITD (Índice Total)</p>
                  <p className="text-3xl font-bold text-accent">{companyMetrics.itd}</p>
                  <p className="text-xs text-green-600 mt-2">↑ {companyMetrics.trend}</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Funcionários Monitorados</p>
                  <p className="text-3xl font-bold text-accent">{mockEmployees.length}</p>
                  <p className="text-xs text-muted-foreground mt-2">Ativos</p>
                </div>
              </div>
            </Card>

            {/* AI Analysis */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">Análise da IA</h2>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  O desempenho técnico da empresa cresceu 4.8% em relação ao mês anterior, 
                  indicando melhor produtividade e cumprimento de metas. No entanto, há uma 
                  leve queda de 3.7% no desempenho comportamental, sugerindo possível fadiga 
                  ou questões de bem-estar. Recomenda-se acompanhamento leve e incentivo de 
                  pausas para recuperação emocional da equipe.
                </p>
              </div>
            </Card>

            {/* Risk Alerts */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Alertas de Risco</h2>
              <div className="space-y-4">
                {mockEmployees
                  .filter((emp) => emp.riskLevel === 'alto')
                  .map((employee) => (
                    <div
                      key={employee.id}
                      className="p-4 bg-background rounded-lg border border-red-200 flex items-start justify-between"
                    >
                      <div>
                        <h3 className="font-bold">{employee.name}</h3>
                        <p className="text-sm text-muted-foreground">{employee.position}</p>
                        <p className="text-sm mt-2">
                          <strong>ITD:</strong> {employee.itd} (Crítico)
                        </p>
                      </div>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Ver Recomendações
                      </Button>
                    </div>
                  ))}
              </div>
            </Card>
          </TabsContent>

          {/* Employees Tab */}
          <TabsContent value="employees" className="space-y-6">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Análise de Funcionários</h2>
              <div className="space-y-4">
                {mockEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    className="p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{employee.name}</h3>
                        <p className="text-sm text-muted-foreground">{employee.position}</p>
                      </div>
                      <div className={`text-lg font-bold ${getRiskColor(employee.riskLevel)}`}>
                        {employee.riskLevel.toUpperCase()}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Técnico</p>
                        <p className="text-2xl font-bold text-accent">{employee.technical}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Comportamental</p>
                        <p className="text-2xl font-bold text-accent">{employee.behavioral}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">ITD</p>
                        <p className="text-2xl font-bold text-accent">{employee.itd}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Tendência</p>
                        <p className="text-2xl font-bold text-green-600">{employee.trend}</p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEmployee(employee);
                      }}
                    >
                      Ver Detalhes Completos
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Employee Detail Modal */}
            {selectedEmployee && (
              <Card className="p-8 bg-card border-border border-accent">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Perfil Detalhado - {selectedEmployee.name}</h2>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedEmployee(null)}
                  >
                    Fechar
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold mb-4">Métricas de Desempenho</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Desempenho Técnico</p>
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full"
                            style={{ width: `${(selectedEmployee.technical / 10) * 100}%` }}
                          />
                        </div>
                        <p className="text-sm font-bold mt-1">{selectedEmployee.technical}/10</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Desempenho Comportamental</p>
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full"
                            style={{ width: `${(selectedEmployee.behavioral / 10) * 100}%` }}
                          />
                        </div>
                        <p className="text-sm font-bold mt-1">{selectedEmployee.behavioral}/10</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-4">Análise IA</h3>
                    <p className="text-muted-foreground">
                      {selectedEmployee.riskLevel === 'alto'
                        ? 'Desempenho técnico abaixo do esperado. Recomenda-se acompanhamento e possível realocação. Verifique as recomendações de substituição.'
                        : 'Funcionário com bom desempenho. Considere promover para posições de liderança ou mentoria.'}
                    </p>
                  </div>
                </div>

                {selectedEmployee.riskLevel === 'alto' && (
                  <div className="border-t border-border pt-6">
                    <h3 className="font-bold mb-4">Candidatos Recomendados para Substituição</h3>
                    <div className="space-y-3">
                      {mockRecommendations.map((rec) => (
                        <div key={rec.id} className="p-4 bg-background rounded-lg border border-border">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-bold">{rec.name}</p>
                              <p className="text-sm text-muted-foreground">{rec.course}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-accent">{rec.itd}</p>
                              <p className="text-xs text-muted-foreground">ITD</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            )}
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Análise de Dados</h2>

              <div className="space-y-8">
                {/* Performance by Department */}
                <div>
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <TrendingUp size={20} />
                    Desempenho por Departamento
                  </h3>
                  <div className="space-y-3">
                    {[
                      { dept: 'Desenvolvimento', score: 8.7 },
                      { dept: 'Design', score: 8.5 },
                      { dept: 'Gestão', score: 6.2 },
                    ].map((item) => (
                      <div key={item.dept}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.dept}</span>
                          <span className="text-sm font-bold text-accent">{item.score}/10</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full"
                            style={{ width: `${(item.score / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data Calculator */}
                <div className="border-t border-border pt-8">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Calculator size={20} />
                    Calculadora de Dados
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Custo Médio por Contratação</p>
                      <p className="text-2xl font-bold text-accent">R$ 2.500</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">ROI Médio (6 meses)</p>
                      <p className="text-2xl font-bold text-accent">340%</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Tempo Médio de Contratação</p>
                      <p className="text-2xl font-bold text-accent">15 dias</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Taxa de Retenção</p>
                      <p className="text-2xl font-bold text-accent">92%</p>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="border-t border-border pt-8">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Users size={20} />
                    Recomendações Estratégicas
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">1.</span>
                      <span>Investir em treinamento comportamental para melhorar bem-estar da equipe</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">2.</span>
                      <span>Revisar carga de trabalho do departamento de Gestão</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">3.</span>
                      <span>Implementar programa de mentoria entre departamentos</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">4.</span>
                      <span>Considerar contratações em áreas de alta demanda</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
