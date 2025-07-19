require('dotenv').config();

module.exports = {
  //CYPHER-X:~UEsDBBQAAAgIALF281pXM3B4VAQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGLnJLaIjFgEV8W6jyMY+lFBIKfcqEJzw3zfQ6el52J3t5anIysg8ec7J+g7SDBNkoxao30Fe4hpS1B1pmyOgglEVhqgEfRBACoEKjjPc7DDnJr4iLXV0M61S36ScwKNmvNge66QhwtjcnZeO8wYefZBXpxj7vyk4cew5VvJm4Lo1cW*rqpCxUFbhimkvh7A1kdYjxobR7VH2Bh5dRYhLnJ7NPEIJKmFso3YNcfk1+IKepfNMmOTpUSjkKGz3tZsouzkz5EY8e6i2jKN5jBea*PFr8AObjOlqIRdS05h7Xc*3jFUcVhQySRVxZjktxpk0VSa1u3jBJ*icosAKUEoxbb*MezGDyLsKzaYHh+0YZlHKubuBYK2Ga3*NJvxKnm+H2t0q09vXgC+2d0QOG7SO*Pnx1pLIZyo2a8VCQAfbdU0n9hXrBMPR3f8V+Lr88Mr1**DOaYujZzrnJWEZsjpW0aD25MtuVslj7xDLS9S7CJndYyZX+Wvw0eoUuvI2X2V7vG1uPc5dXofFoceeDee2b+aoNVtjZg2uhvAJH9Kq*B1KVBuFML5hufZvvrhkrAFc59Wg4c69U8LezQ0SlP1sDSshmx+HhZdtC8G5+O+ySBnDSU5VUPJ2Gr+T3D7X3Ht25kbJ5fb2nOiKWisAKvvogxKdMaElpDhLuxjHiH0Ag3qH*BLRJ73A23lNIFA+zTW05BeVXiC7xWtZ2UpNvJNker1wNZPJg+vmDfRBXmY+IgQFU0xoVrYLRAg8IwLUP**qgxQ19CVc145n+yDEJaFOWuVxBoMPVT8uoe9nVUp3berr3QGVQGU+w4hSnJ5Jx2OVwtKPcI30CFIC1BDGBP2cEJUoACotK*Rza*Us6Ig3tt54Ye*3oA+SpyA4ACpQOJ4X2eGQk3hFFZg*yLdbVxbm+bcUUdAH8TNN5lmel4eipHASI3WJXfzxE2BXL0AU4pgAFejzyroW5sRc1Vgii8lEM8+aftbA50AfzngxH9vCJpGWCTetJdGpGGr7OjuMCrHghuUyvCAn9RYTsnIM8vYPRYAK2ORiBsJGMbxBYV1nUmAsnenwOl*fpVDcFbxhLNEq2XPXtQmniTwfOvF7lE03Rm+5PomHhesz1GBpPamzu+ayI*uunDTtresWoBr76NdmnNjEtykeD3RkNXNRmFYWy+rCKRSx3a5HohnR+CSuULDbG2mTL7QtapXEw3Bpz++DXlxy*MzexkfuMEDOaMq6zMKOtJdnnzsT*3ir8NNNnVTdb4jRc*VT2An439K9gHcOYx79X2r8eEz+ZSFH3q4yZ9Xdo5HU68VzOt+lGkVHWBW0gndX4OMZ9z4qjViTwOPxVx*kMaRhViZABTANygwHoA*KrOosa6Vh9ptm+siyRpvX5DEkVPtcg3ecIEJhkgOVlYacwosyK7yy1mWWTyGJgAr4reLxSufpVsvzHYX0Y6uA1n2zhQEefwNQSwECFAMUAAAICACxdvNaVzNweFQEAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=
  SESSION_ID: process.env.SESSION_ID || '',
  
  //+923074499097
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user