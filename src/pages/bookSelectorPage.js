// import { resetHeader } from '../actions/header';
import BookSelector from '../components/selectors/BookSelector';

function BookSelectorPage() {
  // const [, headerDispatch] = useContext(HeaderContext);

  // useEffect(() => {
  //   headerDispatch(resetHeader());
  // }, []);

  return <BookSelector />;
}

export default BookSelectorPage;
