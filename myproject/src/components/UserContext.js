import React from 'react'

//create Context api
const UserContext = React.createContext()


//Provide context Value
const UserProvider = UserContext.Provider

// Consume Context value

const UserConsumer = UserContext.Consumer

export { UserProvider,UserConsumer}