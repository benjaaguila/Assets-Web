import React from 'react';
import { Manager } from '../../types';

interface Props {
  managers: Manager[];
}

const ManagerList: React.FC<Props> = ({ managers }) => (
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
);

export default ManagerList;