'use client';

import React, { useState, useEffect } from 'react';

// Definición de tipos
interface Manager {
  id: number;
  name: string;
  totalManagedAmount: number;
  image: string;
}

interface Client {
  id: number;
  name: string;
  managers: Manager[];
  totalPaymentsReceived: number;
}

// Componente ClientListPage
const ClientListPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  useEffect(() => {
    // Simulación de datos hardcodeados
    const simulatedClients: Client[] = [
      {
        id: 1,
        name: 'Cliente A',
        managers: [
          { id: 1, name: 'Gestor 1', totalManagedAmount: 1500, image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg" },
          { id: 2, name: 'Gestor 2', totalManagedAmount: 2000, image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg" },
        ],
        totalPaymentsReceived: 5000
      },
      {
        id: 2,
        name: 'Cliente B',
        managers: [
          { id: 3, name: 'Gestor 3', totalManagedAmount: 2500, image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" },
        ],
        totalPaymentsReceived: 3000
      },
      {
        id: 3,
        name: 'Cliente C',
        managers: [
          { id: 4, name: 'Gestor 4', totalManagedAmount: 3000, image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg" },
          { id: 5, name: 'Gestor 5', totalManagedAmount: 1800, image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" },
        ],
        totalPaymentsReceived: 7000
      },
    ];

    // Establecer los datos simulados al estado
    setClients(simulatedClients);
  }, []);

  const handleViewClient = (client: Client) => {
    setSelectedClient(client);
  };

  const handleBackToList = () => {
    setSelectedClient(null);
  };

  if (selectedClient) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe] min-h-screen p-6">
        <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <button onClick={handleBackToList} className="mb-4 text-blue-600 hover:underline">&larr; Volver a la lista</button>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Información del Cliente</h1>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedClient.name}</h2>
            <p className="text-xl mb-4 text-gray-700">Abono total recibido: ${selectedClient.totalPaymentsReceived}</p>
          </div>
          
          <div className="flex flex-col space-y-2 divide-y">
            {selectedClient.managers.map((manager) => (
              <div key={manager.id} className="flex justify-between space-x-6 items-center p-6">
                <div className="flex items-center space-x-4">
                  <img src={manager.image} className="rounded-full h-14 w-14" alt={manager.name} />
                  <div className="flex flex-col space-y-2">
                    <span className="font-medium text-gray-800">{manager.name}</span>
                    <span className="text-sm text-gray-600">Monto gestionado: ${manager.totalManagedAmount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe] min-h-screen p-6">
      <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Lista de Clientes</h1>
        </div>
        
        <div className="flex flex-col space-y-2 divide-y">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-between space-x-6 items-center p-6">
              <div className="flex flex-col space-y-2">
                <span className="font-medium text-gray-800">{client.name}</span>
                <span className="text-sm text-gray-600">Abono total: ${client.totalPaymentsReceived}</span>
              </div>
              <div>
                <button 
                  onClick={() => handleViewClient(client)} 
                  className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  Ver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientListPage;