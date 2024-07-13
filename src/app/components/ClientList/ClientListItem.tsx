import React from 'react';
import { Client } from '../../types';

interface Props {
  client: Client;
  onView: (client: Client) => void;
}

const ClientListItem: React.FC<Props> = ({ client, onView }) => (
  <div className="flex justify-between space-x-6 items-center p-6">
    <div className="flex flex-col space-y-2">
      <span className="font-medium text-gray-800">{client.name}</span>
      <span className="text-sm text-gray-600">Abono total: ${client.totalPaymentsRecibedFromDebtors}</span>
    </div>
    <div>
      <button 
        onClick={() => onView(client)} 
        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
      >
        Ver
      </button>
    </div>
  </div>
);

export default ClientListItem;