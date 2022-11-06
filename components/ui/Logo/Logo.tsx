import { Link, Image } from '@components/ui';
import btc_logo from '../../../assets/btc_logo.png'

export const Logo = ({ className = '' }) => (
  <Link
    href='/'
    className={`${className} font-heading transform text-3xl font-medium text-rose-500  scale-50 hover:scale-75 hover:text-rose-600 dark:text-rose-500`}
  >
    <Image src={btc_logo} alt='BTC' />
  </Link>
);