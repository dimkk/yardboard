const getById = ( list, id ) => {
    return list.filter( item => item.id == id  )[ 0 ] 
}

export default getById;