// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import React, { useEffect, useState } from "react";

export const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error("Error al obtener los productos");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [API]);

  return products;
};
export const login = (email, password) => {
  const data = {
    email,
    password
  };

  return fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Credenciales incorrectas');
      }
    })
    .then(result => {
      localStorage.setItem('token', result.token);
      return result;
    })
    .catch(error => {
      console.error(error);
      throw new Error('Credenciales incorrectas');
    });
};
export const register = (name, email, password) => {
  const data = {
    name,
    email,
    password,
    type: "admin"
  };

  return fetch('http://localhost:5000/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};
export const deleteProduct = (productId) => {
  return fetch(`http://localhost:5000/api/products/${productId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error al eliminar el producto");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
export const updateProduct = (productId, editedData) => {
  return fetch(`http://localhost:5000/api/products/edit/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error al guardar los cambios");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
export const createProduct = (data) => {
  return fetch(`http://localhost:5000/api/products/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // Producto creado exitosamente
        return response.json();
      } else {
        throw new Error('Error al crear el producto');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

