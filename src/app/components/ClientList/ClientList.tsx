import React from 'react';
import ClientListItem from './ClientListItem';
import { Client } from '../../types';

interface Props {
  clients: Client[];
  onViewClient: (client: Client) => void;
}

const ClientList: React.FC<Props> = ({ clients, onViewClient }) => (
  <>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Lista de Clientes</h1>
    </div>
    <div className="flex flex-col space-y-2 divide-y">
      {clients.map((client) => (
        <ClientListItem key={client.clientId} client={client} onView={onViewClient} />
      ))}
    </div>
  </>
);

export default ClientList;