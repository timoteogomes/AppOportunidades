import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function WorshipManagementApp() {
  const [groups, setGroups] = useState(["Campanha Evangelizadora", "COI", "Comissão", "Conjunto Musical", "Coral", "Coro Jovem", "Instrumental Shamah", "PROATI", "União de Adolescentes"]);
  const [positions, setPositions] = useState([
    { id: 1, name: "1° Órgão a cantar", group: "" },
    { id: 2, name: "2° Órgão a cantar", group: "" },
    { id: 3, name: "3° Órgão a cantar", group: "" },
    { id: 4, name: "4° Órgão a cantar", group: "" },
    { id: 5, name: "5° Órgão a cantar", group: "" },
    { id: 6, name: "6° Órgão a cantar", group: "" },
    { id: 7, name: "7° Órgão a cantar", group: "" },
    { id: 8, name: "8° Órgão a cantar", group: "" },
    { id: 9, name: "9° Órgão a cantar", group: "" },
    { id: 10, name: "10° Órgão a cantar", group: "" },
  ]);

  const updatePosition = (id, group) => {
    setPositions(
      positions.map((pos) => (pos.id === id ? { ...pos, group } : pos))
    );
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Gerenciamento de Oportunidades</h1>
      
      {positions.map((position) => (
        <Card key={position.id} className="p-4">
          <CardContent className="flex justify-between items-center">
            <span>{position.name}</span>
            <Select onValueChange={(value) => updatePosition(position.id, value)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder={position.group || "Selecione um grupo"} />
              </SelectTrigger>
              <SelectContent>
                {groups.map((group, index) => (
                  <SelectItem key={index} value={group}>{group}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      ))}
      
      <Button onClick={() => setGroups([...groups, `Grupo ${String.fromCharCode(65 + groups.length)}`])}>
        Adicionar Grupo de Louvor
      </Button>
    </div>
  );
}
