'use client';

import React, { useState, useEffect } from 'react';

interface Manager {
  managerName: string;
  totalAmountManaged: number;
}

interface Client {
  clientId: string;
  name: string;
  totalPaymentsRecibedFromDebtors: number;
}

// Componente ClientListPage
const ClientListPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [managers, setManagers] = useState<Manager[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // Fetch clients data
    fetch(`${apiUrl}/clients`)
      .then(response => response.json())
      .then(data => setClients(data))
      .catch(error => console.error('Error fetching clients:', error));
  }, [apiUrl]);

  const handleViewClient = (client: Client) => {
    setSelectedClient(client);
    // Fetch managers data for the selected client
    fetch(`${apiUrl}/payments/${client.name}`)
      .then(response => response.json())
      .then(data => setManagers(data))
      .catch(error => console.error('Error fetching managers:', error));
  };

  const handleBackToList = () => {
    setSelectedClient(null);
    setManagers([]);
  };

  if (selectedClient) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe] min-h-screen p-6">
        <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <button onClick={handleBackToList} className="mb-4 text-blue-600 hover:underline">&larr; Volver a la lista</button>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Información del Cliente</h1>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedClient.name}</h2>
            <p className="text-xl mb-4 text-gray-700">Abono total recibido: ${selectedClient.totalPaymentsRecibedFromDebtors}</p>
          </div>
          
          <div className="flex flex-col space-y-2 divide-y">
            {managers.map((manager, index) => (
              <div key={index} className="flex justify-between space-x-6 items-center p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col space-y-2">
                    <span className="font-medium text-gray-800">{manager.managerName}</span>
                    <span className="text-sm text-gray-600">Monto gestionado: ${manager.totalAmountManaged}</span>
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
            <div key={client.clientId} className="flex justify-between space-x-6 items-center p-6">
              <div className="flex flex-col space-y-2">
                <span className="font-medium text-gray-800">{client.name}</span>
                <span className="text-sm text-gray-600">Abono total: ${client.totalPaymentsRecibedFromDebtors}</span>
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
