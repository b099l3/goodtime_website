import { faBeerMugEmpty, faOm, faPersonRunning, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  // Determine which icon to use based on the category
  const getIcon = () => {
    switch (logo) {
      case 'running':
        return faPersonRunning;
      case 'beer':
        return faBeerMugEmpty;
      case 'pizza':
        return faPizzaSlice;
        case 'yoga':
          return faOm;
      default:
        return faPersonRunning;
    }
  };

  return (
    <Link href={`/events/${slug}`}>
      <a
        className="w-full p-4 border-2 border-white rounded bg-goodtime-blue2"
        {...rest}
      >
        <FontAwesomeIcon icon={getIcon()} className="text-3xl mv-2"/>
        <h3 className="mt-2 text-lg font-bold text-left text-white">
          {title}
        </h3>
        <p className="mt-1 text-white">{description}</p>
      </a>
    </Link>
  );
}
