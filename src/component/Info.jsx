import React, { useContext, useState } from 'react'
import { AllUsers } from '../context/ContextUsers'


const Info = () => {
  const { totalRandomUser } = useContext(AllUsers);
  const [visibleTables, setVisibleTables] = useState([]);

  const toggleTableVisibility = (index) => {
    setVisibleTables((prevVisibleTables) => ({
      ...prevVisibleTables,
      [index]: !prevVisibleTables[index],
    }));
  };


  return (
    <div className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900'>
      <section>
        {totalRandomUser?.map((user, index) => {

          return (
      <div className='flex flex-col gap-4 items-center justify-center'>
            
      <h3 className='p-4 font-bold text-xl'>Foto del usuario</h3>
      <img src={user.picture.medium} alt={user.id.name} className='object-contain h-[80px] w-[80px] border-double border-2 border-black rounded'/>
          
      <button onClick={() => toggleTableVisibility(index)} className='p-2 bg-blue-950 text-white font-bold rounded-lg shadow-lg text-sm'>
              {visibleTables[index] ? 'Ocultar detalles' : 'Mostrar detalles'}
      </button>
      {visibleTables[index] && (
      <table key={index} className='table-auto gap-4 bg-white'>
        <thead>
          <tr>
            <th className='p-4 border-4 border-blue-300'>Nombre</th>
            <th className='p-4 border-4 border-blue-300'>Apellido</th>
            <th className='p-4 border-4 border-blue-300'>Direccion</th>
            <th className='p-4 border-4 border-blue-300'>Zona Horaria</th>
            <th className='p-4 border-4 border-blue-300'>Email de Contacto</th>
            <th className='p-4 border-4 border-blue-300'>Telefonos</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td className='p-4 border-4 border-blue-300'>
              <p>{user.name.title} {user.name.first} </p>
            </td>
            <td className='p-4 border-4 border-blue-300'>
            <p>{user.name.last} </p>
            </td>
            <td className='p-4 w-[300px] border-4 border-blue-300'>
              <p >
                <span className='font-semibold'>Calle:</span> {user.location.street.name} {user.location.street.number}
              </p>
              <p>
                <span className='font-semibold'>Ciudad:</span> {user.location.city}
              </p>
              <p>
                <span className='font-semibold'>Estado:</span> {user.location.state}
              </p>
              <p>
                <span className='font-semibold'>Pais:</span> {user.location.country}
              </p>
              <p>
                <span className='font-semibold'>Codigo Postal:</span> {user.location.postcode}
              </p>
            </td>
            <td className='p-4 border-4 border-blue-300'>
              <p>({user.location.timezone.offset}) en {user.location.timezone.description}</p>
            </td>
            <td className='p-4 border-4 border-blue-300'>
              <p>{user.email}</p>
            </td>
            <td className='p-4 border-4 border-blue-300'>
              <p><span className='font-semibold'>Casa:</span> {user.phone}</p>
              <p><span className='font-semibold'>Personal:</span> {user.cell}</p>
            </td>
          </tr>
        </tbody>
        </table>
      )}
        </div>
        )
        })}
      </section>
    </div>
  )
}

export default Info