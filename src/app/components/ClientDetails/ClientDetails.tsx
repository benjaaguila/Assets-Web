import React from 'react';
import ManagerList from './ManagerList';
import { Client, Manager } from '../../types';

interface Props {
  client: Client;
  managers: Manager[];
  onBack: () => void;
}

const ClientDetails: React.FC<Props> = ({ client, managers, onBack }) => (
  <>
    <div className="p-6">
      <button onClick={onBack} className="mb-4 text-blue-600 hover:underline">&larr; Volver a la lista</button>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Información del Cliente</h1>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{client.name}</h2>
      <p className="text-xl mb-4 text-gray-700">Abono total recibido: ${client.totalPaymentsRecibedFromDebtors}</p>
    </div>
    <ManagerList managers={managers} />
  </>
);

export default ClientDetails;