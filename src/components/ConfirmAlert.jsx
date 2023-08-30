import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ConfirmAlert = () => {
    const handleConfirmation = () => {
        confirmAlert({
          title: 'Confirmation',
          message: 'Are you sure?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert('You clicked Yes'),
            },
            {
              label: 'No',
              onClick: () => alert('You clicked No'),
            },
          ],
        });
      };
  return (
    <>
      <h1>Are you sure to delete?</h1>
      <button onClick={() => console.log("yes")}>Yes</button>
      <button onClick={() => console.log("no")}>NO</button>
    </>
  );
};

export default ConfirmAlert;
