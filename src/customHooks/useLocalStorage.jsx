import React from "react";


function useLocalStorage( itemName, initalValue ) {

    const [dataStatus,setDataStatus] = React.useState({loading:true, error:false});

    const [item, setItem] = React.useState(initalValue);

    React.useEffect(() => {
        try {
            
            // traigo del local storage la clave que le pasé: 'ADMIN_DASHBOARD'
            const localStorageItem = localStorage.getItem(itemName);
            
            let parseItem;

            // si NO existen registros 'ADMIN_DASHBOARD'
            if (!localStorageItem) {

                // creo una nueva entrada para Local Storage y le paso initialValue, un array vacío (se ve en el useContext al llamar al localStorage)
                localStorage.setItem(itemName, JSON.stringify(initalValue));

                // creo un array vacío
                parseItem = [];
            } else {

                // si entra por este ELSE es porque ya existe un registro en el Local Storage con esa llave, entonces lo traigo y lo parseo.
                parseItem = JSON.parse(localStorageItem);
            }

            // le paso a la funcion SetItem los datos del storage, para que los meta en `item`
            setItem(parseItem);
            
            // esto se usaba para simular un estado de loading.   
            setDataStatus({ ...dataStatus, loading: false })
        } catch (error) {
            setDataStatus({ ...dataStatus, error: error })
        }
    }, []);







    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setDataStatus({ ...dataStatus, error: error })
        }

    }

    return {
        item,
        saveItem,
        dataStatus,
        setDataStatus,
    };


}

export { useLocalStorage };