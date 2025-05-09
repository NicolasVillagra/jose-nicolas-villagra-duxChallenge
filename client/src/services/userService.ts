const API_BASE = 'https://staging.duxsoftware.com.ar/api/personal';
const SECTOR = 4000;

export async function getUsers(page: number, limit: number) {
  try {
    const response = await fetch(`${API_BASE}?sector=${SECTOR}&_limit=${limit}&_page=${page}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('La respuesta no tiene el formato esperado.');
    }

    // Extraer el total desde los headers (si está disponible)
    const totalCountHeader = response.headers.get('X-Total-Count');
    const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

    return {
      data,
      totalCount,
    };
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
}


export async function createUser(user: { usuario: string; estado: string }) {
  try {
    const response = await fetch(`${API_BASE}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...user, sector: SECTOR }),
    });
    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
}

export async function updateUser(id: number, user: { usuario: string; estado: string }) {
  try {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...user, sector: SECTOR }),
    });
    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
    return true;
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    throw error;
  }
}