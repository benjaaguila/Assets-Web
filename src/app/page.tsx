'use client';

import React, { useState } from 'react';
import PageLayout from './components/Layout/PageLayout';
import ClientList from './components/ClientList/ClientList';
import ClientDetails from './components/ClientDetails/ClientDetails';
import { useClientData, useManagerData } from './hooks/useApiData';
import { Client } from './types';

const ClientListPage: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const clients = useClientData();
  const managers = useManagerData(selectedClient?.name || '');

  const handleViewClient = (client: Client) => {
    setSelectedClient(client);
  };

  const handleBackToList = () => {
    setSelectedClient(null);
  };

  return (
    <PageLayout>
      {selectedClient ? (
        <ClientDetails client={selectedClient} managers={managers} onBack={handleBackToList} />
      ) : (
        <ClientList clients={clients} onViewClient={handleViewClient} />
      )}
    </PageLayout>
  );
};

export default ClientListPage;