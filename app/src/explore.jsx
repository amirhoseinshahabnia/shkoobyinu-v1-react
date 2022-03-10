import { useState } from 'react';
import NftCard from './components/nftcard';
import { fetchNFTs } from './utils/fetchNFTs';

const Explore = () => {

    const [owner, setOwner] = useState("")
    const [contractAddress, setContractAddress] = useState("")
    const [NFTs, setNFTs] = useState("")
    const [chain, setBlockchain] = useState("Ethereum")

    return (
        <div className="explore">
            <section className='flex flex-wrap justify-center'>
                {/*{
                    NFTs ? NFTs.map(NFT => {
                        
                        return (
                           <NftCard key={NFT.value.id} 
                                    image={NFT.value.image} 
                                    id={NFT.value.id} 
                                    title={NFT.value.title} 
                                    description={NFT.value.description} 
                                    address={NFT.value.contractAddress} 
                                    attributes={NFT.value.attributes}>        
                            </NftCard>
                        )
                    }) : <div>No NFTs found</div>
                }*/}
            </section>
        </div>
    )
}


export default Explore