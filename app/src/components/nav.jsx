import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';
import Login from '../login';
import { useAccount } from 'wagmi';
import { ClipboardIcon } from '@heroicons/react/outline';
import ProfileImage from '../utils/profileImages';

const Nav = () => {
  const [{ data: accountData }, disconnect] = useAccount();
  return (
    <div className="flex-grow flex justify-end mt-4 mr-12 -mb-20">
      {accountData ? (
        <div className="flex items-center">
          <div className="flex mr-4 text-white gap-4">
            <Link className="mr-2 " to="/invest">
              Invest
            </Link>

            <div className="flex items-center">
              <p className="">{`${[...accountData.address]
                .splice(0, 6)
                .join('')}...${[...accountData.address]
                .splice(37)
                .join('')}`}</p>
              <ClipboardIcon
                onClick={() =>
                  navigator.clipboard.writeText(accountData.address)
                }
                className="h-4 w-4 -mt-2 text-slate-200 cursor-pointer"
              ></ClipboardIcon>
            </div>
          </div>
          <button
            className=" py-2 px-4 rounded-lg bg-white mr-4"
            onClick={() => {
              disconnect();
            }}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <Link className=" py-2 px-4 rounded-lg bg-white" to={'/'}>
          Connect
        </Link>
      )}
    </div>
  );
};

export default Nav;
