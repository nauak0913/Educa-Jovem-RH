import { useState } from 'react';
import { useLocation } from 'wouter';
import { SidebarMenu } from '@/components/SidebarMenu';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Briefcase, Award, Mail, Phone, ArrowLeft } from 'lucide-react';

// Mock data - candidatos
const mockCandidates = [
  {
    id: 1,
    name: 'João Silva',
    area: 'Desenvolvimento',
    specialization: 'Python, JavaScript',
    age: 28,
    city: 'São Paulo',
    school: 'Universidade de São Paulo',
    experience: '5 anos',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Maria Santos',
    area: 'Design',
    specialization: 'UI/UX, Figma',
    age: 26,
    city: 'Rio de Janeiro',
    school: 'SENAI',
    experience: '3 anos',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    area: 'Marketing',
    specialization: 'Digital Marketing, SEO',
    age: 31,
    city: 'Belo Horizonte',
    school: 'SENAC',
    experience: '7 anos',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Ana Costa',
    area: 'Desenvolvimento',
    specialization: 'React, Node.js',
    age: 25,
    city: 'Curitiba',
    school: 'Bootcamp Tech',
    experience: '2 anos',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Pedro Ferreira',
    area: 'Dados',
    specialization: 'Data Science, SQL',
    age: 32,
    city: 'São Paulo',
    school: 'Universidade Federal',
    experience: '6 anos',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Lucas Mendes',
    area: 'Desenvolvimento',
    specialization: 'Java, Spring Boot',
    age: 29,
    city: 'Salvador',
    school: 'SENAI',
    experience: '4 anos',
    rating: 4.8,
  },
];

export default function Recruitment() {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<typeof mockCandidates[0] | null>(null);

  const menuItems = [
    {
      label: 'Voltar para Home',
      icon: <ArrowLeft size={20} />,
      onClick: () => setLocation('/company'),
    },
    {
      label: 'EJ RH AI',
      icon: null,
      onClick: () => setLocation('/company/rhia'),
    },
  ];

  const filteredCandidates = mockCandidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = !selectedArea || candidate.area === selectedArea;
    const matchesCity = !selectedCity || candidate.city === selectedCity;
    return matchesSearch && matchesArea && matchesCity;
  });

  const areas = Array.from(new Set(mockCandidates.map((c) => c.area)));
  const cities = Array.from(new Set(mockCandidates.map((c) => c.city)));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarMenu items={menuItems} />

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-accent">
            Busca e Contratação
          </h1>
          <p className="text-muted-foreground mt-2">
            Encontre os melhores talentos para sua empresa
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedCandidate ? (
          <>
            {/* Filters */}
            <Card className="p-6 bg-card border-border mb-8">
              <h2 className="text-xl font-bold mb-6">Filtros de Busca</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Buscar por nome ou especialização
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                    <Input
                      type="text"
                      placeholder="Ex: Python, Maria..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm font-medium mb-2">Área</label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="">Todas as áreas</option>
                    {areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium mb-2">Cidade</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="">Todas as cidades</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {filteredCandidates.length} Candidato(s) encontrado(s)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCandidates.map((candidate) => (
                  <Card
                    key={candidate.id}
                    className="p-6 bg-card border-border hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedCandidate(candidate)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{candidate.name}</h3>
                        <p className="text-accent font-medium">{candidate.area}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">
                          {candidate.rating}
                        </div>
                        <p className="text-xs text-muted-foreground">Avaliação</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>{candidate.specialization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{candidate.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{candidate.experience}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCandidate(candidate);
                      }}
                    >
                      Ver Perfil Completo
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Candidate Detail View
          <div>
            <Button
              onClick={() => setSelectedCandidate(null)}
              variant="outline"
              className="mb-6"
            >
              ← Voltar para Lista
            </Button>

            <Card className="p-8 bg-card border-border">
              <div className="mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{selectedCandidate.name}</h1>
                    <p className="text-xl text-accent font-medium">{selectedCandidate.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-accent">
                      {selectedCandidate.rating}
                    </div>
                    <p className="text-muted-foreground">Avaliação</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-bold mb-2">Informações Pessoais</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Idade:</strong> {selectedCandidate.age} anos</p>
                      <p><strong>Cidade:</strong> {selectedCandidate.city}</p>
                      <p><strong>Escola:</strong> {selectedCandidate.school}</p>
                      <p><strong>Experiência:</strong> {selectedCandidate.experience}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Especialidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCandidate.specialization.split(',').map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                        >
                          {spec.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-bold mb-6">Ações</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2"
                      size="lg"
                    >
                      <Mail size={20} />
                      Enviar Email
                    </Button>
                    <Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2"
                      size="lg"
                    >
                      <Phone size={20} />
                      Ligar
                    </Button>
                    <Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      Contratar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
