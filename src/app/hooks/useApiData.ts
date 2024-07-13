import { useState, useEffect } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function useClientData() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/clients`)
      .then(response => response.json())
      .then(data => setClients(data))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  return clients;
}

export function useManagerData(clientName: string) {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    if (clientName) {
      fetch(`${apiUrl}/payments/${clientName}`)
        .then(response => response.json())
        .then(data => setManagers(data))
        .catch(error => console.error('Error fetching managers:', error));
    }
  }, [clientName]);

  return managers;
}